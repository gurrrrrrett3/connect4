import Core from "../../core.js";
import Cache from "../../database/cache/cache.js";
import { SessionCache } from "../../database/cache/impl/session.cache.js";
import Session from "../../database/entities/session.entity.js";
import User from "../../database/entities/user.entity.js";
import ActiveSession from "./activeSession.js";

export default class SessionManager {

    public static cache = new Cache<ActiveSession>();

    public static async getSession(id: string): Promise<ActiveSession | undefined> {
        const cachedActiveSession = this.cache.get(id);
        if (cachedActiveSession) {
            return cachedActiveSession;
        }

        const session = await SessionCache.getOrFetch(id);
        if (!session) {
            return undefined;
        }

        const activeSession = new ActiveSession(session);
        this.cache.set(id, activeSession);

        return activeSession;
    }

    public static async checkSession(token: string): Promise<ActiveSession | undefined> {
        const session = await SessionCache.getOrFetch(token);
        if (!session) {
            return undefined;
        }

        return this.getSession(session.id);
    }

    public static async touchSession(session: ActiveSession) {
        session.touch();
        this.cache.set(session.id, session);
    }

    public static async createSession(user: User): Promise<ActiveSession> {
        const session = new Session();
        session.user = user;

        SessionCache.set(session.id, session);

        // no await since we don't need to wait for the db to finish
        // all requests will hit the cache first anyway

        Core.db.em.persistAndFlush(session);

        const activeSession = new ActiveSession(session);
        this.cache.set(activeSession.id, activeSession);

        return activeSession;
    }

}