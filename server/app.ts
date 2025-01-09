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

routes.forEach(route => app.use(route));