export const baseModel = {

    createdBy: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
};