export default class Board {
  private _board: Slot[][] = [];
  private _length: number = 7;
  private _height: number = 6;

  public get board(): Slot[][] {
    return this._board;
  }

  public init(): void {
    for (let i = 0; i < this._height; i++) {
      this._board[i] = [];
      for (let j = 0; j < this._length; j++) {
        this._board[i][j] = Slot.EMPTY;
      }
    }
  }

  public getSlot(x: number, y: number): Slot {
    return this._board[y][x];
  }

  public place(x: number, player: Slot.PLAYER1 | Slot.PLAYER2): boolean {
    for (let i = this._height - 1; i >= 0; i--) {
      if (this._board[i][x] === Slot.EMPTY) {
        this._board[i][x] = player;
        console.log(this.toString());
        return true;
      }
    }
    return false;
  }

  public getValidMoves(): number[] {
    const moves: number[] = [];
    for (let i = 0; i < this._length; i++) {
      if (this._board[0][i] === Slot.EMPTY) {
        moves.push(i);
      }
    }
    return moves;
  }

  public checkWin(): Slot {
    // Check horizontal

    for (let i = 0; i < this._height; i++) {
      for (let j = 0; j < this._length - 3; j++) {
        if (
          this._board[i][j] !== Slot.EMPTY &&
          this._board[i][j] === this._board[i][j + 1] &&
          this._board[i][j] === this._board[i][j + 2] &&
          this._board[i][j] === this._board[i][j + 3]
        ) {
          return this._board[i][j];
        }
      }
    }

    // Check vertical

    for (let i = 0; i < this._height - 3; i++) {
      for (let j = 0; j < this._length; j++) {
        if (
          this._board[i][j] !== Slot.EMPTY &&
          this._board[i][j] === this._board[i + 1][j] &&
          this._board[i][j] === this._board[i + 2][j] &&
          this._board[i][j] === this._board[i + 3][j]
        ) {
          return this._board[i][j];
        }
      }
    }

    // Check diagonal

    for (let i = 0; i < this._height - 3; i++) {
      for (let j = 0; j < this._length - 3; j++) {
        if (
          this._board[i][j] !== Slot.EMPTY &&
          this._board[i][j] === this._board[i + 1][j + 1] &&
          this._board[i][j] === this._board[i + 2][j + 2] &&
          this._board[i][j] === this._board[i + 3][j + 3]
        ) {
          return this._board[i][j];
        }
      }
    }

    // Check diagonal (other way)

    for (let i = 0; i < this._height - 3; i++) {
      for (let j = 3; j < this._length; j++) {
        if (
          this._board[i][j] !== Slot.EMPTY &&
          this._board[i][j] === this._board[i + 1][j - 1] &&
          this._board[i][j] === this._board[i + 2][j - 2] &&
          this._board[i][j] === this._board[i + 3][j - 3]
        ) {
          return this._board[i][j];
        }
      }
    }

    return Slot.EMPTY;
  }

  public isFull(): boolean {
    for (let i = 0; i < this._length; i++) {
      if (this._board[0][i] === Slot.EMPTY) {
        return false;
      }
    }
    return true;
  }

  public toString(): string {
    let str = "";
    for (let i = 0; i < this._height; i++) {
      for (let j = 0; j < this._length; j++) {
        str += this._board[i][j] + " ";
      }
      str += "\n";
    }
    return str;
  }
}

export enum Slot {
  EMPTY,
  PLAYER1,
  PLAYER2,
}
