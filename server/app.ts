import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import classRouter from "./routes/class.route";

export const app = express();

app.use(express.json());

app.use(cors());

const routes = [
    classRouter
];

routes.forEach(route => app.use(route));