import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distPath = path.join(projectRoot, "dist");

const openai =
  OPENAI_API_KEY && !OPENAI_API_KEY.includes("your-openai")
    ? new OpenAI({ apiKey: OPENAI_API_KEY })
    : null;

if (!openai) {
  console.warn(
    "[Server] OPENAI_API_KEY is not configured. AI endpoint will return 503 until key is set.",
  );
}

// Middleware
app.use(cors());
app.use(express.json());

if (fs.existsSync(distPath)) {
  app.use(
    express.static(distPath, {
      index: false,
      maxAge: "1h",
    }),
  );
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running",
    frontendBuilt: fs.existsSync(distPath),
    aiConfigured: Boolean(openai),
  });
});

// AI Chat endpoint
app.post("/api/ai/chat", async (req, res) => {
  try {
    if (!openai) {
      return res.status(503).json({
        success: false,
        error:
          "AI service unavailable. OPENAI_API_KEY is not configured on the server.",
      });
    }

    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        success: false,
        error:
          "Invalid request. 'message' field is required and must be a string.",
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
      response.choices[0]?.message?.content || "No response from AI model.";

    console.log("[AI] Response generated successfully");

    res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error("[AI Error]", error.message);

    const statusCode = error.status || 500;
    const errorMessage = error.message || "Internal server error";

    res.status(statusCode).json({
      success: false,
      error: errorMessage,
    });
  }
});

app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found",
  });
});

app.get("*", (req, res) => {
  const indexFile = path.join(distPath, "index.html");

  if (fs.existsSync(indexFile)) {
    return res.sendFile(indexFile);
  }

  return res
    .status(503)
    .send(
      "Frontend build not found. Run `npm run build` in the project root before starting the Node app.",
    );
});

// Start server
app.listen(PORT, () => {
  console.log(`[Server] Running on http://localhost:${PORT}`);
  console.log(`[Server] Static frontend path: ${distPath}`);
  console.log(
    `[Server] AI chat endpoint: POST http://localhost:${PORT}/api/ai/chat`,
  );
});
