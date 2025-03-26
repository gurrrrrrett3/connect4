import { NextFunction, Request, Response } from "express";
import SessionManager from "./session/sessionManager.js";

export default async function (req: Request, res: Response, next: NextFunction) {

    let token = req.cookies["session"]

    if (!token) {
        return next()
    }

    const session = await SessionManager.checkSession(token)

    if (!session) {
        res.clearCookie("session")
        return next()
    }

    SessionManager.touchSession(session)

    req.body = {
        ...req.body,
        session: {
            isAnon: session.isAnon,
            id: session.id,
            user: session.user
        }
    }

    next();
}
