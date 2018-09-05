import {html, LitElement} from '@polymer/lit-element';
import '@polymer/app-layout/app-layout.js'
import '/comps/appView.js'


class JamesWarner extends LitElement {
  static get properties() {
    return {
      about: {type: Object},
      contact: {type: Object},
      edu: {type: Object},
      wrkEx: {type: Object},
      skills: {type: Object},
      projects: {type: Object},
    }
  }
  constructor() {
    super()
    this.paint = html`<h1>Loading...</h1>`
    fetch('./data/resume.json')
      .then(res => res.json())
      .then(res => {
        [
          this.about, 
          this.contact, 
          this.edu, 
          this.wrkEx, 
          this.skills, 
          this.projects
        ] = res
        this.linkNames = res.map(item => item.title)
        this.paint = this.thePaint()
      })
      .catch(err => console.log(err))
  }

  render() {
    return this.paint
  }

  thePaint() {
    console.log(this.edu)
    return html`
      <style>
        app-header {
          background-color: blue;
          color: white;
        }

        a {
          color: white;
          display: inline-flex;
          height: 100%;
          margin: auto;
          
        }
      </style>
      <app-header-layout fullbleed>
        <app-header slot="header">
          <app-toolbar>${this.linkNames.map(item => html`
            <a href='/${item}'>${item}</a>
          `)}</app-toolbar>
        </app-header>

        <about-view .appData=${this.about}></about-view>

        <list-view .appData=${this.edu}></list-view>
        <wrk-view .appData=${this.wrkEx}></wrk-view>

        <skills-view .appData=${this.skills}></skills-view>
        <projects-view .appData=${this.projects}></projects-view>

      </app-header-layout>
    `
  }
}
customElements.define('james-warner', JamesWarner);