import { Entity, PrimaryKey, Property, ManyToOne, OneToMany, Collection } from "@mikro-orm/core";

@Entity()
export default class User {

    @PrimaryKey()
    id: string

    @Property()
    displayName: string

    @Property()
    avatar: string

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

    @ManyToOne(() => User, { nullable: true })
    linkedTo?: User

    constructor(id: string, displayName: string, avatar: string, token: string, refreshToken?: string, scopes: string[] = [], expiresAt?: Date) {
        this.id = id
        this.displayName = displayName
        this.avatar = avatar
        this.token = token
        this.refreshToken = refreshToken
        this.scopes = scopes
        this.expiresAt = expiresAt

        if (this.scopes.length === 0) {
            this.scopes = ["identify"]
        }
    }

}