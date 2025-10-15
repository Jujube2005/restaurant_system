import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import salesRoutes from "./routes/sales.js";
import employeeRoutes from "./routes/employees.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/login", authRoutes);
app.use("/sales", salesRoutes);
app.use("/employees", employeeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
