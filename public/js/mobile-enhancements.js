/**
 * Mobile-Friendly Tracker Enhancement
 * Adds collapsible entry functionality for mobile devices
 */
function enhanceMobileExperience() {
    // Only apply on mobile devices
    const isMobile = window.innerWidth <= 767;
    if (!isMobile) return;
    
    // Select the table elements - support both trackerTable and ropeTable
    const tables = document.querySelectorAll('#trackerTable, #ropeTable');
    if (!tables.length) return;
    
    // Process each table found
    tables.forEach(table => {
      const tableId = table.id;
      const isRope = tableId === 'ropeTable';
      
      // Get all rows in the table
      const rows = table.querySelectorAll('tbody tr');
      
      rows.forEach(row => {
        // Skip if this row has already been processed
        if (row.querySelector('.entry-preview')) return;
        
        // 1. Create the collapsible structure
        restructureRow(row, isRope);
        
        // 2. Add toggle functionality
        const preview = row.querySelector('.entry-preview');
        if (preview) {
          preview.addEventListener('click', function(e) {
            // Don't toggle if clicking on delete button or other controls
            if (e.target.classList.contains('delete-btn') || 
                e.target.tagName === 'BUTTON' ||
                e.target.tagName === 'INPUT' ||
                e.target.tagName === 'SELECT') {
              return;
            }
            
            // Toggle expanded class
            row.classList.toggle('expanded');
          });
        }
      });
    });
  }
  
  /**
   * Restructures a table row for mobile viewing
   * @param {HTMLElement} row - The table row to restructure
   * @param {boolean} isRope - Whether this is a rope access table row
   */
  function restructureRow(row, isRope) {
    // Get all cells in the row
    const cells = row.querySelectorAll('td');
    if (!cells.length) return;
    
    // Keep the delete button accessible
    const deleteBtn = row.querySelector('.delete-btn');
    if (deleteBtn) {
      row.appendChild(deleteBtn.cloneNode(true));
    }
    
    // Create preview section structure
    const preview = document.createElement('div');
    preview.className = 'entry-preview';
    
    const previewContent = document.createElement('div');
    previewContent.className = 'preview-content';
    
    const toggleIndicator = document.createElement('div');
    toggleIndicator.className = 'toggle-indicator';
    
    // Add primary and secondary info sections
    const primaryInfo = document.createElement('div');
    primaryInfo.className = 'preview-primary';
    
    const secondaryInfo = document.createElement('div');
    secondaryInfo.className = 'preview-secondary';
    
    // Extract key information based on table type
    if (isRope) {
      // Rope Access table preview info
      const tasks = cells[5]?.querySelector('input')?.value || 'Task';
      const hours = cells[9]?.querySelector('input')?.value || '0';
      const dateFrom = cells[1]?.querySelector('input')?.value || '';
      const location = cells[4]?.querySelector('input')?.value || '';
      
      primaryInfo.textContent = `${tasks} | ${hours}h`;
      secondaryInfo.textContent = `${dateFrom ? new Date(dateFrom).toLocaleDateString() : 'No date'} | ${location || 'No location'}`;
    } else {
      // NDT Tracker table preview info
      const method = cells[2]?.querySelector('select')?.value || 'Method';
      const hours = cells[4]?.querySelector('input')?.value || '0';
      const date = cells[1]?.querySelector('input')?.value || '';
      const location = cells[3]?.querySelector('input')?.value || '';
      
      primaryInfo.textContent = `${method} | ${hours}h`;
      secondaryInfo.textContent = `${date ? new Date(date).toLocaleDateString() : 'No date'} | ${location || 'No location'}`;
    }
    
    // Assemble the preview section
    previewContent.appendChild(primaryInfo);
    previewContent.appendChild(secondaryInfo);
    preview.appendChild(previewContent);
    preview.appendChild(toggleIndicator);
    
    // Create details container
    const details = document.createElement('div');
    details.className = 'entry-details';
    
    // Move all inputs into the details section with proper labels
    cells.forEach((cell, index) => {
      // Skip first cell (delete button) and handle specially later
      if (index === 0) return;
      
      // Skip signature hash cell
      if (cell.classList.contains('hash-cell')) return;
      
      // Skip cells with signature buttons - handle separately
      if (cell.querySelector('.signBtn') || cell.querySelector('.verify-btn')) return;
      
      const input = cell.querySelector('input, select');
      if (input) {
        const group = document.createElement('div');
        group.className = 'input-group';
        
        const label = document.createElement('label');
        // Get appropriate label based on table type and index
        label.textContent = getLabelForCell(index, isRope);
        
        group.appendChild(label);
        group.appendChild(input.cloneNode(true)); // Clone to avoid moving the original
        details.appendChild(group);
      }
    });
    
    // Create actions section for sign buttons and hash
    const actions = document.createElement('div');
    actions.className = 'entry-actions';
    
    // Find signature button and hash cell
    const signCell = isRope ? cells[10] : cells[6];
    const hashCell = isRope ? cells[11] : cells[7];
    
    if (signCell) {
      // Clone the content to avoid moving the original
      actions.innerHTML += signCell.innerHTML;
    }
    
    if (hashCell) {
      const hashDiv = document.createElement('div');
      hashDiv.className = 'hash-display';
      hashDiv.innerHTML = hashCell.innerHTML;
      actions.appendChild(hashDiv);
    }
    
    // Insert our new structure at the top of the row
    row.insertBefore(preview, row.firstChild);
    row.appendChild(details);
    row.appendChild(actions);
    
    // Set initial state
    if (row.classList.contains('signed-row')) {
      // Pre-expand signed rows to show signature
      row.classList.add('expanded');
    }
  }
  
  /**
   * Get appropriate label text for a cell based on index and table type
   * @param {number} index - Cell index
   * @param {boolean} isRope - Whether this is a rope access table
   * @returns {string} - Label text
   */
  function getLabelForCell(index, isRope) {
    if (isRope) {
      // Labels for rope table
      const ropeLabels = [
        'Delete', 'Date From', 'Date To', 'Company/Client', 
        'Location', 'Tasks', 'Industry', 'Details', 
        'Supervisor', 'Hours', 'Signature', 'Hash'
      ];
      return ropeLabels[index] || `Field ${index}`;
    } else {
      // Labels for NDT tracker table
      const trackerLabels = [
        'Delete', 'Date', 'Method', 'Location', 
        'Hours', 'Company', 'Supervisor', 'Signature Hash'
      ];
      return trackerLabels[index] || `Field ${index}`;
    }
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    enhanceMobileExperience();
    
    // Re-apply when window is resized
    window.addEventListener('resize', function() {
      // Debounce to avoid excessive calls
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(function() {
        enhanceMobileExperience();
      }, 250);
    });
    
    // Monitor for new rows being added (using MutationObserver)
    const tableContainers = document.querySelectorAll('.table-container');
    tableContainers.forEach(container => {
      const observer = new MutationObserver(function(mutations) {
        enhanceMobileExperience();
      });
      
      observer.observe(container, { 
        childList: true, 
        subtree: true 
      });
    });
  });
  
  // Create a self-initializing IIFE
  (function() {
    // Function to load our custom script after the page loads
    function injectScript() {
      // Add to window load event
      if (window.addEventListener) {
        window.addEventListener('load', enhanceMobileExperience, false);
      } else if (window.attachEvent) {
        window.attachEvent('onload', enhanceMobileExperience);
      }
      
      // Also run immediately if DOM is already loaded
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(enhanceMobileExperience, 1);
      }
    }
    
    // Execute the injection
    injectScript();
  })();