const { expect } = require('chai');

const Bejeweled = require("../class/bejeweled.js");
const { grid } = require('../class/screen.js');

describe ('Bejeweled', function () {
  let symbolBank;
  let grid = [];
  beforeEach(function () {
     symbolBank = ["X", "Y", "O", "S", "H", "A", "M"];
  });

  // Add tests for setting up a basic board
  describe("initialization function - populate the board", function(){
    it("populates the board correctly without empty spaces", function(){

      grid = Bejeweled.initializeGrid(8,8,symbolBank);
      console.log(grid);


    })
  })

  // Add tests for a valid swap that matches 3

  // Add tests for swaps that set up combos

  // Add tests to check if there are no possible valid moves

});
