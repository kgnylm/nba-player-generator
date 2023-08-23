import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cbzcqzzaaagdkbnovafn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiemNxenphYWFnZGtibm92YWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3ODQ0MTQsImV4cCI6MjAwODM2MDQxNH0.Q6ZW1ed44EBm0JDBtkw9zzl9SHDfPfXDWNNBNEq7ChA";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
