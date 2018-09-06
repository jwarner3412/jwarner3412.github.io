import { LitElement, html } from "@polymer/lit-element";

class LinkFetch extends LitElement {
  static get properties () {
    return {
      url: {type: String},
      api: {type: String},
      user: {type: String},
      append: {type: String},
    };
  }

  render() {
    return html`
      ${fetch(this.url+this.api+this.user+this.append,{method: 'GET', mode: 'cors'})
        .then(res => res.json()).then(res => console.log(res))
        .catch(err => console.log(err))}
      <a href=${this.url + this.user}>${this.url}</a>
    `;
  }
}
customElements.define('link-fetch', LinkFetch);