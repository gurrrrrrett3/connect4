import cookieParser from 'cookie-parser';
import express, { Application } from 'express';
import { createServer, Server } from 'http';
import { WebSocketServer } from 'ws';
import middleware from '../auth/middleware.js';
import AuthRouter from './routes/auth.js';
import ApiRouter from './routes/api.js';
import { IndexPage } from '../client/index.js';
import path from 'path';


export default class Webserver {
    public server!: Server;
    public app!: Application;
    public wss!: WebSocketServer;

    public async init() {
        this.app = express();
        this.server = createServer(this.app);
        this.wss = new WebSocketServer({
            noServer: true,
        });

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());

        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            // res.setHeader('Content-Security-Policy', "default-src 'self'");

            next();
        })

        this.server.on('upgrade', (req, socket, head) => {
            if (req.url === '/ws') {
                this.wss.handleUpgrade(req, socket, head, (ws) => {
                    this.wss.emit('connection', ws, req);
                    console.log("WebSocket connection established");
                });
            }
            else {
                socket.destroy();
            }
        });

        this.app.use(middleware);

        this.app.use('/auth', AuthRouter)
        this.app.use('/api', ApiRouter)

        this.app.use("/generated", express.static(path.resolve("./src/client/generated")));

        this.app.get('/', async (req, res) => {
            res.send(await IndexPage({
                session: req.body.session
            }))
        })

        this.listen(parseInt(process.env.PORT! || "3000"));
    }

    public async stop() {
        this.server.close();
    }

    public async listen(port: number) {
        this.server.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    }
}