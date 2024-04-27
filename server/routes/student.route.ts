import express from "express";
import { addStudentToClass, createStudent, deleteStudent, getAllStudent, getStudent, getStudentClasses } from "../controllers/student.controller";
import { auth } from "../middlewares/auth.middleware";
const router = express.Router();
const subRouter = express.Router();

router.use("/api/student", subRouter);

subRouter.get("/", auth, getAllStudent);
subRouter.get("/:studentId", auth, getStudent);
subRouter.post("/", auth, createStudent);
subRouter.delete("/:studentId", auth, deleteStudent);

subRouter.get("/classes/:studentId", auth, getStudentClasses);

subRouter.post("/:studentId/:classId", auth, addStudentToClass);

export default router;