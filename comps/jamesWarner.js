import {html, LitElement} from '@polymer/lit-element';
import '@polymer/app-layout/app-layout.js'
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js'
import '/comps/navBar.js'
import '/comps/aboutView.js'
import '/comps/eduView.js'


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
          this.edu, 
          this.wrkEx, 
          this.skills, 
          this.projects,
          this.contact 
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
    return html`
      <style>
        :host {
          background-color: gray;
        }
        app-header {
          background-color: blue;
          color: white;
          box-shadow: 5px, 5px, 5px, black;
        }
        app-toolbar {
          justify-content: center;
        }
      </style>
      <app-header-layout fullbleed>
        <app-header fixed condenses effects="waterfall" slot="header">
          <app-toolbar></app-toolbar>
          <app-toolbar></app-toolbar>
          <app-toolbar>
            <nav-bar .navList=${this.linkNames}></nav-bar>
          </app-toolbar>
        </app-header>

        <about-view .content=${this.about}></about-view>

        <edu-view .content=${this.edu}></edu-view>

        <list-view .appData=${this.wrkEx}></list-view>

        <skills-view .appData=${this.skills}></skills-view>

        <projects-view .appData=${this.projects}></projects-view>

      </app-header-layout>
    `
  }
}
customElements.define('james-warner', JamesWarner)