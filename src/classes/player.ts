import { Socket } from "socket.io";
import Session from "./session";
import { GameSocket } from "..";

export default class Player {

  public id: string = Math.random().toString(15).substr(2, 6);
  public socket: GameSocket;
  public session?: Session;
  public status: string = "idle";

  constructor(socket: GameSocket) {
    this.socket = socket;
  }

  public setStatus(status: PlayerStatus) {
    this.status = status;
  }
}

export type PlayerStatus = "idle" | `in-game:${string}` | `spectating:${string}`;
