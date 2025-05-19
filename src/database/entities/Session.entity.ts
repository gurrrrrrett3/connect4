import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import User from "./User.entity.js";

@Entity()
export default class Session {

    @PrimaryKey()
    id: string = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);

    @ManyToOne()
    user!: User;

    @Property()
    lastUsed: Date = new Date();

}