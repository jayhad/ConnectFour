describe('boardtest', function(){
	var testBoard;
	var SIZE = 7;
	beforeEach(function(){
		testBoard = new Board(SIZE);
		testBoard.initializeGrid();
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
	it('initializeGrid fills the proper number of rows in', function(){
		testBoard.grid = [];
		testBoard.initializeGrid();
		expect(testBoard.grid.length).to.be.eql(SIZE);
	});
	it('getRow returns correct row', function(){
		testBoard.grid = [
			[0,0,0],
			[1,0,0],
			[0,0,0]
		];
		var row = testBoard.getRow(1);
		expect(row).to.be.eql([1,0,0]);
	});
	it('getCell returns correct cell', function(){
		testBoard.grid = [
			[0,0,0],
			[0,1,0],
			[0,0,0]
		];
		var cell = testBoard.getCell(1,1);
		expect(cell).to.be.eql(1);
	});
	it('setCell sets a cell correctly', function(){
		testBoard.grid = [[0]];
		testBoard.setCell(0,0,1);
		expect(testBoard.getCell(0,0)).to.be.eql(1);
	});
	it('insertIntoColumn returns true/false correctly and sets value correctly', function(){
		var bool = testBoard.insertIntoColumn(0,1);
		expect(bool).to.be.true;
		expect(testBoard.getCell(0,6)).to.be.eql(1);
	});
	it('testing toString', function(){
		testBoard.grid = [
			[0,1,0],
			[0,1,0],
			[0,1,0]
		];
		expect(testBoard.toString()).to.be.eql('[[0,1,0],[0,1,0],[0,1,0]]');
	});
	it('checkFourCells returns true correctly', function(){
		expect(testBoard.checkFourCells(1, 1, 1, 1)).to.be.true;
	});
	it('checkFourCells returns false correctly', function(){
		expect(testBoard.checkFourCells(0,0,0,0)).to.be.false;
		expect(testBoard.checkFourCells(0,1,0,0)).to.be.false;
		expect(testBoard.checkFourCells(1,2,1,2)).to.be.false;
	});
	it('checkHorizantal returns correctly', function(){
		testBoard.grid = [
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[1,1,0,1,1,1,1],
		];
		expect(testBoard.checkHorizantal()).to.be.eql(1);
		testBoard.grid = [
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[1,1,1,0,1,1,1],
		];
		expect(testBoard.checkHorizantal()).to.be.eql(0);
	});
	it('checkVertical returns correctly', function(){
		testBoard.grid = [
			[0,0,0,0,0,0,1],
			[0,0,0,0,0,0,1],
			[0,0,0,0,0,1,1],
			[0,0,0,0,0,1,1],
			[0,0,0,0,0,1,1],
			[0,0,0,0,0,1,1],
			[0,0,0,0,0,0,1],
		];
		expect(testBoard.checkVertical()).to.be.eql(1);
		testBoard.grid = [
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,1],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,1],
			[0,0,0,0,0,0,1],
			[0,0,0,0,0,0,1],
		];
		expect(testBoard.checkVertical()).to.be.eql(0);
	});
	it('checkDownRight returns correctly', function(){
		testBoard.grid = [
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,1,0,0,0],
			[0,0,0,0,1,0,0],
			[0,0,0,0,0,1,0],
			[0,0,0,0,0,0,1],
		];
		expect(testBoard.checkDownRight()).to.be.eql(1);
		testBoard.grid = [
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,1,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,1,0,0],
			[0,0,0,0,0,1,0],
			[0,0,0,0,0,0,1],
		];
		expect(testBoard.checkDownRight()).to.be.eql(0);
	});
	it('checkDownLeft returns correctly', function(){
		testBoard.grid = [
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,1,0,0,0],
			[0,0,1,0,0,0,0],
			[0,1,0,0,0,0,0],
			[1,0,0,0,0,0,0],
		];
		expect(testBoard.checkDownLeft()).to.be.eql(1);
		testBoard.grid = [
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,1,0,0],
			[0,0,0,0,0,0,0],
			[0,0,1,0,0,0,0],
			[0,1,0,0,0,0,0],
			[1,0,0,0,0,0,0],
		];
		expect(testBoard.checkDownLeft()).to.be.eql(0);
	});
		it('checkWin returns correctly', function(){
		testBoard.grid = [
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[1,1,1,1,1,0,0],
		];
		expect(testBoard.checkWin()).to.be.eql(1);
		testBoard.grid = [
			[0,0,0,0,0,0,1],
			[0,0,0,0,0,0,1],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,1],
			[0,0,0,0,0,0,1],
			[0,0,0,0,0,0,1],
			[0,0,0,0,0,0,1],
		];
		expect(testBoard.checkWin()).to.be.eql(1);
		testBoard.grid = [
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,1,0,0,0],
			[0,0,0,0,1,0,0],
			[0,0,0,0,0,1,0],
			[0,0,0,0,0,0,1],
		];
		expect(testBoard.checkWin()).to.be.eql(1);
		testBoard.grid = [
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,2,0,0,0],
			[0,0,2,0,0,0,0],
			[0,2,0,0,0,0,0],
			[2,0,0,0,0,0,0],
		];
		expect(testBoard.checkWin()).to.be.eql(2);
		testBoard.grid = [
			[1,2,0,1,0,0,0],
			[0,1,2,0,0,0,0],
			[0,2,1,1,1,0,0],
			[2,0,0,2,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
		];
		expect(testBoard.checkWin()).to.be.eql(0);
	});
});