import { LitElement, html } from "@polymer/lit-element";

class ProjectView extends LitElement {
  static get properties() {
    return {content:{type: Object}}
  }

  constructor() {
    super()
  }

  render() {
    return html``
  }
}
customElements.define('project-view', ProjectView)