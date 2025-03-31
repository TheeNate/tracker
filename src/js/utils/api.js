/**
 * API Service
 * Handles all API communication with the server
 */

export default class ApiService {
  /**
   * Make a GET request
   * @param {string} endpoint - API endpoint
   * @returns {Promise<Object>} - Response data
   */
  async get(endpoint) {
    try {
      const response = await fetch(endpoint);
      
      // Handle unauthorized (redirect to login)
      if (response.status === 401) {
        window.location.href = '/login';
        return { success: false, message: 'Authentication required' };
      }
      
      // Handle other errors
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`GET ${endpoint} failed:`, error);
      return { success: false, message: error.message };
    }
  }

  /**
   * Make a POST request
   * @param {string} endpoint - API endpoint
   * @param {Object} data - Request payload
   * @returns {Promise<Object>} - Response data
   */
  async post(endpoint, data) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      // Handle unauthorized (redirect to login)
      if (response.status === 401) {
        window.location.href = '/login';
        return { success: false, message: 'Authentication required' };
      }
      
      // Handle other errors
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`POST ${endpoint} failed:`, error);
      return { success: false, message: error.message };
    }
  }

  /**
   * Make a PUT request
   * @param {string} endpoint - API endpoint
   * @param {Object} data - Request payload
   * @returns {Promise<Object>} - Response data
   */
  async put(endpoint, data) {
    try {
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      // Handle unauthorized (redirect to login)
      if (response.status === 401) {
        window.location.href = '/login';
        return { success: false, message: 'Authentication required' };
      }
      
      // Handle other errors
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`PUT ${endpoint} failed:`, error);
      return { success: false, message: error.message };
    }
  }

  /**
   * Make a DELETE request
   * @param {string} endpoint - API endpoint
   * @returns {Promise<Object>} - Response data
   */
  async delete(endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
      
      // Handle unauthorized (redirect to login)
      if (response.status === 401) {
        window.location.href = '/login';
        return { success: false, message: 'Authentication required' };
      }
      
      // Handle other errors
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`DELETE ${endpoint} failed:`, error);
      return { success: false, message: error.message };
    }
  }
}
