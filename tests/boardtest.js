describe('boardtest', function(){
	var testBoard;
	var SIZE = 5;
	beforeEach(function(){
		testBoard = new Board(SIZE);
		testBoard.initializeBoard();
	});
	it('canary is passing', function() {
		expect(true).to.be.eql(true);
	});
	it('constructor sets size correctly', function(){
		expect(testBoard.size).to.be.eql(SIZE);
	});
	it('createRow returns a row of correct size', function(){
		var row = testBoard.createRow();
		expect(row.length).to.be.eql(SIZE);
	})
	it('initializeBoard fills the proper number of rows in', function(){
		testBoard.board = [];
		testBoard.initializeBoard();
		expect(testBoard.board.length).to.be.eql(SIZE);
	});
	it('getRow returns correct row', function(){
		testBoard.board = [
			[0,0,0],
			[1,0,0],
			[0,0,0]
		];
		var row = testBoard.getRow(1);
		expect(row).to.be.eql([1,0,0]);
	});
	it('getCell returns correct cell', function(){
		testBoard.board = [
			[0,0,0],
			[0,1,0],
			[0,0,0]
		];
		var cell = testBoard.getCell(1,1);
		expect(cell).to.be.eql(1);
	});
	it('setCell sets a cell correctly', function(){
		testBoard.board = [[0]];
		testBoard.setCell(0,0,1);
		expect(testBoard.getCell(0,0)).to.be.eql(1);
	});
	it('insertIntoColumn returns true/false correctly and sets value correctly', function(){
		testBoard.board = [
			[0,1,0],
			[0,1,0],
			[0,1,0]
		];
		testBoard.size = 3;
		var success = testBoard.insertIntoColumn(1, 1);
		expect(success).to.be.false;
		var success = testBoard.insertIntoColumn(0, 1);
		expect(testBoard.getCell(0,2)).to.be.eql(1);
		expect(success).to.be.true;
	});
	it('testing toString', function(){
		testBoard.toString();
	});
});