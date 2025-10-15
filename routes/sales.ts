import express from "express";
import { db } from "../utils/db.js";
import { authenticateToken, authorizeRoles } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get(
  "/summary",
  authenticateToken,        
  authorizeRoles("admin"),  
  async (req, res) => {
    const [rows]: any = await db.query(
      "SELECT SUM(total_price) AS totalSales FROM sales"
    );
    res.json(rows[0]);
  }
);

export default router;
