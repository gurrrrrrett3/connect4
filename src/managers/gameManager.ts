import Game, { GameState } from "../classes/game";
import Player from "../classes/player";

export default class GameManager {
  public static games: Map<string, Game> = new Map();

  public static createGame(): Game {
    const game = new Game();
    this.games.set(game.id, game);
    return game;
  }

  public static getGame(id: string): Game | undefined {
    return this.games.get(id);
  }

  public static deleteGame(id: string): void {
    this.games.delete(id);
  }

  public static attatchPlayer(game: Game, player: Player): void {
    if (!game.player1) {
      game.player1 = player;
      player.status = `in-game:${game.id}`;
    } else if (!game.player2) {
      game.player2 = player;
      player.status = `in-game:${game.id}`;
    } else {
      // spectator
    }
  }
}
