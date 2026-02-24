import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseClient = null;

/**
 * Get or create Supabase client singleton.
 * Returns null if environment variables are not configured.
 *
 * @returns {SupabaseClient | null} Authenticated Supabase client or null
 */
export function getSupabaseClient() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn(
      "[Supabase] Missing configuration. " +
        "Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in .env",
    );
    return null;
  }

  if (!supabaseClient) {
    supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

  return supabaseClient;
}

// Export singleton for direct use
export default getSupabaseClient();
