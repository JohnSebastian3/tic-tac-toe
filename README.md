# Tic-Tac-Toe
Short sentence here

**Link to project:** https://johnsebastian3.github.io/tic-tac-toe/

<!-- ![alt tag](http://placecorgi.com/1200/650) -->

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

A big emphasis was put on OOP in order to get this project to work. I tried to tuck all the functionality of the game into it's own class to avoid cluttering the global namespace. The main game logic was made by using a 'game board' property on the TicTacToe object. This game board is just an array of length 9 that is initally only filled with null. As the game progresses, the player (X or O) marks the certain cell they want to fill, and the corresponding index gets filled in the array. After every move, a test function runs to see if a player has won. If no player has won by the time that the board fills, then a tie occured.

## Optimizations

Optimizations for this project include refactoring code and adding AI functionality.
## Lessons Learned:

I learned a lot about classes, constructors, and factory functions during this project.

