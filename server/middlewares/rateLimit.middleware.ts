import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';

export const createCustomRateLimiter = (windowMs: number, maxRequests: number) => {
    return rateLimit({
        windowMs,
        max: maxRequests,
        message: {
            success: false,
            message: "Too many requests."
        },
        standardHeaders: false,
        legacyHeaders: false,
    });
};

export const rateLimit1 = createCustomRateLimiter(15 * 60 * 1000, 300);
export const rateLimit2 = createCustomRateLimiter(15 * 60 * 1000, 3000);
export const rateLimit3 = createCustomRateLimiter(15 * 60 * 1000, 30000);

/*
export const rateLimiter = rateLimit({

    windowMs: 15 * 60 * 1000,

    max: 100,

    message: {
        success: false,
        message: "Too many requests."
    },

    standardHeaders: false,

    legacyHeaders: false,

    skipSuccessfulRequests: true
    skip: (req: Request, res: Response) => req.ip === '5.5.5.5',
});
*/
