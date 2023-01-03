import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cmirwtmlsaeuolrlhpds.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtaXJ3dG1sc2FldW9scmxocGRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI3Mzk4NTcsImV4cCI6MTk4ODMxNTg1N30.JBMlGOYmtcUyg5nHFJ_84YeWtmiCfgnwrKI8NR7eCtA'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase