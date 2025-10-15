import { type Request, type Response } from "express";
import { db } from "../utils/db.js";

export async function listEmployees(req:Request, res:Response) {
    const [rows]: any = await db.query(
        "SELECT * FROM employees;"
    );
    res.json(rows);
}
