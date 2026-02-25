import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = window.SUPABASE_URL || "SUPABASE_URL";
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || "SUPABASE_ANON_KEY";

let supabase = null;

export function getSupabaseClient() {
  if (
    !SUPABASE_URL ||
    !SUPABASE_ANON_KEY ||
    SUPABASE_URL === "SUPABASE_URL" ||
    SUPABASE_ANON_KEY === "SUPABASE_ANON_KEY"
  ) {
    return null;
  }

  if (!supabase) {
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true },
    });
  }

  return supabase;
}
