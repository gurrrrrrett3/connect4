import { Socket } from "socket.io";
import Player from "../classes/player";
import { GameSocket } from "..";
import Logger from "../util/logger";
import Session from "../classes/session";
import SessionManager from "./sessionManager";
import GameManager from "./gameManager";
import { Slot } from "../classes/board";
import { GameState } from "../classes/game";

export default class SocketManager {
  public static connectedPlayers: Map<string, Player> = new Map();

  public static handleConnection(socket: GameSocket) {
    socket.on("getSession", (callback) => {
      const session = SessionManager.createSession();

      const player = new Player(socket);
      player.session = session;
      socket.data.session = session.id;
      SocketManager.playerReady(player);

      callback(session.id, player.id);
    });

    socket.on("linkSession", (sessionId, callback) => {
      let session = SessionManager.getSession(sessionId);

      if (!session) {
        Logger.warn("SocketManager", `Session ${sessionId} not found.`);
        session = SessionManager.createSession();
      }

      const player = new Player(socket);
      player.session = session;
      socket.data.session = session.id;
      SocketManager.playerReady(player);

      callback(session.id, player.id);
    });

    socket.on("getGameInfo", (gameId, callback) => {
      Logger.info("SocketManager", `getGameInfo: ${gameId}`);

      const game = GameManager.getGame(gameId);
      const player = SocketManager.connectedPlayers.get(socket.id);

      if (
        game?.id != undefined &&
        player?.status.split(":")[1] != undefined &&
        game?.id != player?.status.split(":")[1]
      ) {
        Logger.warn(
          "SocketManager",
          `Player ${player?.id} tried to join game ${gameId} but is already in game ${
            player?.status.split(":")[1]
          }`
        );
        socket.emit("setGame", player?.status.split(":")[1] as string);
        return;
      }

      if (!game) {
        callback(true, "Game not found.", player?.id as string, 0);
        return;
      }

      GameManager.attatchPlayer(game, player as Player);

      if (game.player1?.session?.id === socket.data.session) {
        if (!game.player2) {
          callback(false, "Waiting for opponent...", player?.id as string, 1);
        } else {
          callback(false, game.player2.id, player?.id as string, 2);
          game.player1?.socket.emit("opponentJoined", player?.id as string);
        }
      } else if (game.player2?.session?.id === socket.data.session) {
        callback(false, game.player1?.id as string, player?.id as string, 2);

        game.player1?.socket.emit("opponentJoined", player?.id as string);
      }

      if (game.player1 && game.player2) {
        game.startGame();
      }
    });

    socket.on("move", (move, callback) => {
      const player = SocketManager.connectedPlayers.get(socket.id);
      const game = GameManager.getGame(player?.status.split(":")[1] as string);

      if (!game) {
        Logger.warn("SocketManager", `Game ${player?.status.split(":")[1]} not found.`);
        return;
      }

      let isValid = game.board.place(move, game.currentPlayer == game.player1 ? Slot.PLAYER1 : Slot.PLAYER2);
      callback(isValid);

      if (isValid) {
        game.update();
      }
    });

    socket.on("disconnect", () => {
      const player = SocketManager.connectedPlayers.get(socket.id);
      this.connectedPlayers.delete(socket.id);
      Logger.info("SocketManager", `Player ${socket.id} disconnected.`);

      if (player?.status.startsWith("in-game:")) {
        const game = GameManager.getGame(player.status.split(":")[1]);
        if (game) {
          GameManager.deleteGame(game.id);
        }
      }

      if (player?.session) {
        SessionManager.sessions.delete(player.session.id);
      }
    });
  }

  public static playerReady(player: Player) {
    this.connectedPlayers.set(player.socket.id, player);
    Logger.info("SocketManager", `Player ${player.id} connected.`);
  }
}
