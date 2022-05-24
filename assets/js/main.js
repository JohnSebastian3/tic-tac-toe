// Get our game board and each individual cell
let gameBoard = document.querySelector('.game-board');
let cells = document.querySelectorAll('.cell');
let modal = document.querySelector('.modal');
let theWinner = document.querySelector('#winner');


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
    console.log(this.moves);
    if(e.target.innerText === '') {
      this.moves++;
      this.switchCurrentPlayer();
      this.displayMove(e);
      this.updateGameBoard(e.target.getAttribute('data-index'));
    }
  }

  switchCurrentPlayer() {
    this.currentPlayer === 'O' ? this.currentPlayer = 'X' : this.currentPlayer = 'O';
  }

  displayMove(e) {
    console.log('Current player', this.currentPlayer)
    e.target.innerText = this.currentPlayer;
    
  }

  updateGameBoard(index) {
    this.currentGameBoard[index] = this.currentPlayer;
    console.log(this.currentGameBoard);
    this.checkForWinner();
  }

  checkForWinner() {
    // Check first row
    let player = this.currentPlayer;
    if(this.checkRows(player)) {
      this.endGame(player);
    } else if(this.checkColumns(player)) {
      this.endGame(player);
    } else if(this.checkDiagonals(player)) {
      this.endGame(player);
    } else if(this.moves === 9) {
      this.endGame('none');
    }
    
  }

  checkRows(player) {
    if(this.currentGameBoard[0] === player && this.currentGameBoard[1] === player && this.currentGameBoard[2] === player) {
      console.log('reahced');
      return true;
    } 
    else if(this.currentGameBoard[3] === player && this.currentGameBoard[4] === player && this.currentGameBoard[5] === player) {
      return true;

    } else if(this.currentGameBoard[6] === player && this.currentGameBoard[7] === player && this.currentGameBoard[8] === player) {
      return true;
    } 
    return false;
  }

  checkColumns(player) {
    if(this.currentGameBoard[0] === player && this.currentGameBoard[3] === player && this.currentGameBoard[6] === player) {
      return true;
    } 
    else if(this.currentGameBoard[1] === player && this.currentGameBoard[4] === player && this.currentGameBoard[7] === player) {
      return true;

    } else if(this.currentGameBoard[2] === player && this.currentGameBoard[5] === player && this.currentGameBoard[8] === player) {
      return true;
    } 
    return false;
  }

  checkDiagonals(player) {
    if(this.currentGameBoard[0] === player && this.currentGameBoard[4] === player && this.currentGameBoard[8] === player) {
      return true;
    } 
    else if(this.currentGameBoard[2] === player && this.currentGameBoard[4] === player && this.currentGameBoard[6] === player) {
      return true;
    } 
    return false;
  }

  endGame(winner) {
    if(winner === 'none') {
      showModal();
      displayTie();
      this.disableCells();
    } else {
      showModal();
      displayWinner(winner);
      this.disableCells();
    }
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
  if(Math.random() * 2 > 1) {
    first = 'X';
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

function showModal() {
  modal.classList.remove('hidden');
}

function displayWinner(winner) {
  theWinner.innerText = `Player ${winner} wins!`;
}

function displayTie() {
  theWinner.innerText = 'It\'s a tie!';
}

const game = new TicTacToe(firstPlayer(), secondPlayer());
game.setEventListeners();