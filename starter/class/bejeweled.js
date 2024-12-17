const Screen = require("./screen");
const Cursor = require("./cursor");

class Bejeweled {

  constructor() {

    this.playerTurn = "O";

    // Initialize this
    this.grid = [];
    this.cursor = new Cursor(8, 8);
    this.symbolBank = ["X", "Y", "O", "S", "H", "A", "M"];
    this.grid = Bejeweled.initializeGrid(8,8,this.symbolBank);
    Screen.initialize(8, 8);
    Screen.setGridlines(false);
    Bejeweled.updateScreenGrid(this.grid);
    Screen.addCommand('left', "moves cursor left", this.cursor.left);
    Screen.addCommand('right', "moves cursor right", this.cursor.right);
    Screen.addCommand('up', "moves cursor up", this.cursor.up);
    Screen.addCommand('down', "moves cursor down", this.cursor.down);


    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static checkForMatches(grid) {

    // Fill this in

  }

  static initializeGrid(numRows, numCols, symbolBank){
    let grid = [];
    let subGrid = [];
    let symbolLength = symbolBank.length;
    let symbolIndex = 0;

    for(let i = 0; i < numRows; i++){
      for(let j = 0; j < numCols; j++){
        symbolIndex = Math.floor(Math.random() * symbolLength)
        subGrid.push(symbolBank[symbolIndex])
      }
      grid.push(subGrid);
      subGrid = [];
    }
    return grid;
  }

  static updateScreenGrid(grid){
    for (let i = 0; i < grid.length; i++){
      for (let j = 0; j < grid[0].length; j++){
        Screen.setGrid(i, j, grid[i][j])
      }
    }
  }


}




module.exports = Bejeweled;
