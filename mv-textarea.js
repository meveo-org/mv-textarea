import { LitElement, html, css } from "lit-element";

export class MvTextarea extends LitElement {
  static get properties() {
    return {
      name: { type: String, attribute: true },
      value: { type: String, attribute: true },
      placeholder: { type: String, attribute: true },
      focus: { type: Boolean, attribute: false },
      hasError: { type: Boolean, attribute: "has-error", reflect: true }
    };
  }

  static get styles() {
    return css`
      :host {
        --mv-textarea-font-family: var(--font-family, MuseoSans);
        --mv-textarea-font-size: var(--font-size-m, 16px);
        --color: var(--mv-textarea-color, #818181);
        --width: var(--mv-textarea-width, 620px);
        --height: var(--mv-textarea-height, 153px);    
        --margin: var(--mv-textarea-margin, 0);
        --border: var(--mv-textarea-border, 1px solid #4E686D);
        --active-border: var(--mv-textarea-active-border, 1px solid #1D9BC9);
        --placeholder-color: var(--mv-textarea-placeholder-color, #80828C);
        --active-box-shadow: var(--mv-textarea-active-box-shadow, inset 0 0 9px 0 rgba(29, 155, 201, 0.3));
        --error-border: var(--mv-textarea-error-border, 1px solid rgba(247, 112, 98, 1));
        --error-box-shadow: var(--mv-textarea-error-box-shadow, inset 0 0 9px 0 rgba(229, 47, 47, 0.3));
        --box-radius: 5px;
        --box-padding: 11px 8px;
      }
      
      textarea {
        color: var(--color);
        font-family: var(--mv-textarea-font-family);
        font-size: var(--mv-textarea-font-size);
        background-color: transparent;
        border: none;
        outline: none;
        padding: 0 8px;
        resize: none;
        width: var(--width);
        height: var(--height);
        // fallback for firefox
        scrollbar-color: #5A6473 #788394;
        scrollbar-width: thin;
      }

      .mv-textarea {
        width: var(--width);
        height: var(--height);       
        border: var(--border);
        margin: var(--margin);
        background-color: var(--mv-textarea-background, #FFFFFF);
        display: flex;
        flex-direction: row;
      }
      
      .mv-textarea:hover, .mv-textarea.focus {
        border: var(--active-border);
        box-shadow: var(--active-box-shadow);
      }

      .mv-textarea.box {
        padding: var(--box-padding);
        border-radius: var(--box-radius); 
      }

      .mv-textarea.error {
        border: var(--error-border);        
      }

      .mv-textarea.error:hover, .mv-textarea.error.focus {
        box-shadow: var(--error-box-shadow);
      }

      ::placeholder {
        color: var(--placeholder-color);
        font-weight: 100;
      }
    
      textarea::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #EAEBF0;
      }
    
      textarea::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 10px;
      }
    
      textarea::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #008FC3;
      }
      
      .mv-textarea.error textarea::-webkit-scrollbar-thumb {
        background-color: rgba(247, 112, 98, 1);
      }
    `;
  }

  constructor() {
    super();
    this.focus = false;
    this.hasError = false;
  }

  render() {
    const focusClass = this.focus ? " focus" : "";
    const errorClass = this.hasError ? " error" : "";
    const containerClass = `mv-textarea box${focusClass}${errorClass}`;
    return html`
      <div class="${containerClass}">
        <textarea
          name="${this.name}"
          .value="${this.value || ""}"
          placeholder="${this.placeholder || ""}"
          @change="${this.textareaChange}"
          @focusin="${this.focusInInput}"
          @focusout="${this.focusOutInput}"
        />
      </div>
    `;
  }

  textareaChange = originalEvent => {
    const { name, type } = this;
    const { target } = originalEvent;
    const { value } = target;
    this.dispatchEvent(
      new CustomEvent("textarea-change", {
        detail: { name, type, value, originalEvent }
      })
    );
  };

  focusInInput = () => {
    this.focus = true;
  };

  focusOutInput = () => {
    this.focus = false;
  };
}

customElements.define("mv-textarea", MvTextarea);
