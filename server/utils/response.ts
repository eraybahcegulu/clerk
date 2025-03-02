import { Response } from 'express';
import { logBad, logServerError, logOK } from './winston';


export const sendOK = (res: Response, message: string | object) => {
    //console.log(res)
    console.log(message)
    logOK(res.req, message);
    return res.status(200).json(message);
};

export const sendBad = (res: Response, message: string | object) => {
    //console.log(res)
    console.log(message)
    logBad(res.req, message);
    return res.status(400).json(message);
};

export const handleError = (error: any, res: Response) => {
    //console.log(res)
    console.log(error)
    logServerError(error, res.req);
    return res.status(500).json('An unexpected error occurred.' );
};
