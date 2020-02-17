# mv-textarea

MvTextarea is a Meveo textarea component based on lit-element.

## Quick Start

To experiment with the MvTextarea component.

1. Clone this repo.

2. Serve the project from the root directory with some http server (best served with meveo itself)

3. Update the textarea demo component in demo.js file

## Sample usage

```html
<mv-textarea
  name="textarea-name"                    // the name of of the textarea, this is returned in the details
  .value="${this.textareaValue}"           // the value of the textarea
  placeholder="Enter text here"           // placeholder shown on textarea when no value is entered yet
  has-error                               // the textarea is rendered with error borders
  @textarea-change="${this.changeValue}"  // custom event dispatched when the textarea value is changed
></mv-textarea>
```

You can also check this [demo](https://textarea.meveo.org/)
