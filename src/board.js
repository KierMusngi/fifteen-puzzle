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
    
    render(){
        this.component.className = 'board';
        this.component.style.backgroundColor = '#eee';
        this.component.style.margin = 'auto';
        this.component.style.position = 'relative';

        return this.component;
    }
};