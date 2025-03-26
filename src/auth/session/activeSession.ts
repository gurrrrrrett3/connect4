import Core from "../../core.js";
import Session from "../../database/entities/session.entity.js";
import { cuid } from "../../util/id.js";

export default class ActiveSession {
    public id: string;
    public created: Date;
    public lastUsed: Date;
    public isAnon: boolean = true;
    public session?: Session;

    public constructor(session?: Session) {
        if (session) {
            this.id = session.id;
            this.created = session.created;
            this.lastUsed = session.lastUsed;
            this.isAnon = false;
            this.session = session;

            return
        }

        this.id = cuid();
        this.created = new Date();
        this.lastUsed = new Date();
    }

    public touch() {
        this.lastUsed = new Date();

        if (this.session) {
            this.session.lastUsed = this.lastUsed;
            Core.db.em.persist(this.session);
        }
    }

    get user() {
        return this.session?.user;
    }
}
