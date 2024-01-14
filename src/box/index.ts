import {
  LitElement,
  TemplateResult,
  customElement,
  html
} from '../../deps/lit.ts';

@customElement('lit-box')
export class LitBox extends LitElement {

  render() : TemplateResult<1> {
    return html`<div><slot></slot></div>`;
  }
}
