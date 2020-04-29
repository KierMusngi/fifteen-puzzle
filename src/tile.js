export default class Tile{
    constructor(dimension, number, row, column){
        this.dimension = dimension;
        this.number = number;
        this.component = document.createElement('div');
        this.row = row;
        this.column = column;
        this.setDimensions();
        this.setPosition();
    }

    setDimensions(){
        this.component.style.height = this.dimension + 'px';
        this.component.style.width = this.dimension + 'px';
    }

    setPosition(){
        this.component.style.top = (this.row - 1) * this.dimension + 'px';
        this.component.style.left = (this.column - 1) * this.dimension + 'px';
    }

    render(){
        if(this.number != 16){
            var numberTag = document.createElement('div');
            numberTag.className = 'number-tag';
            numberTag.innerHTML = '<h1>' + this.number + '</h1>'
            numberTag.style.textAlign = 'center';
            numberTag.style.fontSize = '25px';
            numberTag.style.fontFamily = 'Arial, Helvetica, sans-serif';
            numberTag.style.color = '#eee';
            this.component.append(numberTag);
        }

        this.component.className = 'tile';
        this.component.style.backgroundColor = '#bbb';
        this.component.style.position = 'absolute';
        this.component.style.border = '5px solid';
        this.component.style.borderColor = '#eee'
        
        return this.component;
    }
};