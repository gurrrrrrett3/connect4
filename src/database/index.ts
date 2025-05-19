import { MikroORM, PostgreSqlDriver, EntityManager } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { Logger } from "../utils/logger.js"

let instance: Database;

export default class Database {
    private _orm!: MikroORM;
    private _em!: EntityManager<PostgreSqlDriver>;
    private _logger = new Logger("Database");

    constructor(callback?: () => void) {
        if (instance) {
            return instance;
        }

        instance = this;

        this.init(callback);
    }

    public async init(callback?: () => void): Promise<void> {
        const _orm = await MikroORM.init<PostgreSqlDriver>({
            entities: ["./dist/database/entities/*.js"],
            entitiesTs: ["./src/database/entities/*.ts"],
            driver: PostgreSqlDriver,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            dbName: process.env.DB_NAME,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
            metadataProvider: TsMorphMetadataProvider,
            debug: process.env.DEBUG === "true",
        }).catch((err) => {
            this._logger.error("Database", "Failed to initialize database");
            this._logger.error("Database", err);
            console.error(err);
            process.exit(1);
        });

        this._orm = _orm;
        this._em = _orm.em;

        this._logger.info("Database", "Database initialized");

        if (callback) {
            callback();
        }
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