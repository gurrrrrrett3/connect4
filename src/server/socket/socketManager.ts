import ActiveSocket from "./activeSocket.js";

export default class SocketManager {
    public static socket: Record<string, ActiveSocket> = {};

    public static add(socket: ActiveSocket) {
        this.socket[socket.session.id] = socket;
    }

    public static kill(sessionId: string) {
        if (this.socket[sessionId]) {
            this.socket[sessionId].close();
            delete this.socket[sessionId];
        }
    }

}