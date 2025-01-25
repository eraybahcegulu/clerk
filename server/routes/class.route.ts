import express from "express";
import { createClass, deleteClass , getAllClass , getClass} from "../controllers/class.controller";
import { auth } from "../middlewares/auth.middleware";
import { delay } from "../middlewares/delay.middleware";
import sanitize from "../middlewares/sanitize.middleware";

const router = express.Router();
const subRouter = express.Router();

router.use("/api/class", subRouter);

subRouter.get("/", delay, auth, getAllClass);
subRouter.get("/:classId", delay, auth, getClass);
subRouter.post("/", delay, auth, sanitize, createClass, );
subRouter.delete("/:classId", delay, auth, deleteClass);

export default router;