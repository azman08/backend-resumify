import express from "express";
import cors from "cors";
import resumeRoutes from "./routes/resumeRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: "https://frontend-resumify.vercel.app/",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type",
  })
);
app.use(express.json());

app.use("/api/resumes", resumeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
