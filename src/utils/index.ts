export default class Util {
    public static generateId(): string {
        return Math.random().toString(16).slice(2, 8);
    }
}