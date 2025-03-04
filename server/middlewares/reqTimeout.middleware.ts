import { Request, Response, NextFunction } from "express";
// @ts-ignore
import timeout from "express-timeout-handler";

const timeoutOptions = {

    timeout: parseInt(process.env.TIMEOUT_MS || "9000"),

    onTimeout: (req: Request, res: Response) => {
        res.status(408).json({
            success: false,
            message: "Request timeout."
        });
    },

    disable: ["write", "setHeaders", "send", "json", "end"]
};

export const requestTimeout = timeout.handler(timeoutOptions);

export const createCustomTimeout = (ms: number) => {
    const customOptions = {
        ...timeoutOptions,
        timeout: ms
    };

    return timeout.handler(customOptions);
};

export const longRequestTimeout = createCustomTimeout(30000);
export const quickRequestTimeout = createCustomTimeout(2000);

export default requestTimeout;