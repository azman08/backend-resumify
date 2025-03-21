import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  education: String,
  experience: String,
  skills: [String],
  createdAt: { type: Date, default: Date.now },
});

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;
