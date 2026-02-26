import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = window.SUPABASE_URL || "SUPABASE_URL";
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || "SUPABASE_ANON_KEY";

const hasValidConfig =
  Boolean(SUPABASE_URL) &&
  Boolean(SUPABASE_ANON_KEY) &&
  SUPABASE_URL !== "SUPABASE_URL" &&
  SUPABASE_ANON_KEY !== "SUPABASE_ANON_KEY";

export const supabase = hasValidConfig
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true },
    })
  : null;

export function getSupabaseClient() {
  return supabase;
}

if (supabase) {
  console.log("[Supabase] Client initialized", {
    url: SUPABASE_URL,
    anonKeyLoaded: true,
  });
} else {
  console.error("[Supabase] Missing or placeholder config", {
    hasUrl: Boolean(SUPABASE_URL) && SUPABASE_URL !== "SUPABASE_URL",
    hasAnonKey:
      Boolean(SUPABASE_ANON_KEY) && SUPABASE_ANON_KEY !== "SUPABASE_ANON_KEY",
  });
}

export { SUPABASE_URL, SUPABASE_ANON_KEY, hasValidConfig };
