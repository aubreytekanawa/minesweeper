document.addEventListener('DOMContentLoaded', startGame)

// BOARD DEFINITION
// My board is the result of a function that generates a number of cells according to an argument.

var board = { 
      cells: generateBoard(6)
      }  
        function generateBoard(size) {
// CODING THE BOARD GRID
// The function create the cells array using 2 for-loops, one for laying out the cells horizontally
// The other loop is to drop down 1 row and run the first loop again until the number of iterations specified
// as the (size) required is reached.
var cells = []
// Loop 1 - creates a row of cells to size 
for (i= 0; i< size; i++) {
// Loop 2 - creates repeated rows to size
  for (j=0; j< size; j++) {
      cell = {
        row: i,
        col: j,

// ASSIGN CELL STATES
// The loop also has to assign states for each cell before they are pushed into the array. 
// State 1: Does it have a mine or not, I dealt with this one by using a random binary number generator to
// get a 1 or a 0 result which the code then converts into the boolean true or false statement. 
// I have messed with the probability of generating a mine to 25% using the math.random generator. 
        isMine: Math.random()<0.25,0:1,
// State 2: is the cell hidden or not. All cells will need to start as hidden so this is easy, the default will be true 
// until a conditions (mouse click) triggers a change to false status. 
        hidden: true,
// State 3: Is the cell marked. All cells wont be marked until the game starts and are triggered by a right click which will 
// then retrieve code from the lib file for how to treat the cell. 
        isMarked: false,
        }
//Push the results of the 2 loops and state assignment into the cells Array
      cells.push(cell)
      }
  }   
// Return the whole cells array to the screen
return cells
}

//  START GAME 
// Retrieve info from the lib.js file to see if the game is ready to play
// Don't remove this function call: it makes the game work!
function startGame () { 

// MINE PROXIMITY COUNTER
// Define this function to count the number of mines around the cell
//It will return cell objects in an array. You should loop through 
//them, counting the number of times `cell.isMine` is true.
for (var i = 0; i < board.cells.length; i++){
  board.cells[i].surroundingMines= countMines(board.cells[i]);
 }

function countMines (cell) {
  // Retrieve the code for the surrounding cells function from lib.js
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  // make the count variable and start at 0
  var count = 0
  // make a loop that goes through the surrounding cells array to check for mines
  for(var i = 0; i < surrounding.length; i++){
  // Use an if statement, If there is a mine, then add 1 to the count of the cell.
        if (surrounding[i].isMine) {
        count++
        }
      }
    return count;
  }


  lib.initBoard()
}


// CONFIRM WIN
// Define this function to look for a win condition:
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)
//   lib.displayMessage('You win!')     
  function checkForWin () {
        for (var i = 0; i < board.cells.length; i++) {
            if (board.cells[i].isMine == false && board.cells[i].hidden == false) { 
           lib.displayMessage('You win!') 
 

      }
    }
  }

