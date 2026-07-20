import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fxlcjmkqfqlcwssvwncp.supabase.co";
const supabaseKey = "sb_publishable_7sWYZb9WyZpmOclo4CvUwA_CeK_b2Vz";

export const supabase = createClient(supabaseUrl, supabaseKey);