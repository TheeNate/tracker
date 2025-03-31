/**
 * Signature Manager
 * Handles signature requesting, verification, and display
 */

import ApiService from '../utils/api';

export default class SignatureManager {
  constructor(uiManager) {
    this.uiManager = uiManager;
    this.api = new ApiService();
    this.currentRow = null;
  }

  /**
   * Open the signature request modal
   * @param {HTMLElement} row - The row element requesting a signature
   */
  openSignatureModal(row) {
    this.currentRow = row;
    document.getElementById('signatureModal').style.display = 'block';
  }

  /**
   * Request a signature for an entry
   * @param {Object} formData - Form data from the signature request form
   */
  async requestSignature(formData) {
    try {
      if (!this.currentRow) {
        alert('Error: No row selected for signature');
        return false;
      }
      
      // Get entry data from the current row
      const entryId = this.currentRow.dataset.entryId || null;
      const method = this.currentRow.querySelector('.methodSelect').value;
      const hours = this.currentRow.querySelector('input[type="number"]').value;
      
      // Combine with form data
      const requestData = {
        entryId,
        method,
        hours,
        ...formData
      };
      
      // Send signature request
      const response = await this.api.post('/api/signatures/request', requestData);
      
      if (!response.success) {
        alert('Error sending signature request: ' + (response.message || 'Unknown error'));
        return false;
      }
      
      // Update row with signature ID
      this.currentRow.dataset.signatureID = response.insertedID;
      alert('Signature request email sent successfully!');
      
      return true;
    } catch (error) {
      console.error('Error requesting signature:', error);
      alert('Error sending signature request.');
      return false;
    }
  }

  /**
   * Show verification details in a modal
   * @param {Object} verificationData - Data needed for verification display
   */
  async showVerificationDetails(verificationData) {
    const { signatureId, method, hours, supervisor, timestampHash } = verificationData;
    
    // Set the values in the modal
    document.getElementById('verifyMethod').textContent = method;
    document.getElementById('verifyHours').textContent = hours;
    document.getElementById('verifySupervisor').textContent = supervisor;
    document.getElementById('verifyDate').textContent = 'Loading...'; // Will be updated
    document.getElementById('verifyHash').textContent = timestampHash || 'No hash available';
    
    // Show the modal
    document.getElementById('verificationModal').style.display = 'block';
    
    // If we have more details, fetch them
    if (signatureId) {
      try {
        const response = await this.api.get(`/api/signatures/verify/${signatureId}`);
        
        if (response.success) {
          document.getElementById('verifyDate').textContent = 
            new Date(response.verification_date).toLocaleDateString();
        }
      } catch (err) {
        console.error('Error fetching verification details:', err);
        document.getElementById('verifyDate').textContent = 'Date unavailable';
      }
    }
  }

  /**
   * Refresh signatures and update UI
   */
  async refreshSignatures() {
    try {
      const response = await this.api.get('/api/signatures');
      
      if (!response.success) {
        console.error('Error fetching signatures:', response.message);
        return;
      }
      
      const signatures = response.data || [];
      console.log('Received signatures:', signatures);
      
      // Update UI with signature data
      this.uiManager.updateSignatures(signatures);
    } catch (error) {
      console.error('Error refreshing signatures:', error);
    }
  }

  /**
   * Disable inputs in a signed row
   * @param {HTMLElement} row - The row element to disable
   */
  disableSignedRow(row) {
    // Delegate to UI manager
    this.uiManager.disableSignedRow(row);
  }
}
