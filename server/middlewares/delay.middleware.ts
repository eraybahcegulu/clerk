import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/response";

export const delay = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (process.env.DELAY?.toLocaleUpperCase() !== 'TRUE') {
            next();
        }
        await new Promise(resolve => setTimeout(resolve, Number(process.env.DELAY_VALUE) || 1500));
        next();
    } catch (error: any) {
        handleError(error, res);
    }
};