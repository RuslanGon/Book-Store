import express from "express";
import AdminModel from "../models/Admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password, role } = req.body;

    if (role === "admin") {
      const admin = await AdminModel.findOne({ username });
      if (!admin) {
        return res.status(404).json({ message: "Admin not registered" });
      }

      const validPassword = await bcrypt.compare(password, admin.password);
      if (!validPassword) {
        return res.status(401).json({ message: "Wrong password" });
      }

      const token = jwt.sign(
        { username: admin.username, role: "admin" },
        process.env.ADMIN_KEY,
        { expiresIn: "1h" }
      );

      res.cookie("token", token, { httpOnly: true, secure: true, sameSite: 'strict' });
      return res.status(200).json({ login: true, role: "admin" });

    } else if (role === "student") {
      // Будущая реализация для студента
      return res.status(501).json({ message: "Student login not implemented yet" });

    } else {
      return res.status(400).json({ message: "Invalid role" });
    }

  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Server error during login" });
  }
});

export { router as AdminRouter };
