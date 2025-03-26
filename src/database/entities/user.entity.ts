import { Collection, Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import type { Rel } from "@mikro-orm/core";
import Session from "./session.entity.js";

@Entity()
export default class User {

    @PrimaryKey()
    username: string

    @Property()
    displayName: string

    @Property()
    token: string

    @Property({
        nullable: true
    })
    refreshToken?: string

    @Property()
    createdAt: Date = new Date()

    @Property({
        nullable: true
    })
    expiresAt?: Date

    @Property()
    scopes: string[] = []

    @OneToMany(() => Session, session => session.user)
    sessions = new Collection<Rel<Session>>(this)

    @Property()
    elo: number = 1000

    constructor(username: string, displayName: string, token: string, refreshToken?: string, scopes: string[] = [], expiresAt?: Date) {
        this.username = username
        this.displayName = displayName
        this.token = token
        this.refreshToken = refreshToken
        this.scopes = scopes
        this.expiresAt = expiresAt

        if (this.scopes.length === 0) {
            this.scopes = ["identify"]
        }
    }

    public static fromDiscord(userId: string, username: string, token: string, refreshToken?: string, scopes: string[] = [], expiresAt?: Date) {
        const user = new User(`discord:${userId}`, username, token, refreshToken, scopes, expiresAt)
        return user
    }

}