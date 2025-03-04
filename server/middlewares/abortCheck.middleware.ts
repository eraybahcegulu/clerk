import { Request, Response, NextFunction } from "express";

export const abortCheck = async (req: Request, res: Response, next: NextFunction) => {
    if (req.signal?.aborted) {
        res.status(408).json({
            success: false,
            message: "Request aborted due to timeout."
        });
        return true;
    }
    next();
};