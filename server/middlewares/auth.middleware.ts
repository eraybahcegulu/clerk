import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //console.log(req.headers)
        //console.log(req.body)

        if (!req.headers.authorization) {
            return res.status(400).json({ message: 'User auth token not available', authorization: false });
        }

        const token = req.headers.authorization.split(' ')[1];
        //console.log(process.env.CLERK_PEM_PUBLIC_KEY)

        if (token) {
            jwt.verify(token, process.env.CLERK_PEM_PUBLIC_KEY as string, (error: any, decodedToken: any) => {

                if (error) {
                    return res.status(400).json({ message: 'User auth token not valid', authorization: false });
                } else {
                    req.user = decodedToken;
                    //console.log(req.user)
                    next();
                }
            });
        } else {
            return res.status(400).json({ message: 'User auth token not available', authorization: false });
        }
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};