import Core from "../../../core.js"
import User from "../../entities/user.entity.js"
import UpdateableCache from "../updatableCache.js"

export const UserCache = new UpdateableCache<User>((username) => {
    return Core.db.services.user.findOne({ username })
})
