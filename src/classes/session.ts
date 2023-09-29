import Player from "./player";

export default class Session {
  public id: string = Math.random().toString(36).substr(2, 9);
}
