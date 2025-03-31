/**
 * DOM Utils
 * Helper functions for working with the DOM
 */

/**
 * Create an element with attributes and children
 * @param {string} tag - HTML tag name
 * @param {Object} attributes - Element attributes
 * @param {Array|string|HTMLElement} children - Child elements or text
 * @returns {HTMLElement} - Created element
 */
export function createElementWithAttributes(tag, attributes = {}, children = []) {
  const element = document.createElement(tag);
  
  // Set attributes
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'style' && typeof value === 'object') {
      Object.entries(value).forEach(([prop, val]) => {
        element.style[prop] = val;
      });
    } else if (key.startsWith('on') && typeof value === 'function') {
      const eventName = key.slice(2).toLowerCase();
      element.addEventListener(eventName, value);
    } else {
      element.setAttribute(key, value);
    }
  });
  
  // Add children
  if (children) {
    if (!Array.isArray(children)) {
      children = [children];
    }
    
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child instanceof HTMLElement) {
        element.appendChild(child);
      }
    });
  }
  
  return element;
}

/**
 * Remove all children from an element
 * @param {HTMLElement} element - Element to clear
 */
export function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/**
 * Check if an element is visible
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} - True if element is visible
 */
export function isElementVisible(element) {
  const style = window.getComputedStyle(element);
  return style.display !== 'none' && style.visibility !== 'hidden' && element.offsetParent !== null;
}

/**
 * Wait for an element to appear in the DOM
 * @param {string} selector - CSS selector for element
 * @param {number} timeout - Maximum time to wait in ms
 * @returns {Promise<HTMLElement>} - Found element
 */
export function waitForElement(selector, timeout = 5000) {
  return new Promise((resolve, reject) => {
    // Check if element already exists
    const element = document.querySelector(selector);
    if (element) {
      return resolve(element);
    }
    
    // Set a timeout to reject the promise
    const timeoutId = setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Element ${selector} not found within ${timeout}ms`));
    }, timeout);
    
    // Set up mutation observer to watch for the element
    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        clearTimeout(timeoutId);
        observer.disconnect();
        resolve(element);
      }
    });
    
    // Start observing
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  });
}

/**
 * Add a class to an element
 * @param {HTMLElement} element - Element to modify
 * @param {string} className - Class to add
 */
export function addClass(element, className) {
  if (element) {
    element.classList.add(className);
  }
}

/**
 * Remove a class from an element
 * @param {HTMLElement} element - Element to modify
 * @param {string} className - Class to remove
 */
export function removeClass(element, className) {
  if (element) {
    element.classList.remove(className);
  }
}

/**
 * Toggle a class on an element
 * @param {HTMLElement} element - Element to modify
 * @param {string} className - Class to toggle
 * @param {boolean} force - Force state (optional)
 */
export function toggleClass(element, className, force) {
  if (element) {
    element.classList.toggle(className, force);
  }
}
