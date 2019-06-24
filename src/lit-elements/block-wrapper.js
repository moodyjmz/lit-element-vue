// Import the LitElement base class and html helper function
import { LitElement, html, css } from '/node_modules/@polymer/lit-element/lit-element.js';

// Extend the LitElement base class
class BlockWrapper extends LitElement {

  static get properties() {
    return {
      details: {
        type: String
      }
    }
  }

  render(){
    return html`
      <style>
        :host {
          display: block;
          padding: 10px;
          border: 1px solid dimgrey;
          margin: 10px;
        }
        #details {
          background: #333;
          padding: 5px;
          color: #ccc;
          font-family: sans-serif;
        }
      </style>
      <slot></slot>
      <div id="details">${this.details}</div>
    `;
  }
}
// Register the new element with the browser.
customElements.define('block-wrapper', BlockWrapper);