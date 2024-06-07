import {Ship, GameBoard, Player, GLOBALS} from '../src/game.js';
import {describe, test, expect} from "@jest/globals";




describe('ship tests', () => {
    test('ship init', () => {
        const ship = new Ship(5);
        ship.hit(1);
        ship.hit(3);

        expect(ship.isHit(0)).toBe(false);
        expect(ship.isHit(1)).toBe(true);
        expect(ship.isHit(2)).toBe(false);
        expect(ship.isHit(3)).toBe(true);
        expect(ship.isHit(4)).toBe(false);

        expect(ship.isSunk()).toBe(false);

        ship.hit(4);
        ship.hit(0);

        expect(ship.isHit(2)).toBe(false);
        expect(ship.isSunk()).toBe(false);

        ship.hit(2);

        expect(ship.isSunk()).toBe(true);
    });
});


let gameBoard;


describe('game board tests', () => {

    beforeEach(() => {gameBoard = new GameBoard();});

    test('empty board', () => {
        for (let i = 0; i < GLOBALS.BSIZE; ++i) {
            for (let j = 0; j < GLOBALS.BSIZE; ++j) {
                expect(gameBoard.tileAt(i, j)).toBe(GLOBALS.UNSEEN_EMPTY);
            }
        }
    });

    test('insert ship 1', () => {
        gameBoard.placeShipHorizontal(new Ship(4), 1, 0);
        expect(gameBoard.tileAt(1, 0)).toBe(GLOBALS.UNSEEN_SHIP);
        expect(gameBoard.tileAt(2, 0)).toBe(GLOBALS.UNSEEN_SHIP);
        expect(gameBoard.tileAt(3, 0)).toBe(GLOBALS.UNSEEN_SHIP);

        gameBoard.placeShipVertical(new Ship(2), 7, 6);
        expect(gameBoard.tileAt(7, 6)).toBe(GLOBALS.UNSEEN_SHIP);
        expect(gameBoard.tileAt(7, 7)).toBe(GLOBALS.UNSEEN_SHIP);
    });

    test('insert ship occupied 1', () => {
        gameBoard.placeShipHorizontal(new Ship(1), 0, 0);
        expect(() => gameBoard.placeShipHorizontal(new Ship(1), 0, 0)).toThrow();

        gameBoard.placeShipVertical(new Ship(5), 4, 4);
        expect(() => gameBoard.placeShipHorizontal(new Ship(2), 3, 4)).toThrow();
        expect(() => gameBoard.placeShipHorizontal(new Ship(1), 3, 7)).toThrow();
        expect(() => gameBoard.placeShipVertical(new Ship(2), 5, 6)).toThrow();
        expect(() => gameBoard.placeShipVertical(new Ship(1), 4, 9)).toThrow();
    });

    test('insert ship occupied 2', () => {
        gameBoard.placeShipVertical(new Ship(3), 1, 3);
        expect(() => gameBoard.placeShipHorizontal(new Ship(5), 2, 5)).toThrow();

        const gameBoard2 = new GameBoard();

        gameBoard2.placeShipHorizontal(new Ship(2), 0, 1);
        expect(() => gameBoard2.placeShipHorizontal(new Ship(2), 2, 0)).toThrow();
        expect(() => gameBoard2.placeShipVertical(new Ship(2), 2, 2)).toThrow();
        
    });

    test('insert ship occupied 3', () => {
        //gameBoard.placeShipHorizontal(new Ship(5), 3, 0);
        gameBoard.placeShipHorizontal(new Ship(4), 2, 3);
        expect(() => gameBoard.placeShipHorizontal(new Ship(3), 0, 4)).toThrow();
    });


    test('insert ship out of bound', () => {
        expect(() => gameBoard.placeShipHorizontal(new Ship(2), 9, 0)).toThrow();
        expect(() => gameBoard.placeShipHorizontal(new Ship(4), 7, 9)).toThrow();

        expect(() => gameBoard.placeShipVertical(new Ship(2), 0, 9)).toThrow();
        expect(() => gameBoard.placeShipVertical(new Ship(3), 9, 8)).toThrow();     
    });

    test('remove ship', () => {
        gameBoard.placeShipHorizontal(new Ship(2), 0, 0);

        expect(gameBoard.tileAt(0, 0)).toBe(GLOBALS.UNSEEN_SHIP);
        expect(gameBoard.tileAt(1, 0)).toBe(GLOBALS.UNSEEN_SHIP);

        gameBoard.removeShip(0, 0);

        expect(gameBoard.tileAt(0, 0)).toBe(GLOBALS.UNSEEN_EMPTY);
        expect(gameBoard.tileAt(1, 0)).toBe(GLOBALS.UNSEEN_EMPTY);

        gameBoard.placeShipVertical(new Ship(4), 4, 1);
        gameBoard.removeShip(4, 4);

        expect(gameBoard.tileAt(4, 1)).toBe(GLOBALS.UNSEEN_EMPTY);
        expect(gameBoard.tileAt(4, 4)).toBe(GLOBALS.UNSEEN_EMPTY);

    });

    test('attack ship', () => {
        gameBoard.placeShipHorizontal(new Ship(2), 4, 4);
        gameBoard.receiveAttack(5, 4);

        expect(gameBoard.tileAt(4, 4)).toBe(GLOBALS.UNSEEN_SHIP);
        expect(gameBoard.tileAt(5, 4)).toBe(GLOBALS.SEEN_SHIP);
    });


    test('sunk ship 1', () => {
        gameBoard.placeShipVertical(new Ship(3), 5, 3);

        gameBoard.receiveAttack(5, 3);
        gameBoard.receiveAttack(5, 5);

        expect(gameBoard.tileAt(5, 3)).toBe(GLOBALS.SEEN_SHIP);
        expect(gameBoard.tileAt(5, 4)).toBe(GLOBALS.UNSEEN_SHIP);
        expect(gameBoard.tileAt(5, 5)).toBe(GLOBALS.SEEN_SHIP);
        
        gameBoard.receiveAttack(5, 4);

        expect(gameBoard.tileAt(5, 3)).toBe(GLOBALS.SUNK_SHIP);
        expect(gameBoard.tileAt(5, 4)).toBe(GLOBALS.SUNK_SHIP);
        expect(gameBoard.tileAt(5, 5)).toBe(GLOBALS.SUNK_SHIP);
    });

    test('sunk ship 2', () => {
        gameBoard.placeShipHorizontal(new Ship(5), 0, 0);
        gameBoard.placeShipVertical(new Ship(2), 6, 0);
        gameBoard.placeShipHorizontal(new Ship(1), 4, 2);

        expect(gameBoard.tileAt(4, 2)).toBe(GLOBALS.UNSEEN_SHIP);
        gameBoard.receiveAttack(4, 2);
        expect(gameBoard.tileAt(4, 2)).toBe(GLOBALS.SUNK_SHIP);

        gameBoard.receiveAttack(6, 0);
        expect(gameBoard.tileAt(6, 0)).toBe(GLOBALS.SEEN_SHIP);
        expect(gameBoard.tileAt(6, 1)).toBe(GLOBALS.UNSEEN_SHIP);

        gameBoard.receiveAttack(6, 1);
        expect(gameBoard.tileAt(6, 0)).toBe(GLOBALS.SUNK_SHIP);
        expect(gameBoard.tileAt(6, 1)).toBe(GLOBALS.SUNK_SHIP);
    });

});

let player;

describe('player tests', () => {
    beforeEach(() => {
        player = new Player();
        player.populateRandom();
    });

    test('player game to end', () => {

        expect(player.gameBoard.allSunk()).toBe(false);

        for (let i = 0; i < GLOBALS.BSIZE; ++i) {
            for (let j = 0; j < GLOBALS.BSIZE; ++j) {
                player.gameBoard.receiveAttack(i, j);
            }
        }

        expect(player.gameBoard.allSunk()).toBe(true);

    });


    // Test dependant on GameBoard implementation!!!
    test('player dev test UNSTABLE', () => {

        const rand = Math.floor(Math.random() * player.gameBoard.shipStats.length);
        const rand_st = player.gameBoard.shipStats[rand];
        const positions = player.gameBoard.shipPositions(rand_st);


        expect(player.gameBoard.shipStats[rand].ship.isSunk()).toBe(false);

        for (const pos of positions) {
            player.gameBoard.receiveAttack(pos.x, pos.y);
        }

        expect(player.gameBoard.shipStats[rand].ship.isSunk()).toBe(true);

    })
})