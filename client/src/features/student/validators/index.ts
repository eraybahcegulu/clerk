import * as Yup from "yup";

export const createStudentValidator = Yup.object({
    name: Yup.string()
        .trim()
        .required("Student Name required to create student")
        .max(50, "Student Name must be at most 50 characters"),

    surname: Yup.string()
        .trim()
        .required("Student Surname required to create student")
        .max(50, "Student Surname must be at most 50 characters"),

    no: Yup.string()
        .trim()
        .required("Student No required to create student")
        .max(50, "Student No must be at most 50 characters"),
});