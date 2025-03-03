import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable frontend to communicate with backend
app.use(bodyParser.json()); // Parse JSON requests

// Initialize Gemini API
const google = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = google.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to get AI response
const getResponse = async function (text) {
    try {
        const result = await model.generateContent(text);
        return result.response.text();
    } catch (error) {
        console.error("Error fetching response from Gemini:", error);
        return "Sorry, I encountered an error.";
    }
};

// API route to handle chatbot messages
app.post("/chat", async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message is required!" });
    }

    const response = await getResponse(message);
    res.json({ response });
});

// Start the backend server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
