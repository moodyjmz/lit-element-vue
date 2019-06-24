// Import the LitElement base class and html helper function
import { LitElement, html, css } from '/node_modules/@polymer/lit-element/lit-element.js';

// Extend the LitElement base class
class FirstElement extends LitElement {

  constructor() {
    super();
  }
  // throws error, array.reduce is called, but not available
  // static get styles() {
  //   return css`
  //       h2 {
  //       color: red;
  //       font-family: sans-serif;
  //       text-align: center;
  //     }
  //     :host([uppercase]) h2{
  //       text-transform: uppercase;
  //     }
  //     `;
  // }
  static get properties() {
    return {
      message: {
        type: String
      },
      uppercase: {
        type: Boolean,
        reflect: true
      }
    };
  }

  _clickHandler(e) {
    console.log(e, this.message);
  }

  render() {
    return html`
      <style>
        h2 {
          color: red;
          font-family: sans-serif;
          text-align: center;
        }
        :host([uppercase]) h2{
          text-transform: uppercase;
        }
      </style>
      <h2 @click=${this._clickHandler.bind(this)}><slot></slot></h2>
    `;
  }

  _clickHandler(e) {
    console.log('xxx', this.message);
  }
}

// Register the new element with the browser.
customElements.define('first-element', FirstElement);