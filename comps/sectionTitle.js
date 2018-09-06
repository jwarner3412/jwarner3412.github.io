import { LitElement, html } from "@polymer/lit-element";

class SectionTitle extends LitElement {
  render() {
    return html`
      <style>
        h1 {
          font-size: 2em;
        }
      </style>
      <h1>
        <slot></slot>
      </h1>
    `
  }
}
customElements.define('section-title', SectionTitle)