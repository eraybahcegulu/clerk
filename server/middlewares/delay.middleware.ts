import { Request, Response, NextFunction } from "express";

export const delay = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await new Promise(resolve => setTimeout(resolve, Number(process.env.DELAY_VALUE) || 1500 ));
        next();
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};