import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roll: { type: String, required: false },  
  grade: { type: String, required: false },
});

const UsertModel = mongoose.model("User", userSchema);

export default UsertModel;
