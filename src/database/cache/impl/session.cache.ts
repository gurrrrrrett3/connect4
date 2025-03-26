import Core from "../../../core.js";
import Session from "../../entities/session.entity.js";
import UpdateableCache from "../updatableCache.js";

export const SessionCache = new UpdateableCache<Session>((sessionId) => {
    return Core.db.services.session.findOne({ id: sessionId })
}, {
    limitBy: "time",
    limitFactor: 300000 // 5 minutes
});
