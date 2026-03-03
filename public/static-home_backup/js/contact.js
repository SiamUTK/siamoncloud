/*
create table contact_messages (
  id uuid default gen_random_uuid() primary key,
  name text,
  email text,
  message text,
  created_at timestamp with time zone default now()
);
*/

/*
RLS reminder:
User must enable INSERT policy on table contact_messages.

Example policy:
create policy "Allow public insert"
on contact_messages
for insert
to anon
with check (true);
*/

import { supabase, hasValidConfig } from "./supabaseClient.js";

const form = document.getElementById("contactForm");
const toast = document.getElementById("contactToast");

function showToast(message, type = "success") {
  if (!toast) return;

  const successClasses =
    "border-emerald-400/40 bg-emerald-500/10 text-emerald-200";
  const errorClasses = "border-red-400/40 bg-red-500/10 text-red-200";

  toast.className = `mt-4 rounded-xl border px-4 py-3 text-sm ${
    type === "success" ? successClasses : errorClasses
  }`;
  toast.textContent = message;
  toast.classList.remove("hidden");
}

function hideToast() {
  if (!toast) return;
  toast.classList.add("hidden");
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    hideToast();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const website = String(formData.get("website") || "").trim();
    const payload = { name, email, message };

    if (!name) {
      showToast("Please enter your name.", "error");
      return;
    }

    if (!email || !email.includes("@")) {
      showToast("Please enter a valid email address.", "error");
      return;
    }

    if (!message) {
      showToast("Please enter your message.", "error");
      return;
    }

    if (!hasValidConfig || !supabase) {
      showToast("Supabase is not configured. Please add keys first.", "error");
      return;
    }

    if (website) {
      showToast("Message sent successfully. Thank you!");
      form.reset();
      return;
    }

    const submitButton = form.querySelector("button[type='submit']");
    const originalButtonText = submitButton?.textContent || "Send Message";

    try {
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.classList.add("opacity-70", "cursor-not-allowed");
        submitButton.textContent = "Sending...";
      }

      console.log("[Contact] Submitting payload", payload);

      const { data, error, status, statusText } = await supabase
        .from("contact_messages")
        .insert([payload])
        .select("id")
        .single();

      console.log("[Contact] Supabase response", {
        data,
        error,
        status,
        statusText,
      });

      if (error) {
        throw error;
      }

      showToast("Message sent successfully. Thank you!");
      form.reset();
    } catch (error) {
      console.error("Contact form submission error:", error);

      const rawMessage = String(error?.message || "");
      const errorCode = String(error?.code || "");
      const errorDetails = String(error?.details || "");
      const errorHint = String(error?.hint || "");

      console.error("[Contact] Error diagnostics", {
        message: rawMessage,
        code: errorCode,
        details: errorDetails,
        hint: errorHint,
      });

      if (
        rawMessage.includes("Failed to fetch") ||
        error instanceof TypeError
      ) {
        console.error(
          "Network request failed. Check Supabase project status, anon key, and table RLS policy.",
        );
        showToast(
          "Network request failed. Please check connection and try again.",
          "error",
        );
        return;
      }

      if (
        rawMessage.toLowerCase().includes("cors") ||
        rawMessage.toLowerCase().includes("blocked")
      ) {
        showToast(
          "CORS issue detected. Please verify project URL and allowed origins.",
          "error",
        );
        return;
      }

      if (
        rawMessage.toLowerCase().includes("invalid api key") ||
        rawMessage.toLowerCase().includes("jwt") ||
        rawMessage.toLowerCase().includes("unauthorized")
      ) {
        showToast(
          "Invalid Supabase key. Please verify SUPABASE_ANON_KEY.",
          "error",
        );
        return;
      }

      if (
        errorCode === "42501" ||
        rawMessage.toLowerCase().includes("row-level security") ||
        rawMessage.toLowerCase().includes("permission denied")
      ) {
        showToast(
          "Table permission denied. Please check INSERT RLS policy.",
          "error",
        );
        return;
      }

      showToast(
        rawMessage || "Failed to send message. Please try again.",
        "error",
      );
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.classList.remove("opacity-70", "cursor-not-allowed");
        submitButton.textContent = originalButtonText;
      }
    }
  });
}
