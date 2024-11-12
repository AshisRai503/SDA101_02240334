class CustomCard extends HTMLElement {
    constructor() {
      super();
  
      // Create a shadow root
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Define default styles
      const style = document.createElement('style');
      style.textContent = `
        :host {
          display: block;
          width: 300px;
          margin: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          background-color: var(--bg-color, #ffffff);
          border: 1px solid var(--border-color, #e5e7eb);
          font-family: sans-serif;
        }
        .card-header {
          padding: 1rem;
          background-color: var(--header-bg, #f3f4f6);
        }
        .card-content {
          padding: 1rem;
        }
        .card-footer {
          padding: 1rem;
          background-color: var(--footer-bg, #f9fafb);
          text-align: center;
        }
        ::slotted([slot="header"]) {
          font-size: 1.25rem;
          font-weight: bold;
        }
        ::slotted([slot="content"]) {
          font-size: 1rem;
        }
        ::slotted([slot="footer"]) {
          font-size: 0.875rem;
        }
      `;
  
      // Attach the style to shadow DOM
      shadow.appendChild(style);
  
      // Create card container
      const card = document.createElement('div');
      card.classList.add('card');
  
      // Create and append the header
      const header = document.createElement('div');
      header.classList.add('card-header');
      header.innerHTML = this.getAttribute('header') || 'Default Header';
      card.appendChild(header);
  
      // Create and append the content
      const content = document.createElement('div');
      content.classList.add('card-content');
      content.innerHTML = this.innerHTML || 'Default content area.';
      card.appendChild(content);
  
      // Create and append the footer
      const footer = document.createElement('div');
      footer.classList.add('card-footer');
      footer.innerHTML = this.getAttribute('footer') || 'Default Footer';
      card.appendChild(footer);
  
      // Append the card to the shadow DOM
      shadow.appendChild(card);
    }
  }
  
  // Define the custom element
  customElements.define('custom-card', CustomCard);
  