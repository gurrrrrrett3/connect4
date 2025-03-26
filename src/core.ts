import Database from "./database/index.js";
import Webserver from "./server/index.js";

export default class Core {
    public static db = new Database()
    public static webserver = new Webserver()

    public static async init() {
        await this.db.init();
        await this.webserver.init();
    }
}