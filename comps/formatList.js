import {html, LitElement} from '@polymer/lit-element';
import '/comps/linkFetch.js'

class FormatList extends LitElement {
  static get properties() {
    return { 
      listItems: { type: Array }
    }    
  }

  render() {
    return html`
      <style>
        h1 {font-size: 2em;}
        h2 {font-size: 1.5em;}
        h3 {font-size: 1.2em;}
        p {font-size: 1em;}
      </style>

      ${this.returnItem(this.listItems)}
    `
  }

  returnItem(items) {

    let temp = []
    items.map(item => {
      temp.push(html`
        <div>
          <h2>${item.name}</h2>
          <h3>${item.years}</h3>
          <p>${item.desc}</p>
          ${item.url ? html`<link-fetch .url=${item.url} .api=${item.api} .user=${item.username} .append=${item.append}></link-fetch>` : ''}
        </div>
      `)
    })
    return temp.reverse()
  }
}

customElements.define('format-list', FormatList);