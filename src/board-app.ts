import {
  customElement,
  LitElement,
  html,
  css,
  property,
  eventOptions,
} from 'lit-element';

@customElement('board-app')
export class BoardApp extends LitElement {
  @property({ type: String })
  player = '';
  @property({ type: Number })
  turn = 0;
  @property({ type: String })
  turnBoard = '';

  static get styles() {
    return css`
      .board {
        display: grid;
        max-width: 500px;
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);
        grid-gap: 10px;
        margin: 0 auto;
      }

      .cell {
        color: var(--bk-color);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        background-color: var(--primary-color);
        box-shadow: var(--shadow);
        cursor: pointer;
      }

      .cell.X::before,
      .cell.X::after,
      .cell.O::before {
        background-color: var(--bk-color);
      }

      .board.X .cell:not(.X):not(.O):hover::before,
      .board.X .cell:not(.X):not(.O):hover::after,
      .board.O .cell:not(.X):not(.O):hover::before {
        background-color: rgb(211, 211, 211, 1);
      }

      .cell.X::before,
      .cell.X::after,
      .board.X .cell:not(.X):not(.O):hover::before,
      .board.X .cell:not(.X):not(.O):hover::after {
        content: '';
        position: absolute;
        width: 120px;
        height: 20px;
      }

      .cell.X::before,
      .board.X .cell:not(.X):not(.O):hover::before {
        transform: rotate(45deg);
      }

      .cell.X::after,
      .board.X .cell:not(.X):not(.O):hover::after {
        transform: rotate(-45deg);
      }

      .cell.O::before,
      .cell.O::after,
      .board.O .cell:not(.X):not(.O):hover::before,
      .board.O .cell:not(.X):not(.O):hover::after {
        content: '';
        position: absolute;
        border-radius: 50%;
      }

      .cell.O::before,
      .board.O .cell:not(.X):not(.O):hover::before {
        width: 120px;
        height: 120px;
      }

      .cell.O::after,
      .board.O .cell:not(.X):not(.O):hover::after {
        width: 90px;
        height: 90px;
        background-color: var(--primary-color);
      }
    `;
  }

  @eventOptions({ once: true, passive: true, capture: true })
  private onCellClicked() {
    if (this.turn % 2 == 0) {
      this.player = 'X';
      this.turn++;
      this.turnBoard = 'O';
    } else {
      this.player = 'O';
      this.turn++;
      this.turnBoard = 'X';
    }

    console.log('prueba');
  }

  render() {
    return html`<section class="board ${this.turnBoard}">
      <div @click="${this.onCellClicked}" class="cell ${this.player}"></div>
      <div @click="${this.onCellClicked}" class="cell ${this.player}"></div>
      <div @click="${this.onCellClicked}" class="cell ${this.player}"></div>
      <div @click="${this.onCellClicked}" class="cell ${this.player}"></div>
      <div @click="${this.onCellClicked}" class="cell ${this.player}"></div>
      <div @click="${this.onCellClicked}" class="cell ${this.player}"></div>
      <div @click="${this.onCellClicked}" class="cell ${this.player}"></div>
      <div @click="${this.onCellClicked}" class="cell ${this.player}"></div>
      <div @click="${this.onCellClicked}" class="cell ${this.player}"></div>
    </section>`;
  }
}
