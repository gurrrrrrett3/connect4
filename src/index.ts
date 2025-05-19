import "dotenv/config";
import { createServer, Server as HttpServer } from "http";
import express, { Application } from "express";
import { Server, Socket } from "socket.io";
import CookieParser from "cookie-parser";
import IndexRouter from "./router/index.js";
import Database from "./database/index.js";
import { Logger } from "./utils/logger.js";

export default class Core {

    public static server: HttpServer;
    public static app: Application;
    public static io: Server;
    public static db: Database;
    private static _logger = new Logger("Core");

    public static async init() {
        this.app = express();
        this.server = createServer(this.app);
        this.io = new Server(this.server);

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(CookieParser());

        this.app.use(IndexRouter)

        const port: number = parseInt(process.env.PORT || "3000");

        this.db = new Database(() => {
            this.app.listen(port, () => {
                this._logger.info(`Server started on port ${port}`);
            })
        });

        this.io.on("connection", (socket: Socket) => {
            this._logger.info(`Socket connected: ${socket.id}`);
            socket.on("disconnect", () => {
                this._logger.info(`Socket disconnected: ${socket.id}`);
            });
        });
    }
}

Core.init()