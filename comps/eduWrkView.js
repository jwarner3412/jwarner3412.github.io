import { LitElement, html } from "@polymer/lit-element";
import '/comps/formatList.js'
import '/comps/sectionTitle.js'

class EduWrkView extends LitElement {
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
        <section-title>${this.content.title}</section-title>
        <format-list .listItems=${this.content.items}></format-list>
      </section>
    `
  }
}
customElements.define('edu-wrk', EduWrkView)