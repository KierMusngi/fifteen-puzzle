import Board from './src/board.js'

var board = new Board(500);
document.body.append(board.render());

var tileComponents = document.getElementsByClassName('tile');  
for (var i = 0; i < tileComponents.length; i++) {
    tileComponents[i].addEventListener("click", function(event)
    {
        alert(tileComponents[i].number);
    });
}