// =================Aggregate all routes here ===========

import express from "express";
import uploadRoutes from "./Upload/index.js";
import homeRoutes from "./Home/index.js";
import deleteRoutes from "./Delete/index.js";
import showRoutes from "./ShowFile/index.js";

const router = express.Router();

const URL = "api/v1";

router.use(URL, homeRoutes);
router.use(URL, uploadRoutes);
router.use(URL, deleteRoutes);
router.use(URL, showRoutes);

export default router;
