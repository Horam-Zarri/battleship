import { Game, Player, ComputerPlayer, GLOBALS, AVAILABLE_SHIPS, Ship, GameBoard } from './game.js';


// Game materials 

let p1 = new Player();
let p2 = new ComputerPlayer();

const main = document.querySelector("main");
const body = document.querySelector("body");

let board1;
let board2;


const game = new Game(p1, p2);


// Text area for everything
const textArea = document.querySelector("#text-area");

const extractTileClass = function (cList) {
    const tileRegExp = /tile \d+-\d+/;
    const matches = tileRegExp.exec(cList.toString());
    return matches[0];
}

const renderBoard = function (domBoard, player, visible) {
    let domTiles = Array.from(domBoard.childNodes).filter((node) => {
        if (node.classList) {
            return true;
        }
        return false;
    });

    const gameBoard = player.board();

    for (let i = 0; i < GLOBALS.BSIZE; ++i)
        for (let j = 0; j < GLOBALS.BSIZE; ++j) {

            let idx = i * GLOBALS.BSIZE + j;
            domTiles[idx].classList = extractTileClass(domTiles[idx].classList);

            switch (gameBoard[i][j]) {
                case GLOBALS.UNSEEN_EMPTY:
                    domTiles[idx].classList.add("invisible");
                    break;
                case GLOBALS.SEEN_EMPTY:
                    domTiles[idx].classList.add("visible");
                    break;
                case GLOBALS.UNSEEN_SHIP:
                    // Only different case for player and enemy boards
                    if (visible) {
                        domTiles[idx].classList.add("ship");
                    } else {
                        domTiles[idx].classList.add("invisible");
                    }
                    break;
                case GLOBALS.SEEN_SHIP:
                    domTiles[idx].classList.add("ship-hit");
                    break;
                case GLOBALS.SUNK_SHIP:
                    domTiles[idx].classList.add("ship-sunk");
                    break;
                default:
                    throw new Error("Game Board tile unknown!");
            }
        }
}

const Handlers = function () {

    const TILE_SIZE = 40;

    const tileRotate = function (e) {
        this.classList.toggle("vert");
    }

    const shipDragStart = function (ev) {
        ev.dataTransfer.setData("application/bship1", ev.target.classList);

        const shipRect = this.getBoundingClientRect();
        const shipSize = /sz-(\d+)/.exec(ev.target.classList.toString())[1];
        const isVert = /vert/.test(this.classList.toString());
        const grabbedTile = isVert ?
            Math.floor((ev.pageY - shipRect.y) / TILE_SIZE) :
            Math.floor((ev.pageX - shipRect.x) / TILE_SIZE)
            ;

        ev.dataTransfer.setData("application/bship1", ev.target.id);
        ev.dataTransfer.setData("application/bship2", shipSize);
        ev.dataTransfer.setData("application/bship3", grabbedTile);
        ev.dataTransfer.setData("application/bship4", isVert);
    }

    const boardDragOver = function (ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
    }

    const attachTileListeners = function (domBoard) {
        for (const tile of domBoard.childNodes) {
            tile.addEventListener("click", Handlers.tileHandler);
        }
    }

    const boardDrop = function (ev, gameBoard) {

        const firstTile = this.firstChild;
        const shipID = ev.dataTransfer.getData("application/bship1");
        const shipSize = parseInt(ev.dataTransfer.getData("application/bship2"));
        const grabbedTile = ev.dataTransfer.getData("application/bship3");
        const isVert = ev.dataTransfer.getData("application/bship4") === 'true';

        const zeroRect = firstTile.getBoundingClientRect();
        const selectedRect = ev.target.getBoundingClientRect();

        let tileX = (selectedRect.x - zeroRect.x) / TILE_SIZE;
        let tileY = (selectedRect.y - zeroRect.y) / TILE_SIZE;

        if (isVert) {
            tileY -= grabbedTile;
        } else {
            tileX -= grabbedTile;
        }

        // good ol' bound checks
        // if (tileX < 0 || tileX >= GLOBALS.BSIZE || tileY < 0 || tileY >= GLOBALS.BSIZE) {
        //     return;
        // };



        try {
            if (isVert) {
                gameBoard.placeShipVertical(new Ship(shipSize), tileX, tileY);
            } else {
                gameBoard.placeShipHorizontal(new Ship(shipSize), tileX, tileY);
            }
        }
        catch (e) {
            return undefined;
        }

        return shipID;
    }



    // Bloated implementation
    const removeBlock = function (e, gameBoard, x, y) {

        let tileClass, regMatches;

        if (e) {
            tileClass = extractTileClass(e.target.classList);
            regMatches = /tile (\d+)-(\d+)/.exec(tileClass);
        }

        const tileX = x ?? regMatches[1];
        const tileY = y ?? regMatches[2];


        const removedShipSz = gameBoard.removeShip(tileX, tileY);
        if (removedShipSz < 0) {
            return;
        }

        const shipsDiv = document.querySelector(".ships-wrapper");
        let emptyID = null;



        const shipsIDS = Array.from(shipsDiv.childNodes).map((cn) => cn.id)
            .map((i) => parseInt(/ship-(\d+)/.exec(i)[1]))
            .sort();


        for (let i = 0; i < shipsIDS.length; ++i) {
            if (shipsIDS[i] !== i) {
                emptyID = i;
                break;
            }
        }

        if (emptyID === null) {
            emptyID = shipsIDS.length;
        }

        const newShip = document.createElement("div");
        const className = "sz-" + removedShipSz;

        newShip.classList.add(className);
        newShip.id = "ship-" + emptyID;
        newShip.draggable = true;
        newShip.addEventListener("click", Handlers.tileRotate);
        newShip.addEventListener("dragstart", Handlers.shipDragStart);

        shipsDiv.appendChild(newShip);
    }

    const tileHandler = function (e) {

        if (game.isOver()) {
            return;
        }

        let reg = /\d+-\d+/;
        const cList = Array.from(e.currentTarget.classList);
        const parentDomBoard = e.currentTarget.parentElement;

        const pos = cList.find((c) => reg.test(c));

        const x = pos.charAt(0);
        const y = pos.charAt(2);

        const secondPlayerPC = p2 instanceof ComputerPlayer;

        if (parentDomBoard.id === board2.id && game.currPlayer === p1) {
            if (game.hitTile(x, y, p2)) {
                renderBoard(board1, p1, secondPlayerPC);
                renderBoard(board2, p2, !secondPlayerPC);
            }
        }

        if (!secondPlayerPC && parentDomBoard.id === board1.id && game.currPlayer === p2) {
            if (game.hitTile(x, y, p1)) {
                renderBoard(board1, p1, true);
                renderBoard(board2, p2, false);
            }
        }

        if (game.isOver()) {
            textArea.textContent = (game.winner === p1 ? "P1" : "P2") + " won!";
        }

        if (!secondPlayerPC) {
            let b1Clone = board1.cloneNode(true);
            let b2Clone = board2.cloneNode(true);

            main.removeChild(main.firstChild);
            textArea.textContent = "Pass the game over. Waiting 2s.";

            setTimeout(() => {
                UI.resetMain(b1Clone, b2Clone);
                textArea.textContent = (game.currPlayer === p1 ? "P1" : "P2") + "'s turn";
            }, 2000);
        }
    }

    return {
        tileRotate,
        shipDragStart,
        boardDragOver,
        boardDrop,
        removeBlock,
        tileHandler,
        attachTileListeners
    };
}();

const UI = function () {

    const renderPreSelection = function (domBoard, player) {
        const shipsDiv = document.createElement("div");
        let idCounter = 0;
        shipsDiv.classList = "ships-wrapper";

        for (const [shipName, ship] of Object.entries(AVAILABLE_SHIPS)) {
            for (let i = 0; i < ship.count; ++i) {
                const newShip = document.createElement("div");
                const className = "sz-" + ship.size;

                newShip.classList.add(className);
                newShip.id = "ship-" + idCounter;
                idCounter += 1;
                newShip.draggable = true;

                newShip.addEventListener("click", Handlers.tileRotate);
                newShip.addEventListener("dragstart", Handlers.shipDragStart);
                shipsDiv.appendChild(newShip);
            }
        }

        domBoard.addEventListener("dragover", Handlers.boardDragOver);
        domBoard.addEventListener("drop", (e) => {
            const shipID = Handlers.boardDrop.call(e.currentTarget, e, player.gameBoard);
            if (shipID !== undefined) {
                shipsDiv.removeChild(document.getElementById(shipID));
            };
            renderBoard(domBoard, player, true);
        });
        domBoard.addEventListener("click", (e) => {
            Handlers.removeBlock.call(e.currentTarget, e, player.gameBoard);
            renderBoard(domBoard, player, true);
        });

        const preWrapper = document.createElement("div");
        preWrapper.classList = "pre-wrapper";

        preWrapper.appendChild(shipsDiv);
        preWrapper.appendChild(domBoard);

        main.prepend(preWrapper);
    }

    const renderPreBtns = function () {
        const preButtonsWrapper = document.createElement("section");
        preButtonsWrapper.classList = "pre-btn-wrapper";

        const resetBtn = document.createElement("button");
        resetBtn.id = "reset-btn-pre";
        resetBtn.textContent = "Reset";

        const populateBtn = document.createElement("button");
        populateBtn.id = "populate-btn-pre";
        populateBtn.textContent = "Populate";

        const acceptBtn = document.createElement("button");
        acceptBtn.id = "accept-btn-pre";
        acceptBtn.textContent = "Accept";

        preButtonsWrapper.appendChild(resetBtn);
        preButtonsWrapper.appendChild(populateBtn);
        preButtonsWrapper.appendChild(acceptBtn);

        main.appendChild(preButtonsWrapper);
    }


    const initBoard = function (domBoard) {
        for (let i = 0; i < GLOBALS.BSIZE * GLOBALS.BSIZE; ++i) {
            // Create tile and add listeners
            const tile = document.createElement("div");
            // tile.addEventListener("click", Handlers.tileHandler);

            const pos = '' + (i % 10) + '-' + Math.floor(i / 10);
            tile.classList = "tile " + pos;
            domBoard.appendChild(tile);
        }

    }

    const renderMain = function () {

        // Remove previous listeners attached to whole boards
        board1 = board1.cloneNode(true);
        board2 = board2.cloneNode(true);

        Handlers.attachTileListeners(board1);
        Handlers.attachTileListeners(board2);

        renderBoard(board1, p1, true);
        renderBoard(board2, p2, false);

        textArea.textContent = p2 instanceof ComputerPlayer ? "" : "P1's turn" ;


        const boardWrapper = document.createElement("div");
        boardWrapper.classList = "board-wrapper";

        boardWrapper.appendChild(board1);
        boardWrapper.appendChild(board2);


        main.appendChild(boardWrapper);
    }

    const resetMain = function (b1Clone, b2Clone) {

        Handlers.attachTileListeners(board1);
        Handlers.attachTileListeners(board2);

        const boardWrapper = document.createElement("div");
        boardWrapper.classList = "board-wrapper";

        boardWrapper.appendChild(board1);
        boardWrapper.appendChild(board2);

        main.appendChild(boardWrapper);
    }

    const renderPre = function () {
        renderPreSelection(board1, p1);
        renderPreBtns();
        textArea.textContent = "Populate your battle grid.";

        let bothPlayersInit = false;

        const acceptBtn = document.getElementById("accept-btn-pre");
        const resetBtn = document.getElementById("reset-btn-pre");
        const populateBtn = document.getElementById("populate-btn-pre");

        acceptBtn.addEventListener("click", () => {
            const shipsDiv = document.querySelector(".ships-wrapper");

            if (shipsDiv.hasChildNodes()) {
                const oldText = textArea.textContent;
                textArea.textContent += " Must place all ships.";
                setTimeout(() => {
                    textArea.textContent = oldText;
                }, 2000);
                return;
            }

            if (bothPlayersInit || p2 instanceof ComputerPlayer) {
                // Whatever cleaning
                main.innerHTML = "";
                p2.populateRandom();
                renderMain();
            } else {
                // Peaceful cleaning
                main.removeChild(document.querySelector(".pre-wrapper"));
                renderPreSelection(board2, p2);
                bothPlayersInit = true;
            }
        });


        const remAll = function () {
            const selectingPlayer = bothPlayersInit ? p2 : p1;
            const selectingBoard = bothPlayersInit ? board2 : board1;

            const shipCoords = selectingPlayer.gameBoard.getShipStats().map((st) => { return [st.x, st.y] });
            for (const [x, y] of shipCoords) {
                Handlers.removeBlock(undefined, selectingPlayer.gameBoard, x, y);
            }
            renderBoard(selectingBoard, selectingPlayer, true);
        };

        resetBtn.addEventListener("click", () => { remAll(); });

        populateBtn.addEventListener("click", () => {
            remAll();

            const selectingPlayer = bothPlayersInit ? p2 : p1;
            const selectingBoard = bothPlayersInit ? board2 : board1;

            selectingPlayer.populateRandom();

            const shipsDiv = document.querySelector(".ships-wrapper");
            // Peaceful clean results in freeze??
            shipsDiv.innerHTML = "";

            renderBoard(selectingBoard, selectingPlayer, true);
        })
    }


    const render = function () {
        // Initialize boards
        board1 = document.createElement("div");
        board1.classList = "board";
        board1.id = "boardOne";

        board2 = document.createElement("div");
        board2.classList = "board";
        board2.id = "boardTwo";


        initBoard(board1);
        initBoard(board2);

        // Second player human or pc

        textArea.textContent = "Play against:";

        const btnWrapper = document.createElement("div");
        btnWrapper.classList = "ask-btn-wrapper";

        const playerBtn = document.createElement("button");
        playerBtn.textContent = "Player";
        const pcBtn = document.createElement("button");
        pcBtn.textContent = "PC";

        playerBtn.addEventListener("click", () => {
            p2 = new Player();
            main.innerHTML = "";
            renderPre();
        });

        pcBtn.addEventListener("click", () => {
            p2 = new ComputerPlayer();
            main.innerHTML = "";
            renderPre();
        });

        btnWrapper.appendChild(playerBtn);
        btnWrapper.appendChild(pcBtn);

        main.appendChild(btnWrapper);
    }

    return {
        render,
        resetMain
    };
}();

export { UI };