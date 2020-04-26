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