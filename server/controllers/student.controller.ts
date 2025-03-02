import { Request, Response, NextFunction } from "express";
import Student from "../models/student.model";
import Class from "../models/class.model";
import ClassStudent from "../models/classStudent.model";
import { handleError, sendBad, sendOK } from "../utils/response";
import { createKafkaMessage, KAFKA_OPERATIONS, KAFKA_TOPICS, producer, sendToKafka } from "../utils/kafka";

export const getAllStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const students = await Student.find({ createdBy: req.user.sub, })
        return sendOK(res, students);
    } catch (error: any) {
        handleError(error, res);
    }
};

export const getStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exist = await Student.findOne({ createdBy: req.user.sub, _id: req.params.studentId })

        if (!exist) {
            return sendBad(res, { message: 'Student not found.' });
        }
        return sendOK(res, exist);
    } catch (error: any) {
        handleError(error, res);
    }
};

export const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, surname, no } = req.body;
        const createdBy = req.user.sub;

        const existingStudent = await Student.findOne({ createdBy, no });

        if (existingStudent) {
            return sendBad(res, { message: `No ${existingStudent.no} already exists in your students.` });
        }

        const message = await createKafkaMessage(KAFKA_TOPICS.STUDENT_OPERATIONS, KAFKA_OPERATIONS.CREATE, { createdBy, name, surname, no }, );

        await sendToKafka(message);

        return sendOK(res, { message: "Student created" });

    } catch (error: any) {
        handleError(error, res);
    }
};

export const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exist = await Student.findOne({ _id: req.params.studentId, createdBy: req.user.sub, })
        if (!exist) {
            return sendBad(res, { message: `Not found` });
        }

        await exist.deleteOne();
        return sendOK(res, { message: "Student deleted" });

    } catch (error: any) {
        handleError(error, res);
    }
};

export const getStudentClasses = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exist = await Student.findOne({ _id: req.params.studentId, createdBy: req.user.sub, })
        if (!exist) {
            return sendBad(res, { message: `Not found` });
        }

        const classes = await ClassStudent.find({ createdBy: req.user.sub, student: req.params.studentId })
            .populate('class');

        return sendOK(res, classes);

    } catch (error: any) {
        handleError(error, res);
    }
};

export const addStudentToClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const existStudent = await Student.findOne({ _id: req.params.studentId, createdBy: req.user.sub, })
        if (!existStudent) {
            return sendBad(res, { message: `Student not found` });
        }

        const existClass = await Class.findOne({ _id: req.params.classId, createdBy: req.user.sub, })
        if (!existClass) {
            return sendBad(res, { message: `Class not found` });
        }

        const existStudentInThisClass = await ClassStudent.findOne({ class: req.params.classId, student: req.params.studentId });
        if (existStudentInThisClass) {
            return sendBad(res, { message: `This student already registered to this class` });
        }

        const newClassStudent = new ClassStudent({
            createdBy: req.user.sub,
            class: req.params.classId,
            student: req.params.studentId
        });

        await newClassStudent.save();
        return sendOK(res, { message: "Student added to class" });

    } catch (error: any) {
        handleError(error, res);
    }
};