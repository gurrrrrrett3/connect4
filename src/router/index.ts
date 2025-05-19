import express, { Router } from 'express';
import path from 'path';
import authMiddleware from '../auth/middleware.js';
import authRouter from './auth.js';
import gameRouter from './game.js';

const router = Router();

router.use('/_', express.static(path.resolve('./dist/client/_')));

router.use(authMiddleware);

router.use('/auth', authRouter);
router.use('/game', gameRouter)

router.get("/", (req, res) => {
    res.sendFile(path.resolve('./dist/client/pages/index.html'));
})

export default router;