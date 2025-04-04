import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import AdminModel from './models/Admin.js';

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const MONGODB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.lc6ql.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

async function adminAccount() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    const adminCount = await AdminModel.countDocuments();
    if (adminCount === 0) {
      const hashPassword = await bcrypt.hash("adminpassword", 10);
      const newAdmin = new AdminModel({
        username: "admin",
        password: hashPassword,
      });
      await newAdmin.save();
      console.log("✅ Admin account created");
    } else {
      console.log("ℹ️ Admin account already exists");
    }

    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating admin account:", error.message);
    process.exit(1);
  }
}

adminAccount();
