import GameState from "./gameState";

export interface ServerToClientEvents {
  // session events
  setSession: (sessionId: string) => void;
  setGame: (gameId: string) => void;

  // game events
  opponentJoined: (opponentName: string) => void;
  gameStart: (info: {
    player: number,
    board: number[][],
    myTurn: boolean,
  }) => void;
  gameEnd: (iWon: boolean, message: string) => void;
  gameUpdate: (gameState: GameState) => void;
}

export interface ClientToServerEvents {
  // session events
  getSession: (callback: (sessionId: string, playerId: string) => void) => void;
  linkSession: (sessionId: string, callback: (newSession: string, playerId: string) => void) => void;
  rename: (name: string) => void;

  // game events
  startGame: () => void;
  getGameInfo: (gameId: string, callback: (error: boolean, otherPlayer: string, myId: string, myPlayer: number) => void) => void;
  move: (move: number, callback: (moveValid: boolean) => void) => void;
}
