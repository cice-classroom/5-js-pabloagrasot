import { board } from './board';
import type { Player } from './player';

export class Game {
  player: Player = 'X';
  turn = 0;
  valor = 0;
  cellNumber = 0;
  boardClass: 'X' | 'O' = 'X';
  static winPlayer: unknown;

  hasWinner() {
    if (board[0] === board[1] && board[0] === board[2] && board[0] != '') {
      let winPlayer = board[0];
      this.congratulations(winPlayer);
    }
    if (board[3] === board[4] && board[3] === board[5] && board[3] != '') {
      let winPlayer = board[3];
      this.congratulations(winPlayer);
    }
    if (board[6] === board[7] && board[6] === board[8] && board[6] != '') {
      let winPlayer = board[6];
      this.congratulations(winPlayer);
    }
    if (board[0] === board[3] && board[3] === board[6] && board[0] != '') {
      let winPlayer = board[0];
      this.congratulations(winPlayer);
    }
    if (board[1] === board[4] && board[1] === board[7] && board[1] != '') {
      let winPlayer = board[1];
      this.congratulations(winPlayer);
    }
    if (board[2] === board[5] && board[2] === board[8] && board[2] != '') {
      let winPlayer = board[2];
      this.congratulations(winPlayer);
    }
    if (board[0] === board[4] && board[0] === board[8] && board[0] != '') {
      let winPlayer = board[0];
      this.congratulations(winPlayer);
    }
    if (board[2] === board[4] && board[2] === board[6] && board[2] != '') {
      let winPlayer = board[2];
      this.congratulations(winPlayer);
    }
  }

  congratulations(winPlayer: string) {
    const div = document.getElementById('win');
    const winApp = document.createElement('win-app');
    const win = document.createElement('h2');
    win.innerHTML = `¡Enhorabuena! Has ganado jugador ${winPlayer}`;
    if (div !== null) {
      div.appendChild(winApp);
    }
  }
}
