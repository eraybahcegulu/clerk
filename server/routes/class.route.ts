import express from "express";
import { createClass, deleteClass , getAllClass , getClass} from "../controllers/class.controller";
import { auth } from "../middlewares/auth.middleware";
import { delay } from "../middlewares/delay.middleware";
import sanitize from "../middlewares/sanitize.middleware";
import { requestTimeout } from "../middlewares/reqTimeout.middleware";

import { abortCheck } from "../middlewares/abortCheck.middleware";
import { abort } from "../middlewares/abort.middleware";
import { rateLimit1 } from "../middlewares/rateLimit.middleware";

const router = express.Router();
const subRouter = express.Router();

router.use("/api/class", subRouter);

subRouter.get("/", abort, requestTimeout, rateLimit1, delay, auth, abortCheck, getAllClass);
subRouter.get("/:classId", abort, requestTimeout, rateLimit1, delay, auth, abortCheck, getClass);
subRouter.post("/", abort, requestTimeout, rateLimit1, delay, auth, sanitize, abortCheck, createClass);
subRouter.delete("/:classId", abort, requestTimeout, rateLimit1, delay, auth, abortCheck, deleteClass);

export default router;