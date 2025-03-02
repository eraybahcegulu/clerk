import mongoose, { Model, Schema } from "mongoose";
import { baseModel } from "./base.model"
import { IClassModel } from "../types";

const classSchema = new Schema<IClassModel>(
    {
        name: {
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

const classModel: Model<IClassModel> = mongoose.model("Class", classSchema);
export default classModel;