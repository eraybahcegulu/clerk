import express from "express";
import { addStudentToClass, createStudent, deleteStudent, getAllStudent, getStudent, getStudentClasses } from "../controllers/student.controller";
import { auth } from "../middlewares/auth.middleware";
import { delay } from "../middlewares/delay.middleware";
import sanitize from "../middlewares/sanitize.middleware";
import requestTimeout from "../middlewares/reqTimeout.middleware";
import { abortCheck } from "../middlewares/abortCheck.middleware";
import { abort } from "../middlewares/abort.middleware";
import { rateLimit1 } from "../middlewares/rateLimit.middleware";

const router = express.Router();
const subRouter = express.Router();

router.use("/api/student", subRouter);

subRouter.get("/", abort, requestTimeout, rateLimit1, delay, auth, abortCheck, getAllStudent);
subRouter.get("/:studentId", abort, requestTimeout, rateLimit1, delay, auth, abortCheck, getStudent);
subRouter.post("/", abort, requestTimeout, rateLimit1, delay, auth, sanitize, abortCheck, createStudent);
subRouter.delete("/:studentId", abort, requestTimeout, rateLimit1, delay, auth, abortCheck, deleteStudent);

subRouter.get("/classes/:studentId", abort, requestTimeout, rateLimit1, delay, auth, abortCheck, getStudentClasses);

subRouter.post("/:studentId/:classId", abort, requestTimeout, rateLimit1, delay, auth, sanitize, abortCheck, addStudentToClass);

export default router;