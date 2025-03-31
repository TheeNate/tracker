/**
 * Export Manager
 * Handles PDF exports and reports
 */

export default class ExportManager {
  constructor(entryManager) {
    this.entryManager = entryManager;
  }

  /**
   * Export entries to PDF
   */
  exportToPDF() {
    // Access jsPDF from global scope (loaded via CDN)
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add title
    doc.text("NDT HOURS TRACKER", 10, 10);

    // Gather table data
    const rows = document.querySelectorAll('#trackerTable tbody tr');
    const tableData = [];
    
    rows.forEach(row => {
      const date = row.cells[1].querySelector('input').value;
      const method = row.cells[2].querySelector('select').value;
      const location = row.cells[3].querySelector('input').value;
      const hours = row.cells[4].querySelector('input').value;
      const company = row.cells[5].querySelector('select').value;

      // For the supervisor column:
      let supervisorText = '';
      const supervisorCell = row.cells[6];
      if (supervisorCell.querySelector('button')) {
        supervisorText = "Pending Signature";
      } else {
        supervisorText = supervisorCell.textContent.trim();
      }

      // Only include rows with data
      if (date || method || location || hours || company || supervisorText) {
        tableData.push([date, method, location, hours, company, supervisorText]);
      }
    });

    // Create the table in the PDF
    doc.autoTable({
      head: [['DATE', 'METHOD', 'LOCATION', 'HOURS', 'COMPANY', 'SUPERVISOR']],
      body: tableData,
      startY: 20,
    });

    // Total hours
    const totalHours = document.getElementById('totalHoursValue').textContent;
    doc.text(`Total Hours: ${totalHours}`, 10, doc.lastAutoTable.finalY + 10);

    // Method breakdown data
    const methodRows = document.querySelectorAll('#methodTable tbody tr');
    const methodData = [];
    methodRows.forEach(row => {
      const cells = row.querySelectorAll('td');
      const method = cells[0].textContent;
      const hrs = cells[1].textContent;
      methodData.push([method, hrs]);
    });

    // Add method breakdown table
    doc.autoTable({
      head: [['Method', 'Hours']],
      body: methodData,
      startY: doc.lastAutoTable.finalY + 20,
    });

    // Add a footer with current date
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    doc.setFontSize(10);
    doc.text(`Generated on ${dateStr}`, 10, doc.internal.pageSize.height - 10);

    // Save the PDF
    doc.save('NDT_HOURS_TRACKER.pdf');
  }

  /**
   * Future enhancement: Export to CSV
   */
  exportToCSV() {
    // Placeholder for future implementation
  }

  /**
   * Future enhancement: Export to Excel
   */
  exportToExcel() {
    // Placeholder for future implementation
  }
}
