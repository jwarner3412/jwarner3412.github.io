import { LitElement, html } from "@polymer/lit-element";
import '/comps/formatList.js'

class EduView extends LitElement {
  static get properties() {
    return {
      content: {type: Object}
    }
  }

  constructor() {
    super()

  }

  render() {
    return html`
      <section>

        <format-list .listItems=${this.content.items}></format-list>
      </section>
    `
  }
}
customElements.define('edu-view', EduView)