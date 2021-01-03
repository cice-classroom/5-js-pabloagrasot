import {
  customElement,
  LitElement,
  html,
  css,
  property,
  eventOptions,
} from 'lit-element';

import type { Player } from './player';

@customElement('board-app')
export class BoardApp extends LitElement {
  @property({ type: String })
  cell!: string;
  boardClass: string = '';
  css: string = '';
  player: Player | undefined;
  @property({ type: Array })
  board = ['', '', '', '', '', '', '', '', ''];

  @property({ type: Number })
  turn = 0;
  valor = 0;
  cellNumber = 0;
  @property({ type: Boolean })
  clicked = false;

  static get styles() {
    return css`
      .table {
        background-color: var(--primary-color);
        border-radius: 16px;
        width: 500px;
        height: 500px;
        margin: 0 auto;
        border: 16px solid var(--front-color);
        box-shadow: var(--shadow);
      }

      .board {
        background-color: #999999;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 6px;
      }

      .cell {
        background-color: var(--primary-color);
        background-color: var(--bk-color);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        font-weight: 900;
        text-align: center;
        font-size: 80px;
      }

      .cell.x,
      .cell.O {
        cursor: not-allowed;
        pointer-events: none;
      }
      .cell.X::before,
      .cell.X::after,
      .cell.O::before {
        background-color: white;
      }

      .board.X .cell:not(.X):not(.O):hover::before,
      .board.X .cell:not(.X):not(.O):hover::after,
      .board.O .cell:not(.X):not(.O):hover::before {
        background-color: lightgrey;
      }

      .cell.X::before,
      .cell.X::after,
      .board.X .cell:not(.X):not(.O):hover::before,
      .board.X .cell:not(.X):not(.O):hover::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 90px;
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
        width: 60px;
        height: 80px;
      }

      .cell.O::after,
      .board.O .cell:not(.X):not(.O):hover::after {
        width: 40px;
        height: 60px;
        background-color: var(--bk-color);
      }
    `;
  }

  @eventOptions({ capture: true, once: true })
  private _onCellClicked(index: number): void {
    var cellNumber = `${index}`;

    console.log('el numero de celda es', cellNumber);

    console.log(index);
    if (this.turn % 2 == 0) {
      this.board[index] = 'X';

      this.boardClass = 'O';
      this.turn++;
      if (this.board[index] === 'X') {
        this.css = 'X';
      } else {
        this.css = '';
      }
    } else {
      this.board[index] = 'O';
      this.boardClass = 'X';
      this.turn++;

      if (this.board[index] === 'O') {
        this.css = 'O';
      } else {
        this.css = '';
      }
    }

    console.log(this.board);
  }

  render() {
    return html` <section class="table">
      <div class="board ${this.boardClass}">
        ${this.board.map(
          (player, index) =>
            html`<div
              @click="${() => this._onCellClicked(index)}"
              id="${index}"
              class="cell ${this.css}"
            >
              ${player}
            </div>`,
        )}
      </div>
    </section>`;
  }
}
