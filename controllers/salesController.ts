import { type Request, type Response } from "express";
import { db } from "../utils/db.js";

async function getSalesSummary(req: Request, res: Response) {
    const [rows]: any = await db.query(
        "SELECT SUM(total_price) FROM orders;"
    );
    res.json({
        totalSales: rows[0]['SUM(total_price)']
    }
    );
}
