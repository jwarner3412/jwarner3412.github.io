import { LitElement, html } from "@polymer/lit-element";

class NavBar extends LitElement {
  static get properties() {
    return {
      navList: {type: Array}
    }
  }

  render() {
    return html`
      <style>
        a {
          color: white;
          text-decoration: none;
          display: inline-flex;
          height: 100%;
          padding: 10px;
          border-right: 1px solid black;
          width: 90px;
          justify-content: center;
        }
        a:last-child {
          border: none;
        }

      </style>
      <nav>
        ${this.returnNav(this.navList)}
      </nav>`
  }

  returnNav (list) {
    return list.map(item => html`<a href='/${item}'>${item}</a>`)
  }
}
customElements.define('nav-bar', NavBar)