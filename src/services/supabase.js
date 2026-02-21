import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lrftesfhfoautelbdvpg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyZnRlc2ZoZm9hdXRlbGJkdnBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2MTI5OTIsImV4cCI6MjA4NTE4ODk5Mn0.Gushz1jKA-Xg-BGR4olCbZB0vF-i4KVLtRgXg4tZLzM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
