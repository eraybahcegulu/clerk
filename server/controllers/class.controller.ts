import { Request, Response, NextFunction } from "express";
import Class from "../models/class.model";
import { status } from "../models/enums/status.modal";
import ErrorHandler from "../utils/errorHandler";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    console.log(res);
    try {
        const classes = await Class.find({ status: status.ACTIVE })
        return res.status(200).json(classes);
    } catch (error: any) {
        console.error('Error', error);
        return next(new ErrorHandler(error.message, 500));
    }
};

export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const newClass = new Class({
            className: "test",
        });

        await newClass.save();
        return res.status(201).json({ message: "created" });
    } catch (error: any) {
        console.error('Error', error);
        return next(new ErrorHandler(error.message, 500));
    }
};