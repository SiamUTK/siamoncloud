import { getSupabaseClient } from "../lib/supabaseClient";

/**
 * Test Supabase connection by fetching current user.
 * Safe, non-destructive operation for connectivity verification.
 *
 * @returns {Promise<{success: boolean, message: string, details: any}>}
 */
export async function testSupabaseConnection() {
  try {
    const client = getSupabaseClient();

    if (!client) {
      return {
        success: false,
        message: "Supabase client not initialized. Check .env configuration.",
        details: null,
      };
    }

    // Non-destructive test: get auth session
    const {
      data: { session },
      error,
    } = await client.auth.getSession();

    if (error) {
      return {
        success: false,
        message: `Supabase connection failed: ${error.message}`,
        details: error,
      };
    }

    return {
      success: true,
      message: "Supabase connection successful!",
      details: {
        authenticated: !!session,
        session: session ? { user: session.user.email } : null,
      },
    };
  } catch (err) {
    return {
      success: false,
      message: `Unexpected error: ${err.message}`,
      details: err,
    };
  }
}
