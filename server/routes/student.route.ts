import express from "express";
import { addStudentToClass, createStudent, deleteStudent, getAllStudent, getStudent, getStudentClasses } from "../controllers/student.controller";
import { auth } from "../middlewares/auth.middleware";
import { delay } from "../middlewares/delay.middleware";
import sanitize from "../middlewares/sanitize.middleware";

const router = express.Router();
const subRouter = express.Router();

router.use("/api/student", subRouter);

subRouter.get("/", delay, auth, getAllStudent);
subRouter.get("/:studentId", delay, auth, getStudent);
subRouter.post("/", delay, auth, sanitize, createStudent);
subRouter.delete("/:studentId", delay, auth, deleteStudent);

subRouter.get("/classes/:studentId", delay, auth, getStudentClasses);

subRouter.post("/:studentId/:classId", delay, auth, sanitize, addStudentToClass);

export default router;