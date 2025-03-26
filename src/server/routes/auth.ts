import { Router } from 'express';
import DiscordOauthProvider from '../../auth/provider/discordOAuthProvider.js';
const AuthRouter = Router();

const DiscordOAuthProvider = new DiscordOauthProvider();

AuthRouter.get('/login', (req, res) => {
    //you're very gay

    res.redirect(DiscordOAuthProvider.generateOauthUrl());
})

AuthRouter.get('/callback', (req, res) => {
    DiscordOAuthProvider.handleCallback(req, res);
})

export default AuthRouter;