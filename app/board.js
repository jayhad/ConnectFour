var Board = function(size){
	this.size = size;
	this.board = [];
	this.winningLen = 4;
}

Board.prototype.initializeBoard = function(){
	for(i = 0; i < this.size; i++){
		this.board[i] = this.createRow();
	}
}

Board.prototype.createRow = function(){
	var row = [];
	for(j = 0; j < this.size; j++){
		row[j] = 0;
	}
	return row;
}

Board.prototype.getRow = function(y){
	return this.board[y];
}

Board.prototype.getCell = function(x,y){
	var row = this.getRow(y);
	return row[x];
}

Board.prototype.setCell = function(x, y, value){
	var row = this.getRow(y);
	row[x] = value;
}

//inserts value {{player}} onto lowest nonempty cell in {{column}}
//returns true if success, false if column is full
Board.prototype.insertIntoColumn = function(column, player){
	var x = column;
	for(y = this.size - 1; y >= 0; y--){
		if(this.getCell(x,y) == 0){
			this.setCell(x, y, player);
			return true;
		}
	}
	return false;
}

Board.prototype.toString = function(){
	for(y = 0; y < this.size; y++){
		console.log(this.getRow(y));
	}
}

// //checks for any occurence of matching 4-in-a-row nonzero entries
// //returns 0 for no winner, or player # (1 or 2) if that player has 4 in a row
// Board.prototype.checkWin = function(){
// 	//check horizantal wins
	//var horizantalWin = this.checkHorizantal();
	//if(horizantalWin){
		// return horizantalWin;
	// }
	//var verticalWin = this.checkVertical();
	//if(verticalWin){
		// return verticalWin;
	// }
	//var downRightWin = this.checkDownRight();
	//if(downRightWin){
		// return downRightWin;
	// }
	//var downLeftWin = this.checkDownLeft();
	//if(downLeftWin){
		// return downLeftWin;
	// }


// 	for(y = 0; y < this.size; y++){
// 		for(x = 0; x < this.size - this.winningLen; x++){
// 			if(this.checkFourCells(this.getCell(x,y), this.getCell(x+1, y), 
// 				this.getCell(x+2, y), this.getCell(x+3, y))){
// 				return this.getCell(x,y);
// 			}
// 		}
// 	}
// 	//check vertical wins
// 	for(x = 0; x < this.size; x++){
// 		for(y = 0; y < fencepost; y++){
// 			if(this.checkFourCells(this.getCell(x,y), this.getCell(x, y+1), 
// 				this.getCell(x, y+2), this.getCell(x, y+3))){
// 				return this.getCell(x,y);
// 			}
// 		}	
// 	}
// 	//check diagonal down-right win
// 	for(y = 0; y < this.size - this.winningLen; y++){
// 		for(x = 0; x <= this.size - this.winningLen; x++){
// 			if(this.checkFourCells(this.getCell(x,y), this.getCell(x+1, y+1), 
// 				this.getCell(x+2, y+2), this.getCell(x+3, y+3))){
// 				return this.getCell(x,y);
// 			}
// 		}
// 	}

// 	//check diagonal down-left win
// 	for(y = 0; y < this.size - this.winningLen; y++){
// 		for(x = this.winningLen - 1; x < this.size; x++){
// 			if(this.checkFourCells(this.getCell(x,y), this.getCell(x-1, y+1), 
// 				this.getCell(x-2, y+2), this.getCell(x-3, y+3))){
// 				return this.getCell(x,y);
// 			}
// 		}
// 	}
// 	//if you made it this far, there is no winner
// 	return 0;
// }


Board.prototype.checkFourCells = function(c1, c2, c3, c4){
	return ((c1 != 0) && (c1 == c2) && (c1 == c3) && (c1 == c4));
}