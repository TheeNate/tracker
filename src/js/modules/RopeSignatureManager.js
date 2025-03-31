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
        alert('Signature request sent!');
        this.modal.style.display = 'none';
      } else {
        alert('Request failed: ' + response.message);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Try again.');
    }
  }
}
