export default class RopeUIManager {
  constructor(entryManager) {
    this.entryManager = entryManager;
    this.tableBody = document.querySelector('#ropeTable tbody');
    this.totalHoursDisplay = document.querySelector('#totalRopeHoursValue');
    this.init();
  }
  
  init() {
    // Add line button
    document.getElementById('addRopeLineBtn').addEventListener('click', () => {
      this.entryManager.addNewEntry();
    });
    
    // Event delegation for verification modal
    document.addEventListener('click', (event) => {
      // Close button click
      if (event.target.closest('.verification-modal .close')) {
        document.getElementById('ropeVerificationModal').style.display = 'none';
      }
      
      // Click outside modal
      if (event.target.classList.contains('verification-modal')) {
        event.target.style.display = 'none';
      }
    });
  }
  
  renderEntries(entries = []) {
    this.tableBody.innerHTML = '';
    entries.forEach(entry => this.addEntryRow(entry));
    // Refresh signatures after rendering entries
    if (this.signatureManager) {
      this.signatureManager.refreshSignatures();
    }
  }
  
  addEntryRow(entry) {
    const row = document.createElement('tr');
    row.dataset.entryId = entry.id;
    
    row.innerHTML = `
      <td><span class="delete-btn">&times;</span></td>
      <td><input type="date" value="${entry.date_from || ''}"></td>
      <td><input type="date" value="${entry.date_to || ''}"></td>
      <td><input type="text" value="${entry.company || ''}"></td>
      <td><input type="text" value="${entry.location || ''}"></td>
      <td><input type="text" value="${entry.tasks || ''}"></td>
      <td><input type="text" value="${entry.industry || ''}"></td>
      <td><input type="text" value="${entry.details || ''}"></td>
      <td><input type="text" value="${entry.supervisor || ''}"></td>
      <td><input type="number" min="0" step="0.1" value="${entry.rope_hours || 0}"></td>
      <td><button class="signBtn">Request Signature</button></td>
      <td class="hash-cell">${entry.signature_hash || ''}</td>
    `;
    
    // Event: Delete
    row.querySelector('.delete-btn').addEventListener('click', async () => {
      const success = await this.entryManager.deleteEntry(entry.id);
      if (success) row.remove();
    });
    
    // Event: Auto-save on change
    const inputs = row.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('change', () => {
        // Check if row is signed
        if (row.classList.contains('signed-row')) {
          alert("This entry has been signed and cannot be modified.");
          // Reset the field to its original value
          input.value = input.defaultValue;
          return;
        }
        
        const updated = this.getRowData(row);
        this.entryManager.updateEntry(entry.id, updated);
      });
    });
    
    this.tableBody.appendChild(row);
    
    const signBtn = row.querySelector('.signBtn');
    signBtn.addEventListener('click', () => {
      if (this.signatureManager) {
        this.signatureManager.openSignatureModal(entry.id);
      } else {
        console.warn('signatureManager not found');
      }
    });
  }
  
  updateTotal() {
    const total = this.entryManager.calculateTotal();
    this.totalHoursDisplay.textContent = total.toFixed(1);
  }
  
  getRowData(row) {
    const inputs = row.querySelectorAll('input');
    return {
      date_from: inputs[0].value,
      date_to: inputs[1].value,
      company: inputs[2].value,
      location: inputs[3].value,
      tasks: inputs[4].value,
      industry: inputs[5].value,
      details: inputs[6].value,
      supervisor: inputs[7].value,
      rope_hours: parseFloat(inputs[8].value) || 0,
      signature_hash: row.querySelector('.hash-cell').textContent
    };
  }
  
  updateSignatures(signatures) {
    signatures.forEach(sig => {
      const allRows = document.querySelectorAll('#ropeTable tbody tr');
      // Look for the row with a matching entry_id
      const matchingRow = [...allRows].find(r => r.dataset.entryId == sig.entry_id);
      
      if (matchingRow && sig.status === 'Confirmed') {
        // Replace the signBtn with the auto_signature text in cursive
        const signCell = matchingRow.querySelector('td:nth-child(11)');
        if (signCell) {
          signCell.innerHTML = `<span class="signature">${sig.auto_signature}</span>`;
        }
        
        // Add verification button to the last cell if we have a timestamp hash
        const verifyCell = matchingRow.querySelector('td:last-child');
        if (verifyCell && sig.timestamp_hash) {
          verifyCell.innerHTML = `<button class="verify-btn" data-signature="${sig.id}" 
            data-tasks="${sig.tasks || ''}" data-hours="${sig.rope_hours || 0}" 
            data-hash="${sig.timestamp_hash}">Verify</button>`;
            
          // Add click handler for verification
          const verifyBtn = verifyCell.querySelector('.verify-btn');
          verifyBtn.addEventListener('click', () => {
            if (this.signatureManager) {
              this.signatureManager.showVerificationDetails({
                signatureId: sig.id,
                tasks: verifyBtn.getAttribute('data-tasks'),
                hours: verifyBtn.getAttribute('data-hours'),
                supervisor: matchingRow.querySelector('input[type="text"]:nth-of-type(8)').value,
                timestampHash: verifyBtn.getAttribute('data-hash')
              });
            }
          });
        } else if (verifyCell) {
          verifyCell.textContent = 'No hash available';
        }
        
        // Disable all inputs in the signed row
        this.disableSignedRow(matchingRow);
      }
    });
  }
  
  disableSignedRow(row) {
    // Disable all inputs and selects in the row
    const inputs = row.querySelectorAll('input');
    inputs.forEach(input => {
      input.disabled = true;
      input.classList.add('signed-field'); // Add a class for styling
      // Save the current value as default value (to detect changes for signed rows)
      input.defaultValue = input.value;
    });
    
    // Add a class to the row itself to indicate it's signed
    row.classList.add('signed-row');
  }
}