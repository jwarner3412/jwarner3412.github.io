import { LitElement, html } from "@polymer/lit-element";

class ContactView extends LitElement {
  static get properties() {
    return {content: {type: Object}}
  }

  constructor() {
    super()

  }

  render() {
    return html``
  }
}
customElements.define('contact-view', ContactView)