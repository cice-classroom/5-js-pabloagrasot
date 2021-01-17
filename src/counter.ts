import { customElement, LitElement, html, css, property } from 'lit-element';
@customElement('counter-app')
export class Win extends LitElement {
  @property({ type: String })
  static get styles() {
    return css`
      .scoreboard {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem auto;
      }
      .counter {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 1rem auto;
        border-radius: 16px;
        border: 4px solid var(--front-color);
        box-shadow: var(--shadow);
        width: 500px;
      }
      .values {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .values__value,
      values__player {
        margin-top: 0;
      }
    `;
  }

  render() {
    return html` <h2 class="scoreboard">Marcador</h2>
      <div class="counter">
        <div class="values">
          <h3 class="values__player">Jugador X</h3>
          <h3 class="values__value">0</h3>
        </div>

        <div class="values">
          <h3 class="values__player">Jugador 0</h3>
          <h3 class="values__value">1</h3>
        </div>
      </div>`;
  }
}
