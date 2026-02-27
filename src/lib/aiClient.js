/**
 * Frontend API client for AI chat endpoint.
 * This communicates with the secure backend proxy at server/index.js
 * Never calls OpenAI directly from the browser.
 */

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD ? "" : "http://localhost:5000");

/**
 * Send a message to the AI backend endpoint.
 *
 * @param {string} message - User message to send
 * @returns {Promise<{success: boolean, reply?: string, error?: string}>}
 */
export async function sendMessageToAI(message) {
  try {
    if (!message || typeof message !== "string") {
      return {
        success: false,
        error: "Message must be a non-empty string.",
      };
    }

    const response = await fetch(`${API_BASE_URL}/api/ai/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        error: errorData.error || `HTTP ${response.status}`,
      };
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("[AI Client Error]", err);
    return {
      success: false,
      error: err.message || "Failed to communicate with AI server.",
    };
  }
}

/**
 * Health check for AI backend.
 *
 * @returns {Promise<boolean>}
 */
export async function checkAIServerHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    return response.ok;
  } catch {
    return false;
  }
}
