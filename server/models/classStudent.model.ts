import mongoose, { Model, Schema } from "mongoose";
import { BaseModel } from "./base.model"
import { IClassStudentModel } from "../types";

const classStudentSchema = new Schema<IClassStudentModel>(
    {
        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class'
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        },
    
        ...BaseModel
    },
    {
        versionKey: false,
    }
);

const classStudentModel: Model<IClassStudentModel> = mongoose.model("ClassStudent", classStudentSchema);
export default classStudentModel;