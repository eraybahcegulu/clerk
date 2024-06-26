import mongoose, { Model, Schema } from "mongoose";
import { BaseModel } from "./base.model"
import { IClassModel } from "../types";

const classSchema = new Schema<IClassModel>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        ...BaseModel
    },
    {
        versionKey: false,
    }
);

const classModel: Model<IClassModel> = mongoose.model("Class", classSchema);
export default classModel;