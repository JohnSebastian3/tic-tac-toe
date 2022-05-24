// Get our game board and each individual cell
let gameBoard = document.querySelector('.game-board');
let cells = document.querySelectorAll('.cell');


class TicTacToe {
  constructor(firstPlayer, secondPlayer) {
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
    this.currentPlayer = firstPlayer;
    this.gameLog = [];
    this.moves = 0;
    this.currentGameBoard = [
      null, null, null,
      null, null, null,
      null, null, null
    ]
  }

  setEventListeners() {
    cells.forEach(cell => {
      cell.addEventListener('click', e => {
        this.handleMove(e);
      }
    )});
    
  }

  handleMove(e) {
    this.moves++;
    if(e.target.innerText === '') {
      this.switchCurrentPlayer();
      this.displayMove(e);
      this.updateGameBoard(e.target.getAttribute('data-index'));
    }
  }

  switchCurrentPlayer() {
    this.currentPlayer === 'O' ? this.currentPlayer = 'X' : this.currentPlayer = 'O';
  }

  displayMove(e) {
    console.log(e.target);
    console.log('Current player', this.currentPlayer)
    console.log(e.target.innerText);
    e.target.innerText = this.currentPlayer;
    
  }

  updateGameBoard(index) {
    this.currentGameBoard[index] = this.currentPlayer;
    this.checkForWinner();
  }

  checkForWinner() {
    if(this.currentGameBoard[0] === this.currentGameBoard[1] && this.currentGameBoard[1] === this.currentGameBoard[2]) {
      this.endGame(this.currentPlayer);
    }
  }

  endGame(winner) {
    console.log(`Congratulations ${winner}! You have won!`);
    this.disableCells();
  }

  disableCells() {
    cells.forEach(cell => {
      cell.disabled = true;
    })
  }

}

// function handleMove(e) {
//   console.log(e.target);
// }

function firstPlayer() {
  let first = 'O';
  if(Math.random(2) > 1) {
    first = X;
  }
  secondPlayer(first);
  return first;
}

function secondPlayer(firstPlayer) {
  let second = '';
  if(firstPlayer === 'O') {
    second = 'X';
  } else {
    second = 'O';
  }
  return second;
}

const game = new TicTacToe(firstPlayer(), secondPlayer());
game.setEventListeners();