import { Request, Response, NextFunction, response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string,
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).json({
            errorCode: "token.invalid",
        });
    };

    // Bearer 23446756756782102102s98das8d09ad79
    // [0] Bearer
    // [1] 23446756756782102102s98das8d09ad79


    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

        request.user_id = sub;

        return next();
    } catch (error) {
        return response.status(401).json({ errorCode: "token expired "});
    }
};