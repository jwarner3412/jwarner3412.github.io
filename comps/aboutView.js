import { LitElement, html } from "@polymer/lit-element";
import '/comps/sectionTitle.js'

class AboutView extends LitElement{
  static get properties() {
    return {
      content: {type: String}
    }
  }

  render() {
    return html`
      <style>
        div {
          background-color: white;
        }
      </style>
      <section>
        <section-title>${this.content.title}</section-title>
        <div>
          <p>
            ${this.content.text}
            <img href=${this.content.url}></img>
          </p>
        </div>
      </section>
    `
  }
}
customElements.define('about-view', AboutView)