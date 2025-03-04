import { Request, Response, NextFunction } from "express";

export const abort = (req: Request, res: Response, next: NextFunction) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), Number(process.env.ABORT_TIMEOUT) || 9000);

    req.signal = controller.signal; 

    res.on("finish", () => clearTimeout(timeout));
    res.on("close", () => clearTimeout(timeout));

    next();
};
