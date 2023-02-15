import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement("lit-card")
export class LitCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    div {
      border: 1px solid black;
      padding: 16px;
    }
  `;

  render() {
    return html`<div><slot></slot></div>`;
  }
}
