import { Request, Response, NextFunction } from "express";
import Class from "../models/class.model";
import ClassStudent from "../models/classStudent.model";
import { handleError, sendBad, sendOK } from "../utils/response";

export const getAllClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const classes = await Class.find({ createdBy: req.user.sub,})
        return sendOK(res, classes);

    } catch (error: any) {
        handleError(error, res);
    }
};

export const getClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exist = await Class.findOne({ createdBy: req.user.sub, _id: req.params.classId });

        if (!exist) {
            return sendBad(res, { message: 'Class not found.' });
        }

        return sendOK(res, exist);
    } catch (error: any) {
        handleError(error, res);
    }
};

export const createClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const existClass = await Class.findOne({ name: req.body.name, createdBy: req.user.sub });

        if (existClass) {
            return sendBad(res, { message: `${existClass.name} already exists in your classes.` });
        }

        const newClass = new Class({
            createdBy: req.user.sub,
            name: req.body.name,
        });

        await newClass.save();

        return sendOK(res, { message: "Class created" });
    } catch (error: any) {
        handleError(error, res);
    }
};

export const deleteClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const existClass = await Class.findOne({ _id: req.params.classId, createdBy: req.user.sub,})
        if (!existClass) {
            return sendBad(res, { message: `Not found` });
        }

        await ClassStudent.deleteMany({class: existClass._id})
        await existClass.deleteOne();

        return sendOK(res, { message: "Class deleted" });
    } catch (error: any) {
        handleError(error, res);
    }
};