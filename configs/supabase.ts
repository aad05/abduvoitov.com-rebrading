import type { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = String(process.env.NEXT_PUBLIC_SUPABASE_URL);
const supabaseKey = String(process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY);

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
