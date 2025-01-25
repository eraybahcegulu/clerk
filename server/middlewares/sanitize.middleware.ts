import { Request, Response, NextFunction } from 'express';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { handleError, sendBad } from '../utils/response';

const window = new JSDOM('').window;
const purify = DOMPurify(window);

interface RequestBody {
    [key: string]: string | number | boolean | object;
}

const sanitize = (req: Request, res: Response, next: NextFunction) => {
    try {
        const body: RequestBody = req.body;

        for (const key in body) {
            if (body.hasOwnProperty(key)) {
                const data = body[key];

                if (typeof data === 'string') {
                    const cleanedData = purify.sanitize(data, { ALLOWED_TAGS: [] });

                    if (cleanedData !== data) {
                        return sendBad(res, { message: `Invalid character detected in ${key}, try again` });
                    }
                    body[key] = cleanedData;
                }
            }
        }
        next();
    } catch (error: any) {
        handleError(error, res);
    }
};

export default sanitize;
