document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here! My board is defined as the result of a function
// that generates a number of cells according to a (size) argument.

var board = { 
      cells: generateBoard(6)
      }  
        function generateBoard(size) {

// Create the cells array using 2 for-loops, one for laying out the cells horizontally
// The other loop is to drop the loop down to repeat the loop until the loop reaches the specified number of rows.

var cells = [] 
// 
for (x= 0; x< size; x++) {
// Row Loop (creates y coordinates in the array)
  for (y=0; y< size; y++) {
    cell = {
      row: x,
      col: y,
      isMine: false,
      hidden: true
      }
      cells.push(cell)
    }
  }   
// Make a loop to generate the cells

// Fill the cells with the generated cells

// Return the cells array
return cells
}



// 


//Cell States
//    isMine: false 
//    isFlag: false
//    hidden: false



function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
}

