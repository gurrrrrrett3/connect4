import Core from "../index.js";
import User from "../database/entities/User.entity.js";
import Session from "../database/entities/Session.entity.js";

const sessionExpire = 604800000;

export default class SessionManager {
    public static async genSession(user: User): Promise<Session> {
        const session = new Session();
        session.user = user;

        await Core.db.em.persistAndFlush(session);

        return session;
    }

    public static async checkSession(session: string): Promise<Session | undefined> {
        this.checkSessionExpire();

        // check if session exists
        const validSession = await Core.db.em.findOne(Session, {
            id: session,
        }, {
            populate: ["user"],
        });

        if (validSession) {
            // Update the session
            validSession.lastUsed = new Date();
            await Core.db.em.persistAndFlush(validSession);
            return validSession;
        }

        return undefined;
    }

    public static async deleteSession(session: string): Promise<void> {
        await Core.db.em.nativeDelete(Session, {
            id: session,
        });
    }

    public static async touchSession(session: Session): Promise<void> {
        session.lastUsed = new Date();
        await Core.db.em.persistAndFlush(session);
    }

    public static async checkSessionExpire(): Promise<void> {
        if (!Core.db.em) return;
        await Core.db.em.nativeDelete(Session, {
            lastUsed: {
                $lt: new Date(Date.now() - sessionExpire),
            },
        });
    }
}