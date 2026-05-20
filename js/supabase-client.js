const SUPABASE_URL = 'https://pxpvodmdfmifdneazjlt.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_73KBxm5xLtqNzSVzF8wLIA_P8MuFuXC';

// 确保Supabase加载完成后再初始化
if (window.supabase) {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.error('Supabase CDN加载失败，请检查网络');
}