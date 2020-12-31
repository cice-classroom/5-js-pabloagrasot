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
  @property({ type: Array })
  board = ['', '', '', '', '', '', '', '', ''];
  @property({ type: String })
  cell: 'X' | 'O' | undefined;
  @property({ type: Number })
  turn = 0;
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
      }
    `;
  }

  render() {
    return html` <section class="table">
      <div class="board">
        ${this.board.map(
          () =>
            html`<div id="${this.id} @click="${this._onCellClicked}"" class="cell">${this.cell}</div>`,
        )}
      </div>
    </section>`;
  }

  @eventOptions({ capture: true, once: true })
  private _onCellClicked() {
    if (this.turn % 2 == 0) {
      this.cell = 'X';
      this.turn++;
    } else {
      this.cell = 'O';
      this.turn++;
    }
  }
}
