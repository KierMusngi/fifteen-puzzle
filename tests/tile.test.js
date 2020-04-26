import Tile from '../src/tile'

test('A tile shoud have a dimension', () => 
{
    var tile = new Tile(500);
    expect(tile.dimension).toBe(500);
});

test('A tile shoud have a number', () => 
{
    var tile = new Tile(500, 1);
    expect(tile.number).toBe(1);
});

test('A tile\'s height should be equal to dimension.', () => 
{
    var tile = new Tile(500, 1);
    expect(tile.component.style.height).toBe('500px');
});

test('A tile\'s width should be equal to dimension.', () => 
{
    var tile = new Tile(500, 1);
    expect(tile.component.style.width).toBe('500px');
});

test('A tile\'s width should have a row.', () => 
{
    var tile = new Tile(500, 1, 1);
    expect(tile.row).toBe(1);
});

test('A tile\'s width should have a column.', () => 
{
    var tile = new Tile(500, 1, 1, 1);
    expect(tile.column).toBe(1);
});

test('A tile\'s width should have a top position.', () => 
{
    var tile = new Tile(125, 1, 1);
    expect(tile.component.style.top).toBe('0px');
});

test('A tile\'s width should have left position.', () => 
{
    var tile = new Tile(125, 1, 1, 1);
    expect(tile.component.style.left).toBe('0px');
});

test('A 125 dimensional tile with row and column of 2 and 3' 
 + ' should have the following top and left position respectively.', () => 
{
    var tile = new Tile(125, 1, 2, 3);
    expect(tile.component.style.top).toBe('125px');
    expect(tile.component.style.left).toBe('250px');
});

test('A 125 dimensional tile with row and column of 3 and 4' 
 + ' should have the following top and left position respectively.', () => 
{
    var tile = new Tile(125, 1, 3, 4);
    expect(tile.component.style.top).toBe('250px');
    expect(tile.component.style.left).toBe('375px');
});
