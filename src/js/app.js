/**
 * NDT Hours Tracker Application
 * Main entry point for the tracker application
 */

import EntryManager from './modules/entryManager';
import SignatureManager from './modules/signatureManager';
import UIManager from './modules/uiManager';
import ExportManager from './modules/exportManager';
import RopeEntryManager from './modules/ropeEntryManager.js';
import RopeUIManager from './modules/ropeUIManager.js';
import RopeSignatureManager from './modules/RopeSignatureManager.js';



// Initialize application on DOM load
document.addEventListener('DOMContentLoaded', () => {
  const pathname = window.location.pathname;

  if (pathname === '/tracker') {
    const uiManager = new UIManager();
    const entryManager = new EntryManager(uiManager);
    const signatureManager = new SignatureManager(uiManager);
    const exportManager = new ExportManager(entryManager);

    uiManager.initializeEventListeners({
      onAddLine: entryManager.addNewEntry.bind(entryManager),
      onDeleteEntry: entryManager.deleteEntry.bind(entryManager),
      onUpdateEntry: entryManager.updateEntry.bind(entryManager),
      onRequestSignature: signatureManager.openSignatureModal.bind(signatureManager),
      onSubmitSignature: signatureManager.requestSignature.bind(signatureManager),
      onVerifySignature: signatureManager.showVerificationDetails.bind(signatureManager),
      onExportPDF: exportManager.exportToPDF.bind(exportManager),
      onRefreshSignatures: signatureManager.refreshSignatures.bind(signatureManager),
      onAddMethod: entryManager.addMethod.bind(entryManager),
      onAddCompany: entryManager.addCompany.bind(entryManager),
      onLogout: () => { window.location.href = '/logout'; }
    });

    entryManager.fetchMethods();
    entryManager.fetchCompanies();
    entryManager.fetchEntries();
    uiManager.fetchUserInfo();
    uiManager.enhanceResponsiveBehavior();

  } else if (pathname === '/rope') {
    const ropeUI = new RopeUIManager();
const ropeManager = new RopeEntryManager(ropeUI);
const ropeSignature = new RopeSignatureManager(ropeUI);
ropeUI.entryManager = ropeManager;
ropeUI.signatureManager = ropeSignature;
ropeManager.fetchEntries();

  }
});

