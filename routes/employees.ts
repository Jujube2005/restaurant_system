import express from "express";
import { listEmployees } from "../controllers/employeeController.js";

const router = express.Router();
router.post("/", listEmployees);
export default router;
