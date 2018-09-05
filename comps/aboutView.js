import { LitElement, html } from "@polymer/lit-element";

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
        <h1><em><b>
          ${this.content.title}
        </b></em></h1>
        <div>
        <p>${this.content.text}</p>
        </div>
      </section>
    `
  }
}
customElements.define('about-view', AboutView)