import { customElement, LitElement, html, css } from 'lit-element';
@customElement('tic-tac-toe')
export class TicTacToe extends LitElement {
  static get styles() {
    return css`
      h1 {
        color: var(--front-color);
        text-align: center;
      }
    `;
  }

  render() {
    return html`<h1>TIC TAC TOE</h1>
      <board-app></board-app>`;
  }
}
