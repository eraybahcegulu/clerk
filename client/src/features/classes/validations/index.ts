import * as Yup from "yup";

export const createClassValidator = Yup.object({
    className: Yup.string()
        .trim()
        .required("Class Name required to create class")
        .max(50, "Class Name must be at most 50 characters"),
});