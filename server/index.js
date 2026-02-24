import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error(
    "ERROR: OPENAI_API_KEY not set in server/.env. Please add your OpenAI API key."
  );
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// AI Chat endpoint
app.post("/api/ai/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        success: false,
        error: "Invalid request. 'message' field is required and must be a string.",
      });
    }

    console.log("[AI] Received message:", message);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 512,
      temperature: 0.7,
    });

    const reply =
      response.choices[0]?.message?.content ||
      "No response from AI model.";

    console.log("[AI] Response generated successfully");

    res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error("[AI Error]", error.message);

    const statusCode = error.status || 500;
    const errorMessage =
      error.message || "Internal server error";

    res.status(statusCode).json({
      success: false,
      error: errorMessage,
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`[Server] Running on http://localhost:${PORT}`);
  console.log(`[Server] AI chat endpoint: POST http://localhost:${PORT}/api/ai/chat`);
});
