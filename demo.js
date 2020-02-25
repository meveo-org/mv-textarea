import { LitElement, html, css } from "lit-element";
import "mv-container";
import "mv-font-awesome";
import "./mv-textarea.js";

export class MvTextarea extends LitElement {
  static get properties() {
    return {
      detail: { type: Object, attribute: false },
      open: { type: Boolean, attribute: true },
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
      
      mv-fa[icon="lightbulb"] {
        font-size: 50px;
        cursor: pointer;
        margin: 20px;
      }
      
      .theme {
        display: flex;
        justify-content: flex-start;
      }
    `;
  }

  constructor() {
    super();
    this.detail = {};
    this.theme = "light";
    this.open = true;
  }

  render() {
    const iconColor = `color: ${this.open ? "yellow" : ""}`;
    const textColor = `color: ${this.open ? "" : "#FFFFFF"}`;
    return html`
      <div class="theme">
        <mv-fa icon="lightbulb" style="${iconColor}" @click=${this.toggleLightBulb}></mv-fa>
      </div>
      <mv-container .theme="${this.theme}" style="${textColor}">
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
      <mv-container .theme="${this.theme}" style="${textColor}">
        <pre>${JSON.stringify(this.detail, null, 4)}</pre>
      </mv-container>
    `;
  }

  changeValue = event => {
    const { detail } = event;
    this.detail = detail;
  };

  toggleLightBulb = () => {
    this.open = !this.open;
    if (this.open) {
      this.theme = "light";
    } else {
      this.theme = "dark";
    }
  };
}

customElements.define("mv-textarea-demo", MvTextarea);
