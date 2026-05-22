const SUPABASE_URL = "https://pxpvodmdfmifdneazjlt.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_73KBxm5xLtqNzSVzF8wLIA_P8MuFuXC";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY,{auth:{autoRefreshToken:false,persistSession:false}});
window.supabaseClient = supabaseClient;