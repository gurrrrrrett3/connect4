import User from "../../database/entities/user.entity.js";

export default class ActiveUser {
    public username: string;
    public linkedTo?: User

    constructor(username: string)
    constructor(user: User)
    constructor(user: string | User) {
        if (typeof user === "string") {
            this.username = user
        } else {
            this.linkedTo = user
            this.username = user.username
        }
    }
}
