import Board from "./board";
import Player from "./player";

export default class Game {
  public id = Math.random().toString(15).substr(2, 6);

  public state = GameState.WAITING_FOR_PLAYER;

  private _board: Board = new Board();
  private _player1?: Player;
  private _player2?: Player;

  constructor() {
    this._board.init();
  }

  public get board(): Board {
    return this._board;
  }

  public get boardArray(): number[][] {
    return this._board.board;
  }

  public get player1(): Player | undefined {
    return this._player1;
  }

  public get player2(): Player | undefined {
    return this._player2;
  }

  public set player1(player: Player) {
    this._player1 = player;
  }

  public set player2(player: Player) {
    this._player2 = player;
  }

  public get currentPlayer(): Player {
    return this.state === GameState.PLAYER1_TURN ? this._player1! : this._player2!;
  }

  public get otherPlayer(): Player {
    return this.state === GameState.PLAYER1_TURN ? this._player2! : this._player1!;
  }

  public getValidMoves(): number[] {
    return this._board.getValidMoves();
  }

  public startGame(): void {
    if (!this._player2) throw new Error("Cannot start game without two players");
    this.state = GameState.PLAYER1_TURN;

    this.currentPlayer.socket.emit("gameStart", {
      player: 1,
      board: this.boardArray,
      myTurn: true,
    });

    this.otherPlayer.socket.emit("gameStart", {
      player: 2,
      board: this.boardArray,
      myTurn: false,
    });
  }

  public update() {
    const winner = this.board.checkWin();
    if (winner !== 0) {
      this.currentPlayer.socket.emit("gameUpdate", {
        board: this.boardArray,
        validMoves: this.getValidMoves(),
        myTurn: false,
      });

      this.otherPlayer.socket.emit("gameUpdate", {
        board: this.boardArray,
        validMoves: this.getValidMoves(),
        myTurn: false,
      });

      this.currentPlayer.socket.emit("gameEnd", true, `${this.currentPlayer.id} won!`);
      this.otherPlayer.socket.emit("gameEnd", false, `${this.currentPlayer.id} won!`);

      this.state = winner === 1 ? GameState.PLAYER1_WIN : GameState.PLAYER2_WIN;
    } else if (this.board.isFull()) {
      this.currentPlayer.socket.emit("gameUpdate", {
        board: this.boardArray,
        validMoves: this.getValidMoves(),
        myTurn: false,
      });

      this.otherPlayer.socket.emit("gameUpdate", {
        board: this.boardArray,
        validMoves: this.getValidMoves(),
        myTurn: false,
      });

      this.currentPlayer.socket.emit("gameEnd", false, "Draw!");
      this.otherPlayer.socket.emit("gameEnd", false, "Draw!");

      this.state = GameState.DRAW;
    } else {
      this.state = this.state === GameState.PLAYER1_TURN ? GameState.PLAYER2_TURN : GameState.PLAYER1_TURN;

      this.currentPlayer.socket.emit("gameUpdate", {
        board: this.boardArray,
        validMoves: this.getValidMoves(),
        myTurn: true,
      });

      this.otherPlayer.socket.emit("gameUpdate", {
        board: this.boardArray,
        validMoves: this.getValidMoves(),
        myTurn: false,
      });
    }
  }
}

export enum GameState {
  WAITING_FOR_PLAYER,
  PLAYER1_TURN,
  PLAYER2_TURN,
  PLAYER1_WIN,
  PLAYER2_WIN,
  DRAW,
}
