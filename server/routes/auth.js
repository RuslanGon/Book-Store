import express from "express"
import AdminModel from '../models/Admin.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post("/login", async (req, res) => {
  const { username, password, role } = req.body;
  if (role === "admin") {
    const admin = await AdminModel.findOne({ username });
    if (!admin) {
      return res.json({ message: "admin not register" });
    }
    const validPassword = await bcrypt.compare(password, admin.password)
    if(!validPassword) {
      return res.json({ message: "wrong password" });
    }
    const token = jwt.sign({username: admin.username, role: 'admin'})
  } else if (role === "student") {
  } else {
  }
});