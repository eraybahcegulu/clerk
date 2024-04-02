import { status } from "./enums/status.modal";

export const BaseModel ={

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