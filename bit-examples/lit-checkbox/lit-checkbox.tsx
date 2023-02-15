import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement("lit-checkbox")
export class LitCheckbox extends LitElement {
  static styles = css``;

  @property()
  label = "Some label";

  render() {
    return html`
      <label>
        <input type="checkbox"/>
        ${this.label}
      </label>
    `;
  }
}
