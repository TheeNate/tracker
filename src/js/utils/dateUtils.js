/**
 * Date Utils
 * Helper functions for working with dates
 */

/**
 * Format a MySQL date for HTML date input
 * @param {string} mysqlDate - Date in MySQL format (YYYY-MM-DD)
 * @returns {string} - Formatted date string (YYYY-MM-DD)
 */
export function formatDateForInput(mysqlDate) {
  if (!mysqlDate) return '';
  
  // Try to create a date object from the MySQL date
  const date = new Date(mysqlDate);
  
  // Check if the date is valid
  if (isNaN(date.getTime())) {
    console.error('Invalid date:', mysqlDate);
    return '';
  }
  
  // Format the date as YYYY-MM-DD for HTML date input
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
  const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
  
  return `${year}-${month}-${day}`;
}

/**
 * Format a date for display to users
 * @param {string|Date} date - Date to format
 * @returns {string} - Formatted date string
 */
export function formatDateForDisplay(date) {
  if (!date) return '';
  
  // Convert to Date object if string
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  // Check if the date is valid
  if (isNaN(dateObj.getTime())) {
    console.error('Invalid date:', date);
    return '';
  }
  
  // Format the date using browser's locale
  return dateObj.toLocaleDateString();
}

/**
 * Get the start of the current month
 * @returns {Date} - Start of current month
 */
export function startOfMonth() {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * Get the end of the current month
 * @returns {Date} - End of current month
 */
export function endOfMonth() {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

/**
 * Get the start of the previous month
 * @returns {Date} - Start of previous month
 */
export function startOfPreviousMonth() {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}

/**
 * Get the end of the previous month
 * @returns {Date} - End of previous month
 */
export function endOfPreviousMonth() {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), 0);
}

/**
 * Get the start of the current year
 * @returns {Date} - Start of current year
 */
export function startOfYear() {
  const date = new Date();
  return new Date(date.getFullYear(), 0, 1);
}

/**
 * Get the end of the current year
 * @returns {Date} - End of current year
 */
export function endOfYear() {
  const date = new Date();
  return new Date(date.getFullYear(), 11, 31);
}
