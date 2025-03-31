import ApiService from '../utils/api.js';

export default class RopeEntryManager {
  constructor(uiManager) {
    this.uiManager = uiManager;
    this.api = new ApiService();
  }

  async fetchEntries() {
    try {
      const response = await this.api.get('/api/rope-entries');
      if (!response.success) return console.error('Fetch failed:', response.message);
      this.uiManager.renderEntries(response.data);
      this.uiManager.updateTotal();
    } catch (err) {
      console.error('Fetch error:', err);
    }
  }

  async addNewEntry() {
    try {
      const response = await this.api.post('/api/rope-entries', {
        date_from: null,
        date_to: null,
        company: '',
        location: '',
        tasks: '',
        industry: '',
        details: '',
        supervisor: '',
        rope_hours: 0,
        signature_hash: ''
      });
      if (response.success) {
        const newEntry = { id: response.insertedId, ...response.data };
        this.uiManager.addEntryRow(newEntry);
        this.uiManager.updateTotal();
      }
    } catch (err) {
      console.error('Add error:', err);
    }
  }

  async updateEntry(id, data) {
    try {
      const res = await this.api.put(`/api/rope-entries/${id}`, data);
      if (!res.success) console.error('Update failed:', res.message);
      this.uiManager.updateTotal();
    } catch (err) {
      console.error('Update error:', err);
    }
  }

  async deleteEntry(id) {
    if (!id || !confirm("Delete this entry?")) return false;
    try {
      const res = await this.api.delete(`/api/rope-entries/${id}`);
      if (!res.success) return alert("Failed to delete entry.");
      this.uiManager.updateTotal();
      return true;
    } catch (err) {
      console.error(err);
      alert("Delete failed.");
      return false;
    }
  }

  calculateTotal() {
    const rows = document.querySelectorAll('#ropeTable tbody tr');
    let total = 0;
    rows.forEach(row => {
      const hours = parseFloat(row.querySelector('input[type="number"]').value) || 0;
      total += hours;
    });
    return total;
  }
}
