
class Ship {
    /**
     * @constructor
     * @param {number} size 
     */
    constructor(size) {
        this.size = size;
        this.hits = new Array(size).fill(false);
    }

    /**
     * Hit ship at it's position 'i'.
     * @param {number} i
     * @returns {string} 
     */
    hit(i) {
        this.hits[i] = true;
    }

    /**
     * Returns whether the ship is hit at it's position 'i'.
     * @param {number} i 
     * @returns {boolean}
     */
    isHit(i) {
        return this.hits[i];
    }

    isSunk() {
        return this.hits.every((i) => { return i; });
    }
}

const GLOBALS = {
    BSIZE: 10,
    UNSEEN_EMPTY: 0, UNSEEN_SHIP: 1, SEEN_EMPTY: 2, SEEN_SHIP: 3, SUNK_SHIP: 4,
    HORIZONTAL: 6, VERTICAL: 9,
};


class GameBoard {

    /**
     * @typedef {{ship: Ship, x: number, y: number, direction: number}} ShipStat
     */

    constructor() {
        this.seen = new Array(GLOBALS.BSIZE).fill(null).map(() => new Array(GLOBALS.BSIZE).fill(false));
        /**
         * @type ShipStat
         */
        this.shipStats = [];
    }

    /**
     * Returns whether x,y are in board's bound or not.
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean}
     */
    coordInBound(x, y) {
        return x >= 0 && x < GLOBALS.BSIZE && y >= 0 && y < GLOBALS.BSIZE;
    }

    /**
     * Returns all the positions (x, y) the ship has occupied.
     * @param {ShipStat} shipStat 
     * @returns {{x: number, y:number}[]}
     */
    shipPositions(shipStat) {
        const positions = [];
        for (let i = 0; i < shipStat.ship.size; ++i) {
            const xIdx = shipStat.direction === GLOBALS.HORIZONTAL ?
                shipStat.x + i :
                shipStat.x;
            const yIdx = shipStat.direction === GLOBALS.VERTICAL ?
                shipStat.y + i :
                shipStat.y;
            positions.push({ x: xIdx, y: yIdx });
        }
        return positions;
    }

    getShipStats() {
        return this.shipStats;
    }

    /**
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean}
     */
    isSeen(x, y) {
        return this.seen[y][x];
    }

    /**
     * Returns whether specified coord is occupied by a ship or not
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean}
     */
    isOccupied(x, y) {
        return this.coordInBound(x, y) &&
            this.shipStats.some((st) => {
                return this.shipPositions(st).some((pos) => {
                    return x == pos.x && y == pos.y;
                });
            });
    }

    /**
     * Returns whether a specified coord or its neighbourhood 
     * is occupied by a ship or not
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean}
     */
    isOccupiedNearby(x, y) {
        return this.shipStats.some((st) => {
            const positions = this.shipPositions(st);
            for (const pos of positions) {
                // This is somehow bloated and clean at the same time
                if (
                    pos.x === x && pos.y === y ||
                    this.coordInBound(pos.x - 1, pos.y) && pos.x - 1 === x && pos.y === y ||
                    this.coordInBound(pos.x + 1, pos.y) && pos.x + 1 === x && pos.y === y ||
                    this.coordInBound(pos.x, pos.y - 1) && pos.x === x && pos.y - 1 === y ||
                    this.coordInBound(pos.x, pos.y + 1) && pos.x === x && pos.y + 1 === y ||
                    this.coordInBound(pos.x - 1, pos.y - 1) && pos.x - 1 === x && pos.y - 1 === y ||
                    this.coordInBound(pos.x - 1, pos.y + 1) && pos.x - 1 === x && pos.y + 1 === y ||
                    this.coordInBound(pos.x + 1, pos.y - 1) && pos.x + 1 === x && pos.y - 1 === y ||
                    this.coordInBound(pos.x + 1, pos.y + 1) && pos.x + 1 === x && pos.y + 1 === y
                ) {
                    return true;
                }
            }
            return false;
        });
    }


    /**
     * Places a ship in the board, horizontally.
     * @param {Ship} ship 
     * @param {number} x 
     * @param {number} y 
     */
    placeShipHorizontal(ship, x, y) {
        const positions = this.shipPositions({ ship, x, y, direction: GLOBALS.HORIZONTAL });

        if (positions.some((p) => !this.coordInBound(p.x, p.y))) {
            throw new RangeError("Ship placement out of bounds");
        }

        if (positions.some((p) => this.isOccupiedNearby(p.x, p.y))) {
            throw new RangeError("Ship cannot be placed");
        }
        this.shipStats.push({
            ship, x, y, direction: GLOBALS.HORIZONTAL
        });
    }

    /**
     * Places a ship in the board, vertically.
     * @param {Ship} ship 
     * @param {number} x 
     * @param {number} y 
     */
    placeShipVertical(ship, x, y) {
        const positions = this.shipPositions({ ship, x, y, direction: GLOBALS.VERTICAL });

        if (positions.some((p) => !this.coordInBound(p.x, p.y))) {
            throw new RangeError("Ship placement out of bounds");
        }

        if (positions.some((p) => this.isOccupiedNearby(p.x, p.y))) {
            throw new RangeError("Ship cannot be placed");
        }

        this.shipStats.push({
            ship, x, y, direction: GLOBALS.VERTICAL
        });
    }


    /**
     * Removes the ship in the specified coords Returns 
     * the size of the ship if it existed, else returns -1.
     * @param {number} x 
     * @param {number} y 
     * @returns {number}
     */
    removeShip(x, y) {

        // Essential because mostly called in UI pre-game
        x = parseInt(x);
        y = parseInt(y);

        for (const shipStat of this.shipStats) {
            const positions = this.shipPositions(shipStat);

            if (positions.some((p) => p.x === x && p.y === y)) {
                const shipIndex = this.shipStats.indexOf(shipStat);

                if (shipIndex < 0) {
                    throw new Error("Ship index should have been existent since its pos is already found");
                }

                // parseInt -> force copy
                const shipSize = parseInt(shipStat.ship.size);
                this.shipStats.splice(shipIndex, 1);
                return shipSize;
            }
        }

        return -1;
    }

    /**
     * Hit ship in the specified coords if there is one there.
     * @param {number} x 
     * @param {number} y 
     */
    receiveAttack(x, y) {
        // Make tile seen
        this.seen[y][x] = true;

        // Find if tile is on a ship, if so send hit if its not already hit
        for (const shipStat of this.shipStats) {
            const positions = this.shipPositions(shipStat);
            for (let i = 0; i < positions.length; ++i) {
                if (positions[i].x === x &&
                    positions[i].y === y &&
                    !shipStat.ship.isHit(i)
                ) {
                    shipStat.ship.hit(i);
                    break;
                }
            }
        }
    }

    /**
     * Returns whether all ships on the board are sunk
     * @returns {boolean}
     */
    allSunk() {
        return this.shipStats.every((st) => {
            return st.ship.isSunk();
        });
    }


    /**
     * Returns a represantation of the board in its current status.
     * @returns {number[][]}
     */
    board() {
        const board = new Array(GLOBALS.BSIZE).fill(null).map(() => new Array(GLOBALS.BSIZE).fill(GLOBALS.UNSEEN_EMPTY));

        for (let i = 0; i < GLOBALS.BSIZE; ++i)
            for (let j = 0; j < GLOBALS.BSIZE; ++j)
                board[i][j] = this.seen[i][j] ? GLOBALS.SEEN_EMPTY : GLOBALS.UNSEEN_EMPTY;

        for (const ship_stat of this.shipStats) {
            for (let i = 0; i < ship_stat.ship.size; ++i) {
                const xIdx = ship_stat.direction === GLOBALS.HORIZONTAL ?
                    ship_stat.x + i :
                    ship_stat.x;
                const yIdx = ship_stat.direction === GLOBALS.VERTICAL ?
                    ship_stat.y + i :
                    ship_stat.y;

                if (ship_stat.ship.isSunk()) {
                    board[yIdx][xIdx] = GLOBALS.SUNK_SHIP;
                } else {
                    board[yIdx][xIdx] = this.seen[yIdx][xIdx] ? GLOBALS.SEEN_SHIP : GLOBALS.UNSEEN_SHIP;
                }
            }
        }

        return board;
    }

    /**
     * @param {number} x 
     * @param {number} y 
     * @returns 
     */
    tileAt(x, y) {
        return this.board()[y][x];
    }
}

const AVAILABLE_SHIPS = {
    carrier: {
        size: 5,
        count: 1,
    },
    battleship: {
        size: 4,
        count: 2,
    },
    submarine: {
        size: 3,
        count: 2,
    },
    destroyer: {
        size: 2,
        count: 3,
    },
    scouter: {
        size: 1,
        count: 2,
    },
};

class Player {
    constructor() {
        this.gameBoard = new GameBoard();
    }

    board() {
        return this.gameBoard.board();
    }

    /**
     * Populates the player's board with random positions.
     */
    populateRandom() {
        this.gameBoard = new GameBoard();

        let pos_x, pos_y;
        let direction = GLOBALS.HORIZONTAL;


        for (const [shipName, ship] of Object.entries(AVAILABLE_SHIPS)) {
            for (let i = 0; i < ship.count; ++i) {
                // Create ship before loop!
                const newShip = new Ship(ship.size);
                let done = false;

                while (!done) {

                    pos_x = Math.floor(Math.random() * 10);
                    pos_y = Math.floor(Math.random() * 10);

                    if (direction === GLOBALS.HORIZONTAL) {
                        try {
                            this.gameBoard.placeShipHorizontal(newShip, pos_x, pos_y);
                            done = true;
                        }
                        catch (err) {
                            direction = GLOBALS.VERTICAL;
                            done = false;
                        }
                    } else {
                        try {
                            this.gameBoard.placeShipVertical(newShip, pos_x, pos_y);
                            done = true;
                        }
                        catch (err) {
                            direction = GLOBALS.HORIZONTAL;
                            done = false;
                        }
                    }
                }

            }
        }

    }
}


class ComputerPlayer extends Player {
    constructor() {
        super();
    }

    /**
     * Returns a random hit position on its argument.
     * @param {GameBoard} enemyBoard 
     * @returns {{x: number, y: number}}
     */
    getRandomHitPos(enemyBoard) {
        let pos_x, pos_y;

        while (true) {

            pos_x = Math.floor(Math.random() * 10);
            pos_y = Math.floor(Math.random() * 10);

            if (!enemyBoard.isSeen(pos_x, pos_y)) break;
        }

        return { x: pos_x, y: pos_y };
    }
}


class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currPlayer = player1;
        this.winner = null;
    }

    isOver() {
        return this.winner !== null;
    }

    /**
     * Attempts to hit a specified position on enemy player's board,
     * Returns whether the hit succeded or not (success in this context 
     * means a registered hit, whether it hit a ship or not.)
     * @param {number} x 
     * @param {number} y 
     * @param {Player} enemyPlayer 
     * @returns {boolean}
     */
    hitTile(x, y, enemyPlayer) {

        // DOM interacts with this function
        x = parseInt(x);
        y = parseInt(y);

        if (this.currPlayer === enemyPlayer || enemyPlayer.gameBoard.isSeen(x, y)) {
            return false;
        }

        // Sketchy but feasible rn
        const humanPlayer = enemyPlayer === this.player1 ? this.player2 : this.player1;

        enemyPlayer.gameBoard.receiveAttack(x, y);

        if (enemyPlayer.gameBoard.allSunk()) {
            this.winner = humanPlayer;
            return true;
        }

        this.currPlayer = enemyPlayer;
        if (enemyPlayer instanceof ComputerPlayer) {
            const attackPos = enemyPlayer.getRandomHitPos(humanPlayer.gameBoard);
            humanPlayer.gameBoard.receiveAttack(attackPos.x, attackPos.y);
            if (humanPlayer.gameBoard.allSunk()) {
                this.winner = enemyPlayer;
            }
            this.currPlayer = humanPlayer;
        }

        return true;
    }


}

export { Ship, GameBoard, Game, Player, ComputerPlayer, GLOBALS, AVAILABLE_SHIPS };