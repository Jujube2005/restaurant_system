import { db } from "../utils/db.js";
import { type Request, type Response } from "express";
import jwt, { type Secret, type SignOptions } from "jsonwebtoken";

const JWT_SECRET: Secret = process.env.JWT_SECRET as Secret;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

export async function login(req: Request, res: Response) {
  const { username, password } = req.body;

  const [rows]: any = await db.query(
    "SELECT * FROM employees WHERE username = ? AND password = ?",
    [username, password]
  );

  if (rows.length === 0) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const user = rows[0];
  const token = jwt.sign(
    { id: user.employees_id, role: user.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN } as SignOptions
  );

  res.json({
    message: "Login successful",
    token,
    role: user.role,
    name: user.first_name,
  });
}
