// Import the LitElement base class and html helper function
import { LitElement, html } from '@polymer/lit-element';

// Extend the LitElement base class
class FirstElement extends LitElement {

  static get properties() {
    return {
      message: { type: String }
    };
  }

  render(){
    return html`
      <style>
        h1 {
          color: red;
          font-family: sans-serif;
          text-align: center;
        }
      </style>
      <h1><slot></slot></h1>
    `;
  }
}
// Register the new element with the browser.
customElements.define('first-element', FirstElement);