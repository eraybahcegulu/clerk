import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/errorHandler";
import jwt from "jsonwebtoken";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //console.log(req.headers)
        //console.log(req.body)
        console.log(req.headers)
        const token = req.headers.authorization.split(' ')[1];

        console.log(token)
        if (token) {
            jwt.verify(token, process.env.SECRET_KEY  as string, (error: any, decodedToken: any) => {
                console.log(decodedToken);
                if (error) {
                    return res.status(401).json({ message: 'User auth token not valid' });
                } else {
                    req.user = decodedToken;
                    next();
                }
            });
        } else {
            return res.status(401).json({ message: 'User auth token not available' });
        }
    } catch (error: any) {
        console.error('Error', error);
        return next(new ErrorHandler(error.message, 500));
    }
};