export default class Elo {

    public static getKFactor(rating: number) {
        if (rating < 2100) {
            return 32
        } else if (rating >= 2100 && rating <= 2400) {
            return 24
        } else {
            return 16
        }
    }

    public static calculateElo(self: number, opponent: number, selfWin: boolean) {
        const kFactor = this.getKFactor(self)
        const expectedScore = 1 / (1 + Math.pow(10, (opponent - self) / 400))
        const actualScore = selfWin ? 1 : 0
        return self + kFactor * (actualScore - expectedScore)
    }

    public static calculateEloChange(self: number, opponent: number, selfWin: boolean) {
        return this.calculateElo(self, opponent, selfWin) - self
    }

    public static getExpectedScore(self: number, opponent: number) {
        return 1 / (1 + Math.pow(10, (opponent - self) / 400))
    }

}