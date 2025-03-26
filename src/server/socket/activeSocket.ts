import ActiveSession from "../../auth/session/activeSession.js";

export default class ActiveSocket {
    public constructor(public readonly session: ActiveSession, public readonly write: (event: string, data: any) => void, public readonly close: () => void) {
        this.write('connected', { session: this.session.id });
        console.log('connected', this.session.id);
    }
}
