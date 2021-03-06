import { board } from './board';
export class Game {
  counter = 0;
  globalCounter = 0;

  hasWinner() {
    if (board[0] === board[1] && board[0] === board[2] && board[0] != '') {
      const winPlayer = board[2];
      this.congratulations(winPlayer);
      this.globalCounter++;
      sessionStorage.setItem('Global-Counter', `${this.globalCounter}`);
      const global = Number(sessionStorage.getItem('Global-Counter'));
      sessionStorage.setItem(winPlayer, `${this.counter}`);
      let key = Number(sessionStorage.getItem(winPlayer));
      if (key != global) {
        key = key + 1;
        key = this.counter;
        sessionStorage.removeItem(winPlayer);
        sessionStorage.setItem(winPlayer, `${this.counter}`);
      }
    }
    if (board[3] === board[4] && board[3] === board[5] && board[3] != '') {
      const winPlayer = board[2];
      this.congratulations(winPlayer);
      this.globalCounter++;
      sessionStorage.setItem('Global-Counter', `${this.globalCounter}`);
      const global = Number(sessionStorage.getItem('Global-Counter'));
      sessionStorage.setItem(winPlayer, `${this.counter}`);
      let key = Number(sessionStorage.getItem(winPlayer));
      if (key != global) {
        key = key + 1;
        key = this.counter;
        sessionStorage.removeItem(winPlayer);
        sessionStorage.setItem(winPlayer, `${this.counter}`);
      }
    }
    if (board[6] === board[7] && board[6] === board[8] && board[6] != '') {
      const winPlayer = board[2];
      this.congratulations(winPlayer);
      this.globalCounter++;
      sessionStorage.setItem('Global-Counter', `${this.globalCounter}`);
      const global = Number(sessionStorage.getItem('Global-Counter'));
      sessionStorage.setItem(winPlayer, `${this.counter}`);
      let key = Number(sessionStorage.getItem(winPlayer));
      if (key != global) {
        key = key + 1;
        key = this.counter;
        sessionStorage.removeItem(winPlayer);
        sessionStorage.setItem(winPlayer, `${this.counter}`);
      }
    }
    if (board[0] === board[3] && board[3] === board[6] && board[0] != '') {
      const winPlayer = board[2];
      this.congratulations(winPlayer);
      this.globalCounter++;
      sessionStorage.setItem('Global-Counter', `${this.globalCounter}`);
      const global = Number(sessionStorage.getItem('Global-Counter'));
      sessionStorage.setItem(winPlayer, `${this.counter}`);
      let key = Number(sessionStorage.getItem(winPlayer));
      if (key != global) {
        key = key + 1;
        key = this.counter;
        sessionStorage.removeItem(winPlayer);
        sessionStorage.setItem(winPlayer, `${this.counter}`);
      }
    }
    if (board[1] === board[4] && board[1] === board[7] && board[1] != '') {
      const winPlayer = board[2];
      this.congratulations(winPlayer);
      this.globalCounter++;
      sessionStorage.setItem('Global-Counter', `${this.globalCounter}`);
      const global = Number(sessionStorage.getItem('Global-Counter'));
      sessionStorage.setItem(winPlayer, `${this.counter}`);
      let key = Number(sessionStorage.getItem(winPlayer));
      if (key != global) {
        key = key + 1;
        key = this.counter;
        sessionStorage.removeItem(winPlayer);
        sessionStorage.setItem(winPlayer, `${this.counter}`);
      }
    }
    if (board[2] === board[5] && board[2] === board[8] && board[2] != '') {
      const winPlayer = board[2];
      this.congratulations(winPlayer);
      this.globalCounter++;
      sessionStorage.setItem('Global-Counter', `${this.globalCounter}`);
      const global = Number(sessionStorage.getItem('Global-Counter'));
      sessionStorage.setItem(winPlayer, `${this.counter}`);
      let key = Number(sessionStorage.getItem(winPlayer));
      if (key != global) {
        key = key + 1;
        key = this.counter;
        sessionStorage.removeItem(winPlayer);
        sessionStorage.setItem(winPlayer, `${this.counter}`);
      }
    }
    if (board[0] === board[4] && board[0] === board[8] && board[0] != '') {
      const winPlayer = board[2];
      this.congratulations(winPlayer);
      this.globalCounter++;
      sessionStorage.setItem('Global-Counter', `${this.globalCounter}`);
      const global = Number(sessionStorage.getItem('Global-Counter'));
      sessionStorage.setItem(winPlayer, `${this.counter}`);
      let key = Number(sessionStorage.getItem(winPlayer));
      if (key != global) {
        key = key + 1;
        key = this.counter;
        sessionStorage.removeItem(winPlayer);
        sessionStorage.setItem(winPlayer, `${this.counter}`);
      }
    }
    if (board[2] === board[4] && board[2] === board[6] && board[2] != '') {
      const winPlayer = board[2];
      this.congratulations(winPlayer);
      this.globalCounter++;
      sessionStorage.setItem('Global-Counter', `${this.globalCounter}`);
      const global = Number(sessionStorage.getItem('Global-Counter'));
      sessionStorage.setItem(winPlayer, `${this.counter}`);
      let key = Number(sessionStorage.getItem(winPlayer));
      if (key != global) {
        key = key + 1;
        key = this.counter;
        sessionStorage.removeItem(winPlayer);
        sessionStorage.setItem(winPlayer, `${this.counter}`);
      }
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

  empate() {
    const div = document.getElementById('win');
    const empateApp = document.createElement('empate-app');

    if (div !== null) {
      div.appendChild(empateApp);
    }
  }
}
