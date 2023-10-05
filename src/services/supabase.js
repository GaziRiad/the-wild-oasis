import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ujqgxkulrurehiurhjrd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqcWd4a3VscnVyZWhpdXJoanJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNDk0MjgsImV4cCI6MjAxMTgyNTQyOH0.Hifvp9ykNjSIZ5ZnMrXoi0o_btX7Uozt4iNPIJ1qcHs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
