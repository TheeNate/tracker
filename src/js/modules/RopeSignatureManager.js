import ApiService from '../utils/api';

export default class RopeSignatureManager {
  constructor(uiManager) {
    this.api = new ApiService();
    this.uiManager = uiManager;
    this.initModal();
  }

  initModal() {
    this.modal = document.getElementById('ropeSignatureModal');
    this.form = document.getElementById('ropeSignatureForm');
    this.closeBtn = this.modal.querySelector('.close');

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.requestSignature();
    });

    this.closeBtn.addEventListener('click', () => {
      this.modal.style.display = 'none';
    });
  }

  openSignatureModal(entryId) {
    this.currentEntryId = entryId;
    this.modal.style.display = 'block';
  }

  async requestSignature() {
    const supervisorName = this.form.supervisorName.value;
    const supervisorEmail = this.form.supervisorEmail.value;
    const supervisorCompany = this.form.supervisorCompany?.value || '';
    const asnt = this.form.asnt?.value || '';
    const certLevel = this.form.certLevel?.value || '';

    try {
      const response = await this.api.post('/api/rope-signatures/request', {
        entryId: this.currentEntryId,
        supervisorName,
        supervisorEmail,
        supervisorCompany,
        asnt,
        certLevel
      });

      if (response.success) {
        alert('Signature request sent! The supervisor will receive an email with verification instructions.');
        this.modal.style.display = 'none';
      } else {
        alert('Request failed: ' + response.message);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Try again.');
    }
  }
  
  async refreshSignatures() {
    try {
      const response = await this.api.get('/api/rope-signatures');
      
      if (!response.success) {
        console.error('Error fetching signatures:', response.message);
        return;
      }
      
      const signatures = response.data || [];
      console.log('Received rope signatures:', signatures);
      
      // Update UI with signature data
      this.uiManager.updateSignatures(signatures);
    } catch (error) {
      console.error('Error refreshing signatures:', error);
    }
  }
  
  async showVerificationDetails(verificationData) {
    const { signatureId, tasks, hours, supervisor, timestampHash } = verificationData;
    
    // Get or create the modal
    let modal = document.getElementById('ropeVerificationModal');
    if (!modal) {
      modal = this.createVerificationModal();
    }
    
    // Set the values in the modal
    document.getElementById('verifyTasks').textContent = tasks;
    document.getElementById('verifyHours').textContent = hours;
    document.getElementById('verifySupervisor').textContent = supervisor;
    document.getElementById('verifyDate').textContent = 'Loading...'; // Will be updated
    document.getElementById('verifyHash').textContent = timestampHash || 'No hash available';
    
    // Show the modal
    modal.style.display = 'block';
    
    // If we have more details, fetch them
    if (signatureId) {
      try {
        const response = await this.api.get(`/api/rope-signatures/verify/${signatureId}`);
        
        if (response.success) {
          document.getElementById('verifyDate').textContent = 
            new Date(response.verification_date).toLocaleDateString();
          
          // Add certification info if available
          const certInfo = document.getElementById('verifyCertInfo');
          if (certInfo) {
            let certText = '';
            if (response.cert_number) {
              certText += `Certification Number: ${response.cert_number}`;
            }
            if (response.cert_level) {
              certText += certText ? ', ' : '';
              certText += `Level: ${response.cert_level}`;
            }
            certInfo.textContent = certText || 'No certification information provided';
          }
        }
      } catch (err) {
        console.error('Error fetching verification details:', err);
        document.getElementById('verifyDate').textContent = 'Date unavailable';
      }
    }
  }
  
  createVerificationModal() {
    // Create modal elements
    const modal = document.createElement('div');
    modal.id = 'ropeVerificationModal';
    modal.className = 'verification-modal';
    
    modal.innerHTML = `
      <div class="verification-modal-content">
        <span class="close">&times;</span>
        <h2>Rope Access Verification Details</h2>
        <div class="verification-details">
          <p><strong>Tasks:</strong> <span id="verifyTasks"></span></p>
          <p><strong>Hours:</strong> <span id="verifyHours"></span></p>
          <p><strong>Supervisor:</strong> <span id="verifySupervisor"></span></p>
          <p><strong>Verification Date:</strong> <span id="verifyDate"></span></p>
          <p><strong>Certification:</strong> <span id="verifyCertInfo"></span></p>
          <p><strong>Cryptographic Hash:</strong></p>
          <div class="hash-display" id="verifyHash"></div>
        </div>
        <p>This verification is tamper-proof and timestamped to ensure the integrity of this certification record.</p>
      </div>
    `;
    
    // Add event listeners
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
    
    // Add to document
    document.body.appendChild(modal);
    return modal;
  }
}