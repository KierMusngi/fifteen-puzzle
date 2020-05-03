import Board from '../src/board'

test('A board should have dimension.', () => 
{
    var board = new Board(500);
    expect(board.dimension).toBe(500);
});

test('A board should contain tiles.', () => 
{
    var board = new Board(500);
    expect(board.tiles).not.toBeNull();
    expect(board.tiles).not.toBeUndefined();
});

test('A board should contain 16 tiles.', () => 
{
    var board = new Board(500);
    expect(board.tiles).toHaveLength(16);
});

test('A board tile dimension should be in ratio of board\'s size.', () => 
{
    var board = new Board(500);
    board.tiles.forEach(tile => {
        expect(tile.dimension).toBe(125);
    });
});

test('A board\'s height should be equal to dimension.', () => 
{
    var board = new Board(500);
    expect(board.component.style.height).toBe('500px');
});

test('A board\'s width should be equal to dimension.', () => 
{
    var board = new Board(500);
    expect(board.component.style.width).toBe('500px');
});

test('A board\'s number 6 tile should have 2 and 2 as row and column.', () => 
{
    var board = new Board(500);
    var tile = board.tiles[6 - 1];
    expect(tile.row).toBe(2);
    expect(tile.column).toBe(2);
});

test('A board\'s number 11 tile should have 3 and 3 as row and column.', () => 
{
    var board = new Board(500);
    var tile = board.tiles[11 - 1];
    expect(tile.row).toBe(3);
    expect(tile.column).toBe(3);
});

test('A board\'s tile should always exchange position with the largest tile number.', () => 
{
    var board = new Board(500);

    board.tileExhange(14);

    expect(board.tiles[14].row).toBe(4);
    expect(board.tiles[14].column).toBe(4);
    expect(board.tiles[14].component.style.top).toBe('375px');
    expect(board.tiles[14].component.style.left).toBe('375px');

    expect(board.tiles[15].row).toBe(4);
    expect(board.tiles[15].column).toBe(3);
    expect(board.tiles[15].component.style.top).toBe('375px');
    expect(board.tiles[15].component.style.left).toBe('250px');
});

test('A board should find tile by row and column.', () => 
{
    var board = new Board(500);

    var tile = board.findTile(1, 1);

    expect(tile.number).toBe(1);
});

test('A board should find the tile above selected tile.', () => 
{
    var board = new Board(500);

    var tile = board.findTileNumberTop(5);

    expect(tile.number).toBe(2);
});

test('A board should find the tile below selected tile.', () => 
{
    var board = new Board(500);

    var tile = board.findTileNumberBelow(5);

    expect(tile.number).toBe(10);
});

test('A board should find the tile right selected tile.', () => 
{
    var board = new Board(500);

    var tile = board.findTileNumberRight(5);

    expect(tile.number).toBe(7);
});

test('A board should find the tile left selected tile.', () => 
{
    var board = new Board(500);

    var tile = board.findTileNumberLeft(5);

    expect(tile.number).toBe(5);
});

test('A board should return undefine if the tile selected has no tile on any direction of it.', () => 
{
    var board = new Board(500);

    var topTile = board.findTileNumberTop(0);
    var belowTile = board.findTileNumberBelow(15);
    var rightTile = board.findTileNumberRight(15);
    var leftTile = board.findTileNumberLeft(0);

    expect(topTile.number).toBe(undefined);
    expect(belowTile.number).toBe(undefined);
    expect(rightTile.number).toBe(undefined);
    expect(leftTile.number).toBe(undefined);
});

test('A board should not move a tile if one of the tile\'s top, bottom, right, left tile is not number 16.', () => 
{
    var board = new Board(500);

    board.tileExhange(13);

    expect(board.tiles[13].row).toBe(4);
    expect(board.tiles[13].column).toBe(2);
    expect(board.tiles[13].component.style.top).toBe('375px');
    expect(board.tiles[13].component.style.left).toBe('125px');
});