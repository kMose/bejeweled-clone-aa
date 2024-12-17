const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
    Screen.render();
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
    Screen.render();
  }

  up = () => {

    if(this.row == 0){
      this.setBackgroundColor()
    } else {
      this.resetBackgroundColor();
      this.row -= 1;
      //console.log(`${this.row} ${this.col}`)
      this.setBackgroundColor();
    }
  }

  down = () => {

    if(this.row == this.numRows - 1){
      this.setBackgroundColor()
    } else {
      this.resetBackgroundColor();
      this.row += 1;
      //console.log(`${this.row} ${this.col}`)
      this.setBackgroundColor();
    }
  }

  left = () => {

    if(this.col == 0){
      this.setBackgroundColor()
    } else {
      this.resetBackgroundColor();
      this.col -= 1;
      //console.log(`${this.row} ${this.col}`)
      this.setBackgroundColor();
    }
  }

  right = () => {

    if(this.col == this.numCols-1){
      this.setBackgroundColor()
    } else {
      this.resetBackgroundColor();
      this.col += 1;
      //console.log(`${this.row} ${this.col}`)
      this.setBackgroundColor();
    }

  }

}


module.exports = Cursor;
