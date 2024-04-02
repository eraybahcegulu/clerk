import mongoose, { Document, Model, Mongoose, Schema } from "mongoose";
import { BaseModel } from "./base.model"

export interface IClass extends Document {
    className: string;

}

const classSchema = new Schema<IClass>(
    {
        className: {
            type: String,
            required: true,
            trim: true,
        },
        ...BaseModel
    },
);

const classModel: Model<IClass> = mongoose.model("Class", classSchema);
export default classModel;