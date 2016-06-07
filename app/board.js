var Board = function(size){
	this.size = size;
	this.grid = [];
	this.winningLen = 4;
	this.hasWinner = false;
}

Board.prototype.initializeGrid = function(){
	for(i = 0; i < this.size; i++){
		this.grid[i] = this.createRow();
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
	return this.grid[y];
}

Board.prototype.getCell = function(x,y){
	return this.grid[x][y];
}

Board.prototype.setCell = function(x, y, value){
	this.grid[x][y] = value;
}

//inserts value {{player}} onto lowest nonempty cell in {{column}}
//returns true if success, false if column is full
Board.prototype.insertIntoColumn = function(column, player){
	if(this.hasWinner){
		return false;
	}
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
	return JSON.stringify(this.grid);
}

Board.prototype.getCellImg = function(x,y){
	var cell = this.getCell(x,y);
	switch(cell){
		case 0:
			return "./images/emptyCell.png";
		case 1:
			return "./images/xCell.png";
		case 2:
			return "./images/oCell.png";
	}
}

Board.prototype.getImgTag = function(cell, x, y){
	switch(cell){
		case 0:
			return '<img src="../images/emptyCell.png" x=' + x +' y=' + y + '>';
		case 1:
			return '<img src="../images/shipCell.png" x=' + x +' y=' + y + '>';
		case 2:
			return '<img src="../images/hitCell.png" x=' + x +' y=' + y + '>';
	}
}

// //checks for any occurence of matching 4-in-a-row nonzero entries
// //returns 0 for no winner, or player # (1 or 2) if that player has 4 in a row
Board.prototype.checkWin = function(){
	//check horizantal wins
	var horizantalWin = this.checkHorizantal();
	if(horizantalWin){
		return horizantalWin;
	}
	var verticalWin = this.checkVertical();
	if(verticalWin){
		return verticalWin;
	}
	var downRightWin = this.checkDownRight();
	if(downRightWin){
		return downRightWin;
	}
	var downLeftWin = this.checkDownLeft();
	if(downLeftWin){
		return downLeftWin;
	}
	//if you made it this far, there is no winner
	return 0;
}

Board.prototype.checkHorizantal = function(){
	for(y = 0; y < this.size; y++){
		for(x = 0; x <= this.size - this.winningLen; x++){
			if(this.checkFourCells(this.getCell(x,y), this.getCell(x+1, y), 
				this.getCell(x+2, y), this.getCell(x+3, y))){
				return this.getCell(x,y);
			}
		}
	}
	return 0;
}

Board.prototype.checkVertical = function(){
	for(x = 0; x < this.size; x++){
		for(y = 0; y <= this.size - this.winningLen; y++){
			if(this.checkFourCells(this.getCell(x,y), this.getCell(x, y+1), 
				this.getCell(x, y+2), this.getCell(x, y+3))){
				return this.getCell(x,y);
			}
		}
	}
	return 0;

}

Board.prototype.checkDownRight = function(){
	for(y = 0; y <= this.size - this.winningLen; y++){
		for(x = 0; x <= this.size - this.winningLen; x++){
			if(this.checkFourCells(this.getCell(x,y), this.getCell(x+1, y+1), 
				this.getCell(x+2, y+2), this.getCell(x+3, y+3))){
				return this.getCell(x,y);
			}
		}
	}
	return 0;

}

Board.prototype.checkDownLeft = function(){
	for(y = 0; y <= this.size - this.winningLen; y++){
		for(x = this.winningLen - 1; x < this.size; x++){
			if(this.checkFourCells(this.getCell(x,y), this.getCell(x-1, y+1), 
				this.getCell(x-2, y+2), this.getCell(x-3, y+3))){
				return this.getCell(x,y);
			}
		}
	}
	return 0;
	
}


Board.prototype.checkFourCells = function(c1, c2, c3, c4){
	this.hasWinner = ((c1 != 0) && (c1 == c2) && (c1 == c3) && (c1 == c4));
	return this.hasWinner;
}