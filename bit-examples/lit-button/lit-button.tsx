import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement("lit-button")
export class LitButton extends LitElement {
  static styles = css`
    button {
      background: black;
      color: white;
    }
  `;

  @property()
  text = "button text";

  render() {
    return html`<button>${this.text}</button>`;
  }
}
