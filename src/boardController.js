var BoardController = function(){
	var controller = this;

	controller.board = new Board(7);
	controller.board.initializeGrid();
	controller.player = 1;
	controller.winMessage = "Good luck!\r\nPlayer: " + controller.player;

	var click = function(x,y){
		controller.board.insertIntoColumn(x,controller.player);
		controller.player = (controller.player == 1) ? 2 : 1;
		var winner = controller.board.checkWin();
		if(winner){
			controller.winMessage = "Winner! Player: " + winner;
		}else{
			controller.winMessage = "Good luck!\r\nPlayer: " + controller.player;
		}
	}


	controller.click = click;
}

angular.module('boardApp', [])
	.controller('BoardController', BoardController);