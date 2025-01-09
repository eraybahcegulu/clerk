import { Request, Response, NextFunction } from "express";
import Class from "../models/class.model";
import ClassStudent from "../models/classStudent.model";

export const getAllClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const classes = await Class.find({ createdBy: req.user.sub,})
        return res.status(200).json(classes);
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const getClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exist = await Class.findOne({ createdBy: req.user.sub, _id: req.params.classId })
        return res.status(200).json(exist);
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const createClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const existClass = await Class.findOne({ name: req.body.name, createdBy: req.user.sub, })
        if (existClass) {
            return res.status(400).json({ message: `${existClass.name} already exist in your classes.` });
        }

        const newClass = new Class({
            createdBy: req.user.sub,
            name: req.body.name,
        });

        await newClass.save();
        return res.status(200).json({ message: "Class created" });
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const deleteClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const existClass = await Class.findOne({ _id: req.params.classId, createdBy: req.user.sub,})
        if (!existClass) {
            return res.status(400).json({ message: `Not found` });
        }

        await ClassStudent.deleteMany({class: existClass._id})
        await existClass.deleteOne();

        return res.status(200).json({ message: "Class deleted" });

    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};