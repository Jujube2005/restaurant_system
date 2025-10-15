import express from "express";
import { getSalesSummary } from "../controllers/salesController.js";

const router = express.Router();
router.post("/", getSalesSummary);
export default router;
