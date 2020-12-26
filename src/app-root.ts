import { customElement, property, LitElement, html, css } from 'lit-element';
@customElement('app-root')
export class AppRoot extends LitElement {
  @property() message = 'Learn LitElement';

  static get styles() {
    return css`
      h1 {
        color: var(--front-color);
      }
    `;
  }

  render() {
    return html`<h1>TIC TAC TOE</h1>`;
  }
}
