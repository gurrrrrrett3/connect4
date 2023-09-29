import http from "http";
import express from "express";
import { Server, Socket } from "socket.io";
import { ClientToServerEvents, ServerToClientEvents } from "./types/events";
import CookieParser from "cookie-parser";
import SocketManager from "./managers/socketManager";
import path from "path";
import GameManager from "./managers/gameManager";
import SessionManager from "./managers/sessionManager";
import Player from "./classes/player";
import Logger from "./util/logger";

export const config: {
  port: number;
} = require("../config.js");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  SocketManager.handleConnection(socket);
});

app.use(CookieParser());

app.get("/", (req, res) => {
  const game = GameManager.createGame();
  res.redirect(`/g/${game.id}`);
});

app.use(express.static("client"));
app.use("/client", express.static("client/dist/client/"));

app.get("/g/:id", (req, res) => {
  const game = GameManager.getGame(req.params.id);

  if (!game) {
    res.redirect("/");
    return;
  }

  res.sendFile(path.join(__dirname, "../client/dist/client/index.html"));
});

server.listen(config.port, () => {
  console.log(`listening on *:${config.port}`);
});

export type GameSocket = Socket<ClientToServerEvents, ServerToClientEvents>;
