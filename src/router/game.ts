import { Router } from 'express';
const gameRouter = Router();

gameRouter.get("/create", async (req, res) => {
    const { size, spectating } = req.query

    if (!size) {
        return res.status(400).json({
            error: "missing size",
        })
    }

    const [x, y] = (size as string).split("x").map(Number)

    if (isNaN(x) || isNaN(y)) {
        return res.status(400).json({
            error: "invalid size",
        })
    }

    if (x < 1 || y < 1 || x > 256 || y > 256) {
        return res.status(400).json({
            error: "size out of bounds",
        })
    }




})

export default gameRouter;