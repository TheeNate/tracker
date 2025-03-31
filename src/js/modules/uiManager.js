/**
 * UI Manager
 * Handles all UI interactions, rendering, and DOM updates
 */

import ApiService from '../utils/api';
import { createElementWithAttributes } from '../utils/domUtils';

export default class UIManager {
  constructor() {
    this.api = new ApiService();
    this.eventHandlers = {};
    this.currentMethodSelect = null;
    this.currentCompanySelect = null;
  }

  /**
   * Initialize event listeners for UI elements
   * @param {Object} handlers - Object containing event handler functions
   */
  initializeEventListeners(handlers) {
    this.eventHandlers = handlers;
    
    // Add event listener for logout button
    document.getElementById('logoutBtn').addEventListener('click', handlers.onLogout);
    
    // Add event listener for add line button
    document.getElementById('addLineBtn').addEventListener('click', handlers.onAddLine);
    
    // Add event listener for export PDF button
    document.getElementById('exportPDFBtn').addEventListener('click', handlers.onExportPDF);
    
    // Add event listener for refresh signatures button
    document.getElementById('refreshBtn').addEventListener('click', handlers.onRefreshSignatures);
    
    // Add event listener for changes to entries
    document.addEventListener('change', this.handleTableChanges.bind(this));
    
    // Add event listener for input to update totals
    document.addEventListener('input', this.handleInputChanges.bind(this));
    
    // Add event listener for clicks (delete, sign, verify buttons)
    document.addEventListener('click', this.handleButtonClicks.bind(this));

    // Event delegation for verification modal
  document.addEventListener('click', function(event) {
    // Close button click
    if (event.target.closest('.verification-modal .close')) {
      document.getElementById('verificationModal').style.display = 'none';
    }
    
    // Click outside modal
    if (event.target.classList.contains('verification-modal')) {
      event.target.style.display = 'none';
    }
  });
    
    // Set up modal close buttons
    this.setupModals();
    
    // Initialize signature form
    this.setupSignatureForm();
  }

  /**
   * Handle changes to table values
   * @param {Event} event - Change event
   */
  handleTableChanges(event) {
    // Handle method select change
    if (event.target.classList.contains('methodSelect')) {
      if (event.target.value === 'ADD METHOD') {
        const newMethod = prompt('Enter new method:');
        if (newMethod && this.eventHandlers.onAddMethod) {
          this.currentMethodSelect = event.target;
          this.eventHandlers.onAddMethod(newMethod);
        } else {
          event.target.value = '';
        }
      }
      this.updateTotals();
    } 
    // Handle company select change
    else if (event.target.classList.contains('companySelect')) {
      if (event.target.value === 'ADD COMPANY') {
        const newCompany = prompt('Enter new company:');
        if (newCompany && this.eventHandlers.onAddCompany) {
          this.currentCompanySelect = event.target;
          this.eventHandlers.onAddCompany(newCompany);
        } else {
          event.target.value = '';
        }
      }
    }
    
    // Handle any change within a table row
    const row = event.target.closest('tr');
    if (row && row.dataset.entryId) {
      // Check if this is a signed row
      if (row.classList.contains('signed-row')) {
        alert("This entry has been signed and cannot be modified.");
        // Reset the field to its original value
        event.target.value = event.target.defaultValue;
        return;
      }
      
      // Get entry data
      const entryId = row.dataset.entryId;
      const dateValue = row.cells[1].querySelector('input[type="date"]').value;
      const methodValue = row.cells[2].querySelector('select').value;
      const locationValue = row.cells[3].querySelector('input[type="text"]').value;
      const hoursValue = parseFloat(row.cells[4].querySelector('input[type="number"]').value) || 0;
      const companyValue = row.cells[5].querySelector('select').value;
      
      // Call the update handler
      if (this.eventHandlers.onUpdateEntry) {
        this.eventHandlers.onUpdateEntry(entryId, {
          entryDate: dateValue,
          method: methodValue,
          location: locationValue,
          hours: hoursValue,
          company: companyValue
        });
        
        // Update the defaultValue to match the new value (for reset-on-sign)
        if (event.target.tagName === 'INPUT') {
          event.target.defaultValue = event.target.value;
        }
      }
    }
  }

  /**
   * Handle input changes for numbers to update totals
   * @param {Event} event - Input event
   */
  handleInputChanges(event) {
    if (event.target.type === 'number' && event.target.closest('#trackerTable')) {
      this.updateTotals();
    }
  }

  /**
   * Handle button clicks within the table
   * @param {Event} event - Click event
   */
  handleButtonClicks(event) {
    // Handle delete button clicks
    if (event.target.classList.contains('delete-btn')) {
      const row = event.target.closest('tr');
      const entryId = row.dataset.entryId;
      
      if (this.eventHandlers.onDeleteEntry) {
        this.eventHandlers.onDeleteEntry(entryId).then(success => {
          if (success) {
            row.remove();
            this.updateTotals();
          }
        });
      }
    }
    
    // Handle signature request button clicks
    if (event.target.classList.contains('signBtn')) {
      const row = event.target.closest('tr');
      
      if (this.eventHandlers.onRequestSignature) {
        this.eventHandlers.onRequestSignature(row);
      }
    }
    
    // Handle verification button clicks
    if (event.target.classList.contains('verify-btn')) {
      const signatureId = event.target.dataset.signature;
      const method = event.target.dataset.method;
      const hours = event.target.dataset.hours;
      const supervisor = event.target.closest('tr').querySelector('td:nth-child(7)').textContent.trim();
      const hash = event.target.dataset.hash;
      
      if (this.eventHandlers.onVerifySignature) {
        this.eventHandlers.onVerifySignature({
          signatureId,
          method,
          hours,
          supervisor,
          timestampHash: hash
        });
      }
    }
  }

  /**
   * Set up modals and their close buttons
   */
  setupModals() {
    // Set up close buttons for all modals
    document.querySelectorAll('.modal .close').forEach(closeBtn => {
      closeBtn.addEventListener('click', () => {
        closeBtn.closest('.modal').style.display = 'none';
      });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
      }
    });
  }

  /**
   * Set up signature form submission
   */
  setupSignatureForm() {
    const signatureForm = document.getElementById('signatureForm');
    if (signatureForm) {
      signatureForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Collect form data
        const formData = {
          name: document.getElementById('supervisorName').value,
          email: document.getElementById('supervisorEmail').value,
          company: document.getElementById('supervisorCompany').value,
          asnt: document.getElementById('asnt').value,
          certLevel: document.getElementById('certLevel').value
        };
        
        // Call the submission handler
        if (this.eventHandlers.onSubmitSignature) {
          this.eventHandlers.onSubmitSignature(formData).then(success => {
            if (success) {
              // Reset the form
              signatureForm.reset();
              // Hide the modal
              document.getElementById('signatureModal').style.display = 'none';
            }
          });
        }
      });
    }
  }

  /**
   * Fetch and display user info
   */
  async fetchUserInfo() {
    try {
      const response = await this.api.get('/api/user');
      
      if (response.success) {
        // Display user name
        document.getElementById('userDisplay').textContent = `Welcome, ${response.user.full_name}`;
        
        // Update the page title
        document.querySelector('h1').textContent = `${response.user.full_name}'s NDT Hours Tracker`;
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  }

  /**
   * Render entries in the table
   * @param {Array} entries - Array of entry objects
   * @param {Array} methods - Array of available methods
   * @param {Array} companies - Array of available companies
   */
  renderEntries(entries, methods, companies) {
    const tableBody = document.querySelector('#trackerTable tbody');
    tableBody.innerHTML = ''; // Clear existing rows
    
    entries.forEach(entry => {
      const newRow = this.createEntryRow(entry, methods, companies);
      tableBody.appendChild(newRow);
    });
  }

  /**
   * Add a single entry row to the table
   * @param {Object} entry - Entry data
   * @param {Array} methods - Array of available methods
   * @param {Array} companies - Array of available companies
   */
  addEntryRow(entry, methods, companies) {
    const tableBody = document.querySelector('#trackerTable tbody');
    const newRow = this.createEntryRow(entry, methods, companies);
    tableBody.appendChild(newRow);
    return newRow;
  }

  /**
   * Create an entry row element
   * @param {Object} entry - Entry data
   * @param {Array} methods - Array of available methods
   * @param {Array} companies - Array of available companies
   * @returns {HTMLElement} - The created row element
   */
  createEntryRow(entry, methods, companies) {
    const row = document.createElement('tr');
    row.dataset.entryId = entry.id;
    
    // Method options
    const methodOptions = methods.map(method => 
      `<option ${entry.method === method ? 'selected' : ''}>${method}</option>`
    ).join('');
    
    // Company options
    const companyOptions = companies.map(company => 
      `<option ${entry.company === company ? 'selected' : ''}>${company}</option>`
    ).join('');
    
    row.innerHTML = `
      <td><span class="delete-btn">&times;</span></td>
      <td><input type="date" value="${entry.formattedDate || ''}"></td>
      <td>
        <select class="methodSelect">
          <option value="" ${entry.method === '' ? 'selected' : ''}>Select Method</option>
          ${methodOptions}
          <option>ADD METHOD</option>
        </select>
      </td>
      <td><input type="text" value="${entry.location || ''}"></td>
      <td><input type="number" min="0" step="0.1" value="${entry.hours || 0}"></td>
      <td>
        <select class="companySelect">
          <option value="" ${entry.company === '' ? 'selected' : ''}>Select Company</option>
          ${companyOptions}
          <option>ADD COMPANY</option>
        </select>
      </td>
      <td><button class="signBtn">Request Signature</button></td>
      <td class="hash-cell"></td>
    `;
    
    return row;
  }

  /**
   * Update signatures in the table
   * @param {Array} signatures - Array of signature objects
   */
  updateSignatures(signatures) {
    signatures.forEach(sig => {
      const allRows = document.querySelectorAll('#trackerTable tbody tr');
      // Look for the row with a matching entry_id
      const matchingRow = [...allRows].find(r => r.dataset.entryId == sig.entry_id);

      if (matchingRow && sig.status === 'Confirmed') {
        // Replace the signBtn with the auto_signature text in cursive
        const signCell = matchingRow.querySelector('td:nth-child(7)');
        if (signCell) {
          signCell.innerHTML = `<span class="signature">${sig.auto_signature}</span>`;
        }
        
        // Add verification button to the last cell if we have a timestamp hash
        const verifyCell = matchingRow.querySelector('td:last-child');
        if (verifyCell && sig.timestamp_hash) {
          verifyCell.innerHTML = `<button class="verify-btn" data-signature="${sig.id}" 
            data-method="${sig.method}" data-hours="${sig.hours}" 
            data-hash="${sig.timestamp_hash}">Verify</button>`;
        } else if (verifyCell) {
          verifyCell.textContent = 'No hash available';
        }
        
        // Disable all inputs in the signed row
        this.disableSignedRow(matchingRow);
      }
    });
  }

  /**
   * Update method select dropdowns
   * @param {Array} methods - Array of available methods
   */
  updateMethodSelects(methods) {
    const methodSelects = document.querySelectorAll('.methodSelect');
    methodSelects.forEach(select => {
      // Get current value
      const currentValue = select.value;
      
      // Remove existing options except the first and last
      while (select.options.length > 2) {
        select.remove(1);
      }
      
      // Add methods in reverse order (they'll be inserted after the first option)
      [...methods].reverse().forEach(method => {
        const option = document.createElement('option');
        option.value = method;
        option.text = method;
        select.insertBefore(option, select.options[1]);
      });
      
      // Try to restore previous value
      if (methods.includes(currentValue)) {
        select.value = currentValue;
      }
    });
    
    // Set the remembered current select to the new method
    if (this.currentMethodSelect) {
      this.currentMethodSelect.value = methods[methods.length - 1];
      this.updateTotals();
      this.currentMethodSelect = null;
    }
  }

  /**
   * Update company select dropdowns
   * @param {Array} companies - Array of available companies
   */
  updateCompanySelects(companies) {
    const companySelects = document.querySelectorAll('.companySelect');
    companySelects.forEach(select => {
      // Get current value
      const currentValue = select.value;
      
      // Remove existing options except the first and last
      while (select.options.length > 2) {
        select.remove(1);
      }
      
      // Add companies in reverse order (they'll be inserted after the first option)
      [...companies].reverse().forEach(company => {
        const option = document.createElement('option');
        option.value = company;
        option.text = company;
        select.insertBefore(option, select.options[1]);
      });
      
      // Try to restore previous value
      if (companies.includes(currentValue)) {
        select.value = currentValue;
      }
    });
    
    // Set the remembered current select to the new company
    if (this.currentCompanySelect) {
      this.currentCompanySelect.value = companies[companies.length - 1];
      this.currentCompanySelect = null;
    }
  }

  /**
   * Update total hours and method breakdown
   */
  updateTotals() {
    const rows = document.querySelectorAll('#trackerTable tbody tr');
    let totalHours = 0;
    const methodTotals = {};

    rows.forEach(row => {
      const methodSelect = row.querySelector('.methodSelect');
      const hoursInput = row.querySelector('input[type="number"]');
      if (methodSelect && hoursInput) {
        const method = methodSelect.value;
        const hours = parseFloat(hoursInput.value) || 0;
        if (method && method !== 'ADD METHOD') {
          totalHours += hours;
          if (!methodTotals[method]) {
            methodTotals[method] = 0;
          }
          methodTotals[method] += hours;
        }
      }
    });

    // Update total hours display
    document.getElementById('totalHoursValue').textContent = totalHours.toFixed(1);

    // Update method breakdown table
    const methodTableBody = document.querySelector('#methodTable tbody');
    methodTableBody.innerHTML = ''; // Clear existing rows
    
    for (const method in methodTotals) {
      const row = document.createElement('tr');
      const methodCell = document.createElement('td');
      methodCell.textContent = method;
      const hoursCell = document.createElement('td');
      hoursCell.textContent = methodTotals[method].toFixed(1);
      row.appendChild(methodCell);
      row.appendChild(hoursCell);
      methodTableBody.appendChild(row);
    }
  }

  /**
   * Disable inputs in a signed row
   * @param {HTMLElement} row - The row to disable
   */
  disableSignedRow(row) {
    // Disable all inputs and selects in the row
    const inputs = row.querySelectorAll('input, select');
    inputs.forEach(input => {
      input.disabled = true;
      input.classList.add('signed-field'); // Add a class for styling
    });
    
    // Add a class to the row itself to indicate it's signed
    row.classList.add('signed-row');
  }

  /**
   * Enhance responsive behavior for mobile devices
   */
  enhanceResponsiveBehavior() {
    // Adjust card layout on window resize
    const adjustLayout = () => {
      const isMobile = window.innerWidth <= 767;
      const tableRows = document.querySelectorAll('#trackerTable tbody tr');
      
      tableRows.forEach(row => {
        // When in mobile view, ensure the delete button is the first element
        // and is properly positioned at the top-right
        const deleteBtn = row.querySelector('.delete-btn');
        if (deleteBtn) {
          if (isMobile) {
            // Ensure delete button's parent cell has proper styling
            deleteBtn.closest('td').classList.add('delete-cell');
          } else {
            deleteBtn.closest('td').classList.remove('delete-cell');
          }
        }
      });
    };
    
    // Call once on load
    adjustLayout();
    
    // Call on window resize
    window.addEventListener('resize', adjustLayout);
    
    // Ensure new rows also get the proper layout
    if (this.eventHandlers.onAddLine) {
      const originalAddLine = this.eventHandlers.onAddLine;
      this.eventHandlers.onAddLine = (...args) => {
        originalAddLine(...args);
        // Apply layout adjustments after a short delay to ensure DOM is updated
        setTimeout(adjustLayout, 100);
      };
    }
  }
}
