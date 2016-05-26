var Board = function(size){
	this.size = size;
	this.board = [];
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

Board.prototype.checkWin = function(){
	
}