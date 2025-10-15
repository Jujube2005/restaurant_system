import { type Request, type Response } from "express";
import { db } from "../utils/db.js";

async function login(req: Request, res: Response) {
    const { username, password } = req.body;

    const [rows]: any = await db.query(
        "SELECT * FROM employees WHERE username = ? AND password = ?",
        [username, password]
    )
    
    if (rows.length === 0) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = rows[0];
    return res.json(
        {
            message: "Login successful",
            role: user.role,
            name: user.first_name + " " + user.last_name
        }
    )
}
