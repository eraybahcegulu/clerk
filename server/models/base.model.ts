import { status } from "./enums/status.model";

export const BaseModel = {

    createdBy: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    status: {
        required: true,
        type: String,
        enum: [status.ACTIVE, status.DELETED],
        default: status.ACTIVE,
    }
};