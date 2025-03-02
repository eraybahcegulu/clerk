import { Request, Response, NextFunction } from "express";
import winston from "winston";
import path from "path";
import fs from "fs";
import DailyRotateFile from "winston-daily-rotate-file";

const logDirectory = path.resolve('logs');

if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

const logger = winston.createLogger({
    transports: [
        new DailyRotateFile({
            filename: path.join(logDirectory, '%DATE%.log'),
            datePattern: 'DD-MM-YYYY',
            zippedArchive: true,
            maxSize: '10m',
            maxFiles: '14d',
        })
    ]
});

export const logOK = (req: Request, message: string | object) => {
    logger.info('----------------------------------------------------------------------------------------------------------------------------------------------------------------');
    logger.info(`OK Response}`);
    logger.info('Timestamp:' + new Date().toUTCString());
    logger.info(`Method: ${req.method}`);
    logger.info(`Base URL: ${req.baseUrl}`);
    logger.info(`Body: ${JSON.stringify(req.body)}`);
    logger.info(`Params: ${JSON.stringify(req.params)}`);
    logger.info(`Message: ${JSON.stringify(message)}`);
    logger.info(`User ID: ${req.user.sub}`);
    logger.info(`User SID: ${req.user.sid}`);
};

export const logBad = (req: Request, message: string | object) => {
    logger.error('----------------------------------------------------------------------------------------------------------------------------------------------------------------');
    logger.error(`Bad Response}`);
    logger.error('Timestamp:' + new Date().toUTCString());
    logger.error(`Method: ${req.method}`);
    logger.error(`Base URL: ${req.baseUrl}`);
    logger.error(`Body: ${JSON.stringify(req.body)}`);
    logger.error(`Params: ${JSON.stringify(req.params)}`);
    logger.error(`Message: ${JSON.stringify(message)}`);
    logger.error(`User ID: ${req.user.sub}`);
    logger.error(`User SID: ${req.user.sid}`);
};

export const logServerError = (error: any, req: Request) => {
    logger.error('----------------------------------------------------------------------------------------------------------------------------------------------------------------');
    logger.error(`Error occurred at ${req.method} ${req.url}`);
    logger.error('Timestamp:' + new Date().toUTCString());
    logger.error(`Error message: ${error.message}`);
    logger.error(`Stack trace: ${error.stack}`);
};