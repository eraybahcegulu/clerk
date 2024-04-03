import { Request, Response, NextFunction } from "express";
import Class from "../models/class.model";
import { status } from "../models/enums/status.modal";
import ErrorHandler from "../utils/errorHandler";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const classes = await Class.find({ status: status.ACTIVE, createdBy: req.user.sub })
        return res.status(200).json(classes);
    } catch (error: any) {
        console.error('Error', error);
        return next(new ErrorHandler(error.message, 500));
    }
};

export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const existClass = await Class.findOne({ status: status.ACTIVE, className: req.body.className })
        if (existClass) {
            return res.status(400).json({ message: `${existClass.className} already exist in your classes.` });
        }

        const newClass = new Class({
            createdBy: req.user.sub,
            className: req.body.className,
        });

        await newClass.save();
        return res.status(200).json({ message: "created" });
    } catch (error: any) {
        console.error('Error', error);
        return next(new ErrorHandler(error.message, 500));
    }
};