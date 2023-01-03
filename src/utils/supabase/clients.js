import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gohodcvtqnptzfmmuavt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvaG9kY3Z0cW5wdHpmbW11YXZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk0Njc1MjgsImV4cCI6MTk4NTA0MzUyOH0.n3nG7UOl0jG1iMP-r8FJ__VjA7kNamW-XepxnrOKgN4'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase