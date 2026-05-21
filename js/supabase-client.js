/**
 * Supabase 数据库客户端配置
 * 所有页面共用此文件，请勿修改代码结构
 */

// ===================== 核心配置（仅修改这里） =====================
// 替换为你自己的 Supabase 项目 URL
const SUPABASE_URL = "https://你的项目唯一ID.supabase.co";
// 替换为你自己的 Supabase anon public 密钥
const SUPABASE_ANON_KEY = "你的匿名访问密钥";
// =================================================================

// 初始化 Supabase 客户端（固定代码，无需修改）
const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

// 导出客户端（兼容所有页面调用）
window.supabaseClient = supabaseClient;