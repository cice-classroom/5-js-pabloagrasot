import {
  customElement,
  LitElement,
  html,
  css,
  property,
  eventOptions,
} from 'lit-element';

import type { Player } from './player';
import { board } from './board';
import { Game } from './game';
@customElement('board-app')
export class BoardApp extends LitElement {
  private readonly game = new Game();

  @property({ type: String })
  cell!: string;
  boardClass: 'X' | 'O' = 'X';
  css: string = '';
  player: Player | undefined;

  @property({ type: Number })
  turn = 0;
  valor = 0;
  cellNumber = 0;

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
        pointer-events: none;
      }
      .cell:empty {
        pointer-events: auto;
      }

      .cell.X::before,
      .board.X .cell:hover::before {
        content: 'X';
        position: absolute;
        color: rgb(220, 220, 220, 0.5);
      }

      .board.O .cell:hover::before {
        content: '0';
        position: absolute;
        color: rgb(220, 220, 220, 0.5);
      }
    `;
  }

  @eventOptions({ capture: true, once: true })
  private _onCellClicked(index: number) {
    this.turn % 2 ? (board[index] = '0') : (board[index] = 'X');
    this.turn % 2 ? (this.boardClass = 'X') : (this.boardClass = 'O');
    this.turn++;
    this.game.hasWinner();
  }

  render() {
    return html` <section class="table">
      <div class="board ${this.boardClass}">
        ${board.map(
          (player, index) =>
            html` <!-- prettier-ignore -->
              <div @click="${() =>
                this._onCellClicked(
                  index,
                )}" id="${index}" class="cell">${player}</div>`,
        )}
      </div>
    </section>`;
  }
}
