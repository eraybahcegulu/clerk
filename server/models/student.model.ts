import mongoose, { Model, Schema } from "mongoose";
import { baseModel } from "./base.model"
import { IStudentModel } from "../types";

const studentSchema = new Schema<IStudentModel>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        surname: {
            type: String,
            required: true,
            trim: true,
        },
        no: {
            type: String,
            required: true,
            trim: true,
        },


        ...baseModel
    },
    {
        versionKey: false,
    }
);

const studentModel: Model<IStudentModel> = mongoose.model("Student", studentSchema);
export default studentModel;