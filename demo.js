import { LitElement, html, css } from "lit-element";
import "mv-container";
import "./mv-textarea.js";

export class MvTextarea extends LitElement {
  static get properties() {
    return {
      detail: { type: Object, attribute: false }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, MuseoSans);
        font-size: var(--font-size-m, 10pt);
      }

      mv-container {
        --mv-container-min-width: 640px;
        --mv-container-min-height: 200px;
        --mv-container-margin: 20px auto;
        --mv-container-padding: 20px 30px; 
      }
    `;
  }

  constructor() {
    super();
    this.detail = {};
  }

  render() {
    return html`
      <mv-container>
        <h2>Default</h2>
        <mv-textarea
          name="default"
          placeholder="Default"
          @textarea-change="${this.changeValue}"
        ></mv-textarea>
        
        <h2>Has error</h2>
        <mv-textarea
          name="has error"
          placeholder="Error"
          has-error
          @textarea-change="${this.changeValue}"          
        ></mv-textarea>

      </mv-container>
      <mv-container>
        <pre>${JSON.stringify(this.detail, null, 4)}</pre>
      </mv-container>
    `;
  }

  changeValue = event => {
    const { detail } = event;
    this.detail = detail;
  };
}

customElements.define("mv-textarea-demo", MvTextarea);
