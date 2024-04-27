import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import classRouter from "./routes/class.route";
import studentRouter from "./routes/student.route";

export const app = express();

app.use(express.json());

app.use(cors({origin: true, credentials: true}));

const routes = [
    classRouter,
    studentRouter
];

const delayMiddleware = (req: Request, res: Response, next: NextFunction) => {
    setTimeout(next, 500);
};

app.use(delayMiddleware);

routes.forEach(route => app.use(route));