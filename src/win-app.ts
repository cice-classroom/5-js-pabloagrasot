import { customElement, LitElement, html, css, property } from 'lit-element';

import type { board } from './board';
@customElement('win-app')
export class Win extends LitElement {
  @property({ type: String })
  board!: typeof board;

  static get styles() {
    return css`
      .winner {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--primary-color);
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
        background-color: var(--bk-color);
      }
      .button {
        background-color: var(--primary-color);
        border: 5px solid var(--front-color);
        border-radius: 16px;
        padding: 1rem 2rem;
        box-shadow: var(--shadow);
        font-size: 1rem;
      }
    `;
  }

  render() {
    return html`<div class="winner">
      <h2>¡Enhorabuena! ¡Has ganado!</h2>
      <button class="button" @click="${this.restartGame}">
        Volver a Jugar
      </button>
    </div>`;
  }

  restartGame() {
    location.reload();
  }
}
