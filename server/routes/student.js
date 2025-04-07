import express from "express";
import StudentModel from '../models/Student.js';
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, password, roll, grade } = req.body;

    const student = await StudentModel.findOne({ username });
    if (student) {
      return res.status(409).json({ message: "Student is already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newStudent = new StudentModel({ 
      username, 
      password: hashedPassword,  
      roll,
      grade
    });
    await newStudent.save();
    return res.status(201).json({ registered: true });

  } catch (error) {
    console.error("Register error:", error.message);
    res.status(500).json({ message: "Error registering student" });
  }
});

export { router as StudentRouter };
