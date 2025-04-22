/**
 * API Service
 * Handles all API communication with Supabase
 */

import { supabase } from '../utils/supabaseClient';

export default class ApiService {
  /**
   * Make a GET request
   * @param {string} endpoint - API endpoint
   * @returns {Promise<Object>} - Response data
   */
  async get(endpoint) {
    try {
      // Parse the endpoint to determine what table and query to use
      const { table, id, query } = this.parseEndpoint(endpoint);
      let response;

      if (id) {
        // Get a specific record by ID
        response = await supabase
          .from(table)
          .select('*')
          .eq('id', id)
          .single();
      } else if (query) {
        // Handle special queries
        response = await this.handleSpecialQuery(table, query);
      } else {
        // Get all records from a table
        response = await supabase
          .from(table)
          .select('*');
      }
      
      // Handle errors
      if (response.error) {
        // Handle unauthorized
        if (response.error.code === 'PGRST301') {
          window.location.href = '/login';
          return { success: false, message: 'Authentication required' };
        }
        throw new Error(response.error.message);
      }
      
      return { 
        success: true, 
        data: response.data 
      };
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
      const { table, query } = this.parseEndpoint(endpoint);
      
      // Handle special cases for signatures, etc.
      if (query) {
        return await this.handleSpecialPost(table, query, data);
      }
      
      // Standard insert
      const response = await supabase
        .from(table)
        .insert(data)
        .select()
        .single();
      
      // Handle errors
      if (response.error) {
        // Handle unauthorized
        if (response.error.code === 'PGRST301') {
          window.location.href = '/login';
          return { success: false, message: 'Authentication required' };
        }
        throw new Error(response.error.message);
      }
      
      return { 
        success: true, 
        insertedId: response.data?.id,
        data: response.data
      };
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
      const { table, id } = this.parseEndpoint(endpoint);
      
      if (!id) {
        throw new Error('ID is required for PUT requests');
      }
      
      const response = await supabase
        .from(table)
        .update(data)
        .eq('id', id)
        .select()
        .single();
      
      // Handle errors
      if (response.error) {
        // Handle unauthorized
        if (response.error.code === 'PGRST301') {
          window.location.href = '/login';
          return { success: false, message: 'Authentication required' };
        }
        throw new Error(response.error.message);
      }
      
      return { success: true, data: response.data };
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
      const { table, id } = this.parseEndpoint(endpoint);
      
      if (!id) {
        throw new Error('ID is required for DELETE requests');
      }
      
      const response = await supabase
        .from(table)
        .delete()
        .eq('id', id);
      
      // Handle errors
      if (response.error) {
        // Handle unauthorized
        if (response.error.code === 'PGRST301') {
          window.location.href = '/login';
          return { success: false, message: 'Authentication required' };
        }
        throw new Error(response.error.message);
      }
      
      return { success: true };
    } catch (error) {
      console.error(`DELETE ${endpoint} failed:`, error);
      return { success: false, message: error.message };
    }
  }

  /**
   * Parse the endpoint to determine table, id, and query
   * @param {string} endpoint - API endpoint
   * @returns {Object} - Parsed endpoint details
   */
  parseEndpoint(endpoint) {
    // Remove leading slash if present
    const path = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
    const parts = path.split('/');
    
    // Basic parsing for common patterns
    if (parts[0] === 'api') {
      // Handle /api/resource/id format
      if (parts.length === 3) {
        return { table: parts[1], id: parts[2] };
      }
      // Handle /api/resource format
      else if (parts.length === 2) {
        return { table: parts[1] };
      }
      // Handle /api/resource/action format (like /api/signatures/verify)
      else if (parts.length === 4) {
        return { table: parts[1], id: parts[2], query: parts[3] };
      }
    }
    
    // For special endpoints like '/login', '/register', etc.
    return { specialEndpoint: path };
  }

  /**
   * Handle special queries that don't map directly to simple selects
   * @param {string} table - The table name
   * @param {string} query - The query part of the endpoint
   * @returns {Promise<Object>} - Query response
   */
  async handleSpecialQuery(table, query) {
    // Handle specific special cases based on the application's needs
    if (table === 'signatures' && query === 'verify') {
      // Example: Special handling for signature verification
      return await supabase
        .from('signatures')
        .select('verification_date, cert_level, employee_id, cert_number')
        .eq('id', id);
    }
    
    // Default fallback for other cases
    return await supabase
      .from(table)
      .select('*');
  }

  /**
   * Handle special POST requests that need custom logic
   * @param {string} table - The table name
   * @param {string} query - The query part of the endpoint
   * @param {Object} data - The request data
   * @returns {Promise<Object>} - Response data
   */
  async handleSpecialPost(table, query, data) {
    // Handle specific special cases for POST requests
    if (table === 'signatures' && query === 'request') {
      // Custom handling for signature requests (might include sending emails)
      // This is just a placeholder - actual implementation would depend on your needs
      const response = await supabase
        .from('signatures')
        .insert({
          entry_id: data.entryId,
          technician_id: (await supabase.auth.getUser()).data.user.id,
          // Include other signature data from the request
          ...data
        })
        .select()
        .single();
        
      if (response.error) throw new Error(response.error.message);
      
      return { success: true, insertedID: response.data.id };
    }
    
    // Default fallback
    return { success: false, message: 'Unhandled special post request' };
  }
}
