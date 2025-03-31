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
    }
  
    renderEntries(entries = []) {
      this.tableBody.innerHTML = '';
      entries.forEach(entry => this.addEntryRow(entry));
    }
  
    addEntryRow(entry) {
      const row = document.createElement('tr');
  
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
  }
  