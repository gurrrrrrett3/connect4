import { Router } from 'express';
import DiscordOauthProvider from '../auth/oauthProvider.js';
import Session from '../database/entities/Session.entity.js';
const authRouter = Router();

const discordOauthProvider = new DiscordOauthProvider()

authRouter.get("/", async (req, res) => {
    const { session } = req.body as { session: Session } || {}
    if (session) {
        return res.json({
            id: session.user.id,
            displayName: session.user.displayName,
            avatar: session.user.avatar,
        })
    }

    res.json({
        error: "not logged in",
    })
})

authRouter.get("/login", async (req, res) => {
    res.redirect(discordOauthProvider.generateOauthUrl())
})

authRouter.get("/callback", async (req, res) => {
    discordOauthProvider.handleCallback(req, res)
})

authRouter.get("/avatar", async (req, res) => {
    const { session } = req.body

    if (!session) {
        return res.status(401).json({
            error: "not logged in",
        })
    }

    res.redirect(DiscordOauthProvider.getAvatarUrl(session.user, 64))
})

export default authRouter;
