import { Request, Response, NextFunction } from "express";
import Class from "../models/class.model";
import { status } from "../models/enums/status.model";

export const getAllClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const classes = await Class.find({ status: status.ACTIVE, createdBy: req.user.sub })
        return res.status(200).json(classes);
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const getClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const exist = await Class.findOne({ status: status.ACTIVE, createdBy: req.user.sub, _id: req.params.classId })
        return res.status(200).json(exist);
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const createClass = async (req: Request, res: Response, next: NextFunction) => {
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
        return res.status(500).json(error.message);
    }
};

export const deleteClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const existClass = await Class.findOne({ _id: req.params.classId })
        if (!existClass) {
            return res.status(400).json({ message: `Not found` });
        }

        await existClass.deleteOne();

        return res.status(200).json({ message: "deleted" });

    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};