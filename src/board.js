import Tile from './tile.js';

export default class Board{
    constructor(dimension){
        this.dimension = dimension;
        this.tiles = [];
        this.tileDimension = dimension / 4;
        this.component = document.createElement('div');

        this.createTiles();
        this.setDimensions();
    }

    setDimensions(){
        this.component.style.height = this.dimension + 'px';
        this.component.style.width = this.dimension + 'px';
    }

    createTiles(){
        var number = 1;
        for(var row = 1; row < 5; row += 1){
            for(var column = 1; column < 5; column += 1){
                var tile = new Tile(this.tileDimension, number, row, column);
                this.tiles.push(tile);
                this.component.append(tile.render());
                number += 1;
            }
        }
    }
    
    tileExhange(tileIndex){
        if(
            this.findTileNumberTop(tileIndex).number === 16 ||
            this.findTileNumberBelow(tileIndex).number === 16 ||
            this.findTileNumberRight(tileIndex).number === 16 ||
            this.findTileNumberLeft(tileIndex).number === 16)
        {
            var referenceTile = new Tile(
                this.tiles[tileIndex].dimension, 
                this.tiles[tileIndex].number, 
                this.tiles[tileIndex].row, 
                this.tiles[tileIndex].column);
    
            this.tiles[tileIndex].exchange(this.tiles[15]);
            this.tiles[15].exchange(referenceTile);
        }
    }

    findTile(row, column){
        var tile = {};
        this.tiles.filter(function(a)
        {
            if (a.row === row && a.column === column){
                tile = a;
            }
        });

        return tile;
    }

    findTileNumberTop(tileIndex){
        var referenceTile = this.tiles[tileIndex];
        return this.findTile(referenceTile.row - 1, referenceTile.column);
    }

    findTileNumberBelow(tileIndex){
        var referenceTile = this.tiles[tileIndex];
        return this.findTile(referenceTile.row + 1, referenceTile.column);
    }

    findTileNumberRight(tileIndex){
        var referenceTile = this.tiles[tileIndex];
        return this.findTile(referenceTile.row, referenceTile.column + 1);
    }

    findTileNumberLeft(tileIndex){
        var referenceTile = this.tiles[tileIndex];
        return this.findTile(referenceTile.row, referenceTile.column - 1);
    }
    
    render(){
        this.component.className = 'board';
        this.component.style.backgroundColor = '#eee';
        this.component.style.margin = 'auto';
        this.component.style.position = 'relative';

        return this.component;
    }
};