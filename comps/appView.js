import {html, LitElement} from '@polymer/lit-element';

class ListView extends LitElement {
  static get properties() {
    return { 
      appData: { type: Object }
    }    
  }

  render() {
    return html`
    <style>
      :host {
        display: block;
      }
      h1 {
        font-size: 2em;
      }
      h2 {
        font-size: 1.5em;
      }
      h3 {
        font-size: 1.2em;
      }
      p {
        font-size: 1em;
      }
    </style>
    <section>
    <h1><em>${this.appData.title}</em></h1>
    ${this.returnItem(this.appData.items)}
    </section>`
  }

  returnItem(items) {
    let temp = []
    items.map(item => {
      temp.push(html`
        <div>
          <h2>${item.name}</h2>
          <h3>${item.years}</h3>
          <p>${item.desc}</p>
        </div>
      `)
    })
    return temp.reverse()
  }

  whenLoaded() {
    if(this.appData) {

    } else {
      return html`<h3>Loading...</h3>`
    }
  }
}

customElements.define('list-view', ListView);