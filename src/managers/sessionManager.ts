import Session from "../classes/session";

export default class SessionManager {

    public static sessions: Map<string, Session> = new Map();

    public static createSession(): Session {
        const session = new Session();
        this.sessions.set(session.id, session);
        return session;
    }

    public static getSession(id: string): Session | undefined {
        return this.sessions.get(id);
    }
}