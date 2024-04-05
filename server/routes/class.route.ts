import express from "express";
import { createClass, deleteClass , getAllClass , getClass} from "../controllers/class.controller";
import { auth } from "../middlewares/auth.middleware";
const router = express.Router();
const subRouter = express.Router();

router.use("/api/class", subRouter);

subRouter.get("/", auth,  getAllClass);
subRouter.get("/:classId", auth,  getClass);
subRouter.post("/", auth, createClass);
subRouter.delete("/:classId", deleteClass);

export default router;