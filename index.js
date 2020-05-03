import Board from './src/board.js';
import Tile from './src/tile.js';


var board = new Board(500);
document.body.append(board.render());

var playButton = document.createElement('div')
playButton.style.height = '80px';
playButton.style.width = '500px';
playButton.className = 'playButton';
playButton.style.backgroundColor = '#ccc';
playButton.style.margin = 'auto';

var playText = document.createElement('div');
playText.className = 'play-text';
playText.innerHTML = '<h1>PLAY</h1>'
playText.style.textAlign = 'center';
playText.style.fontSize = '25px';
playText.style.fontFamily = 'Arial, Helvetica, sans-serif';
playText.style.color = '#fff';
playText.style.display = 'table';

playButton.append(playText);
document.body.append(playButton);

let tiles = board.tiles; 
for (let i = 0; i < tiles.length; i++) {
    var tile = tiles[i];
    tile.component.addEventListener("click", function(event)
    {
        board.tileExhange(i);
    });
}

playButton.addEventListener("click", function(event)
{
    for(var i = 0; i <= 999; i++){
        var randomTileIndex = Math.floor(Math.random(15) * 10);
        debugger
        var referenceTile = new Tile(
            board.tiles[randomTileIndex].dimension, 
            board.tiles[randomTileIndex].number, 
            board.tiles[randomTileIndex].row, 
            board.tiles[randomTileIndex].column);

        board.tiles[randomTileIndex].exchange(board.tiles[15]);
        board.tiles[15].exchange(referenceTile);
    }
});