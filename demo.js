import { LitElement, html, css } from "lit-element";
import "mv-container";
import "./mv-textarea.js";

export class MvTextarea extends LitElement {
  static get properties() {
    return {
      detail: { type: Object, attribute: false },
      theme: { type: String, attribute: true }
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
      
      fieldset > label, label > input {
        cursor: pointer;
      }
      
      fieldset {
        width: 120px;
        margin-left: 10px;
        border:2px solid red;
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;	
        border-radius: 8px;
        color: #818181;
      }
      
      legend {
        font-weight: 500;
        color: red;
      }
    `;
  }

  constructor() {
    super();
    this.detail = {};
    this.theme = "light";
  }

  render() {
    const { theme } = this;
    return html`
      <fieldset>
        <legend>Theme</legend>
        <label><input type="radio" name="theme" value="light" checked @change="${this.changeTheme}" />Light</label>
        <label><input type="radio" name="theme" value="dark" @change="${this.changeTheme}" />Dark</label>
      </fieldset>
      <mv-container .theme="${theme}">
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
      <mv-container .theme="${theme}">
        <pre>${JSON.stringify(this.detail, null, 4)}</pre>
      </mv-container>
    `;
  }

  changeValue = event => {
    const { detail } = event;
    this.detail = detail;
  };

  changeTheme = originalEvent => {
    const { target: { value } } = originalEvent;
    this.theme = value;
  };
}

customElements.define("mv-textarea-demo", MvTextarea);
