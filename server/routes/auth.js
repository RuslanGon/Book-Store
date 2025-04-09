import express from "express";
import AdminModel from "../models/Admin.js";
import UsertModel from '../models/Users.js'
import StudentModel from '../models/Student.js'
import bcrypt from "bcrypt";
import jwt, { decode } from "jsonwebtoken";

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
      const student = await UsertModel.findOne({ username });
      if (!student) {
        return res.status(404).json({ message: "Student not registered" });
      }

      const validPassword = await bcrypt.compare(password, student.password);
      if (!validPassword) {
        return res.status(401).json({ message: "Wrong password" });
      }

      const token = jwt.sign(
        { username: student.username, role: "student" },
        process.env.STUDENT_KEY, 
        { expiresIn: "1h" }
      );

      res.cookie("token", token, { httpOnly: true, secure: true, sameSite: 'strict' });
      return res.status(200).json({ login: true, role: "student" });

    } else {
      return res.status(400).json({ message: "Invalid role" });
    }

  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Server error during login" });
  }
});


router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const existingUser = await UsertModel.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UsertModel({
      username,
      password: hashedPassword,

    });

    await newUser.save();

    const token = jwt.sign(
      { username: newUser.username, role: "student" },
      process.env.STUDENT_KEY,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, { httpOnly: true, secure: true, sameSite: 'strict' });

    res.status(201).json({ registered: true, login: true, role: "student" });

  } catch (error) {
    console.error("Registration error:", error.message);
    res.status(500).json({ message: "Server error during registration" });
  }
});


const verifyAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }
  jwt.verify(token, process.env.ADMIN_KEY, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid token." });
    }
    if (decoded.role !== "admin" || decoded.role !== "student" ) {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }
    req.username = decoded.username;
    req.role = decoded.role;
    next();
  });
};

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Invalid user." });
  }

  jwt.verify(token, process.env.ADMIN_KEY, (error, decoded) => {
    if (!error) {
      req.username = decoded.username;
      req.role = decoded.role;
      return next(); 
    }
    jwt.verify(token, process.env.STUDENT_KEY, (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: "Invalid user." });
      }

      req.username = decoded.username;
      req.role = decoded.role;
      return next();
    });
  });
};

router.get("/verify", verifyUser, async (req, res) => {
return res.json({login: true, role: req.role})
})

router.get('/logout', (req, res) => {
  res.clearCookie('token')
  return res.json({logout: true})
})

export { router as AdminRouter, verifyAdmin };
