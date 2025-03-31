/**
 * Entry Manager
 * Handles all operations related to entry data (CRUD operations)
 */

import ApiService from '../utils/api';
import { formatDateForInput } from '../utils/dateUtils';

export default class EntryManager {
  constructor(uiManager) {
    this.uiManager = uiManager;
    this.methodsCache = [];
    this.companiesCache = [];
    this.api = new ApiService();
  }

  /**
   * Fetch all methods from the server
   */
  async fetchMethods() {
    try {
      const response = await this.api.get('/api/methods');
      if (response.success) {
        this.methodsCache = response.data || ['UT', 'UTT', 'RT', 'MT', 'PT'];
      } else {
        console.error('Error fetching methods:', response.message);
        this.methodsCache = ['UT', 'UTT', 'RT', 'MT', 'PT']; // Default fallback
      }
    } catch (error) {
      console.error('Error fetching methods:', error);
      this.methodsCache = ['UT', 'UTT', 'RT', 'MT', 'PT']; // Default fallback
    }
  }

  /**
   * Fetch all companies from the server
   */
  async fetchCompanies() {
    try {
      const response = await this.api.get('/api/companies');
      if (response.success) {
        this.companiesCache = response.data || ['Mistras', 'Company B'];
      } else {
        console.error('Error fetching companies:', response.message);
        this.companiesCache = ['Mistras', 'Company B']; // Default fallback
      }
    } catch (error) {
      console.error('Error fetching companies:', error);
      this.companiesCache = ['Mistras', 'Company B']; // Default fallback
    }
  }

  /**
   * Fetch all entries from the server
   */
  async fetchEntries() {
    try {
      const response = await this.api.get('/api/entries');
      if (!response.success) {
        console.error('Error fetching entries:', response.message);
        return;
      }
      
      const entries = response.data;
      
      // Format dates and prepare entries for display
      const formattedEntries = entries.map(entry => ({
        ...entry,
        formattedDate: formatDateForInput(entry.entry_date)
      }));
      
      // Update UI with entries
      this.uiManager.renderEntries(formattedEntries, this.methodsCache, this.companiesCache);
      
      // Update totals
      this.uiManager.updateTotals();
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  }

  /**
   * Add a new entry
   */
  async addNewEntry() {
    try {
      const response = await this.api.post('/api/entries', { empty: true });
      
      if (!response.success) {
        alert("Error adding blank entry to database.");
        return;
      }

      // Create a new entry with the returned ID
      const newEntry = {
        id: response.insertedId,
        entry_date: null,
        method: '',
        location: '',
        hours: 0,
        company: '',
        formattedDate: ''
      };
      
      // Update UI with the new entry
      this.uiManager.addEntryRow(newEntry, this.methodsCache, this.companiesCache);
      
      // Update totals
      this.uiManager.updateTotals();
    } catch (error) {
      console.error('Error adding new entry:', error);
      alert('Failed to add new entry. Please try again.');
    }
  }

  /**
   * Update an existing entry
   */
  async updateEntry(entryId, data) {
    try {
      const response = await this.api.put(`/api/entries/${entryId}`, data);
      
      if (!response.success) {
        console.error('Update failed:', response.message);
        return false;
      }
      
      // Update totals after successful update
      this.uiManager.updateTotals();
      return true;
    } catch (error) {
      console.error('Error updating entry:', error);
      return false;
    }
  }

  /**
   * Delete an entry
   */
  async deleteEntry(entryId) {
    try {
      // If there's no entry ID (new unsaved row), just remove from DOM
      if (!entryId) {
        return true;
      }
      
      // Confirm before deleting
      if (!confirm("Are you sure you want to delete this entry? This cannot be undone.")) {
        return false;
      }
      
      const response = await this.api.delete(`/api/entries/${entryId}`);
      
      if (!response.success) {
        alert("Failed to delete entry: " + (response.message || "Unknown error"));
        return false;
      }
      
      // Update totals after deletion
      this.uiManager.updateTotals();
      return true;
    } catch (error) {
      console.error('Error deleting entry:', error);
      alert("Network error when trying to delete entry. Please try again.");
      return false;
    }
  }

  /**
   * Add a new method
   */
  async addMethod(methodName) {
    try {
      if (!methodName) return false;
      
      const response = await this.api.post('/api/methods', { methodName });
      
      if (!response.success) {
        alert('Error adding method: ' + (response.message || 'Unknown error'));
        return false;
      }
      
      // Add to the cache if not already present
      if (!this.methodsCache.includes(methodName)) {
        this.methodsCache.push(methodName);
        this.methodsCache.sort();
      }
      
      // Update all method selects
      this.uiManager.updateMethodSelects(this.methodsCache);
      return true;
    } catch (error) {
      console.error('Error adding method:', error);
      alert('Error adding method.');
      return false;
    }
  }

  /**
   * Add a new company
   */
  async addCompany(companyName) {
    try {
      if (!companyName) return false;
      
      const response = await this.api.post('/api/companies', { companyName });
      
      if (!response.success) {
        alert('Error adding company: ' + (response.message || 'Unknown error'));
        return false;
      }
      
      // Add to the cache if not already present
      if (!this.companiesCache.includes(companyName)) {
        this.companiesCache.push(companyName);
        this.companiesCache.sort();
      }
      
      // Update all company selects
      this.uiManager.updateCompanySelects(this.companiesCache);
      return true;
    } catch (error) {
      console.error('Error adding company:', error);
      alert('Error adding company.');
      return false;
    }
  }

  /**
   * Get entry data
   * Extracts entry data from a row
   */
  getEntryDataFromRow(row) {
    return {
      entryDate: row.cells[1].querySelector('input[type="date"]').value,
      method: row.cells[2].querySelector('select').value,
      location: row.cells[3].querySelector('input[type="text"]').value,
      hours: parseFloat(row.cells[4].querySelector('input[type="number"]').value) || 0,
      company: row.cells[5].querySelector('select').value
    };
  }

  /**
   * Calculate entry totals by method
   */
  calculateTotals() {
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

    return { totalHours, methodTotals };
  }
}
