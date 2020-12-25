import { customElement, property, LitElement, html, css } from 'lit-element';
@customElement('app-root')
export class AppRoot extends LitElement {
  @property() message = 'Learn LitElement';

  static get styles() {
    return css`
      h1 {
        font-size: 4rem;
        color: var(--front-color);
      }
    `;
  }

  render() {
    return html` <h1>TIC TAC TOE</h1> `;
  }
}
