import { Request, Response, NextFunction } from "express";
import Student from "../models/student.model";
import Class from "../models/class.model";
import ClassStudent from "../models/classStudent.model";

export const getAllStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const students = await Student.find({ createdBy: req.user.sub, })
        return res.status(200).json(students);
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const getStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exist = await Student.findOne({ createdBy: req.user.sub, _id: req.params.studentId })
        return res.status(200).json(exist);
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exist = await Student.findOne({ createdBy: req.user.sub, no: req.body.no })
        if (exist) {
            return res.status(400).json({ message: `No ${exist.no} already exist in your students.` });
        }

        const newStudent = new Student({
            createdBy: req.user.sub,
            name: req.body.name,
            surname: req.body.surname,
            no: req.body.no
        });

        await newStudent.save();
        return res.status(200).json({ message: "Student created" });
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exist = await Student.findOne({ _id: req.params.studentId, createdBy: req.user.sub, })
        if (!exist) {
            return res.status(400).json({ message: `Not found` });
        }

        await exist.deleteOne();

        return res.status(200).json({ message: "Student deleted" });

    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const getStudentClasses = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exist = await Student.findOne({ _id: req.params.studentId, createdBy: req.user.sub, })
        if (!exist) {
            return res.status(400).json({ message: `Not found` });
        }

        const classes = await ClassStudent.find({ createdBy: req.user.sub, student: req.params.studentId })
                                            .populate('class');

        return res.status(200).json(classes);

    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const addStudentToClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const existStudent = await Student.findOne({ _id: req.params.studentId, createdBy: req.user.sub, })
        if (!existStudent) {
            return res.status(400).json({ message: `Student not found` });
        }

        const existClass = await Class.findOne({ _id: req.params.classId, createdBy: req.user.sub, })
        if (!existClass) {
            return res.status(400).json({ message: `Class not found` });
        }

        const existStudentInThisClass = await ClassStudent.findOne({ class: req.params.classId, student: req.params.studentId});
        if(existStudentInThisClass){
            return res.status(400).json({ message: `This student already registered to this class` });
        }

        const newClassStudent = new ClassStudent({
            createdBy: req.user.sub,
            class: req.params.classId,
            student: req.params.studentId
        });

        await newClassStudent.save();
        return res.status(200).json({ message: "Student added to class" });

    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};