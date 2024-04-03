import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/errorHandler";
import jwt from "jsonwebtoken";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //console.log(req.headers)
        //console.log(req.body)

        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'User auth token not available' });
        }

        const token = req.headers.authorization.split(' ')[1];
        //console.log(process.env.CLERK_PEM_PUBLIC_KEY)

        if (token) {
            jwt.verify(token, process.env.CLERK_PEM_PUBLIC_KEY as string, (error: any, decodedToken: any) => {

                if (error) {
                    return res.status(401).json({ message: 'User auth token not valid' });
                } else {
                    req.user = decodedToken;
                    //console.log(req.user)
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