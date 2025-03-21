import express from "express";
import Resume from "../models/Resume.js";

const router = express.Router();

// Create Resume
router.post("/", async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    await newResume.save();
    res.status(201).json(newResume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get All Resumes
router.get("/", async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get one Resume
router.get("/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: "Resume not found" });
    res.json(resume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Resume
router.put("/:id", async (req, res) => {
  try {
    console.log("Received update request for ID:", req.params.id);
    console.log("Request body:", req.body);

    const updatedResume = await Resume.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedResume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json(updatedResume);
  } catch (error) {
    console.error("Error updating resume:", error);
    res.status(500).json({ error: error.message });
  }
});

// Delete Resume
router.delete("/:id", async (req, res) => {
  try {
    await Resume.findByIdAndDelete(req.params.id);
    res.json({ message: "Resume deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
