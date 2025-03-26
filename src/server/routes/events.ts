import { Router } from 'express';
import SocketManager from '../socket/socketManager.js';
import ActiveSocket from '../socket/activeSocket.js';
const EventsRouter = Router();

EventsRouter.get('/', (req, res) => {

    SocketManager.kill(req.body.session.id);

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    const socket = new ActiveSocket(req.body.session, (event, data) => {
        res.write(`event: ${event}\n`);
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    }, res.end.bind(res));

    SocketManager.add(socket);

    req.on('close', () => {
        SocketManager.kill(req.body.session.id);
        console.log('closed', req.body.session.id);
    });
})

export default EventsRouter;