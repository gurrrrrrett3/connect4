import { MikroORM, PostgreSqlDriver, EntityManager } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { EntityRepository } from "@mikro-orm/core";
import UpdateableCache from "./cache/updatableCache.js";
import { Logger } from "../util/logger.js";
import User from "./entities/user.entity.js";
import Session from "./entities/session.entity.js";
import { SessionCache } from "./cache/impl/session.cache.js";
import { UserCache } from "./cache/impl/user.cache.js";


let instance: Database;

export default class Database {
    private static readonly logger = new Logger("Database");

    private _orm!: MikroORM;
    private _em!: EntityManager<PostgreSqlDriver>;
    public services!: {
        session: EntityRepository<Session>
        user: EntityRepository<User>
    }

    public cache!: {
        session: UpdateableCache<Session>,
        user: UpdateableCache<User>,
    }

    constructor() {
        if (instance) {
            return instance;
        }
        instance = this;
    }

    public async init(): Promise<void> {
        const _orm = await MikroORM.init<PostgreSqlDriver>({
            entities: ["./dist/database/entities/*.js"],
            driver: PostgreSqlDriver,
            tsNode: true,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            dbName: process.env.DB_NAME,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
            metadataProvider: TsMorphMetadataProvider,
            debug: process.env.DEBUG === "true" || process.env.DB_DEBUG === "true",
        }).catch((err) => {
            Database.logger.error("Failed to initialize database");
            Database.logger.error(err);
            console.error(err);
            process.exit(1);
        });

        this._orm = _orm;
        this._em = _orm.em;

        this.services = {
            session: this.em.getRepository(Session),
            user: this.em.getRepository(User),
        }

        this.cache = {
            user: UserCache,
            session: SessionCache
        }

        Database.logger.info("Database initialized");
    }

    public async close(): Promise<void> {
        await this._orm.close(true);
    }

    public get em(): EntityManager<PostgreSqlDriver> {
        if (!this._em) {
            throw new Error("Database not initialized");
        }
        return this._em.fork();
    }

    public get orm(): MikroORM {
        return this._orm;
    }
}