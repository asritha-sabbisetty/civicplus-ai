import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Complaint from "./models/Complaint.js";
import ai from "./gemini.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.log("❌ MongoDB Connection Error:", err));

app.get("/", (req, res) => {
    res.send("CivicPlus AI Backend is Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.get("/complaints", async (req, res) => {
    try {
        const complaints = await Complaint.find();

        res.status(200).json(complaints);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching complaints",
            error: error.message,
        });
    }
});

app.post("/complaints", async (req, res) => {
    try {
        const complaint = new Complaint(req.body);

        await complaint.save();

        res.status(201).json({
            message: "Complaint submitted successfully!",
            complaint,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error submitting complaint",
            error: error.message,
        });
    }
});

app.get("/ai-test", async (req, res) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Say hello in one sentence.",
        });

        res.json({
            reply: response.text,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Gemini test failed",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});