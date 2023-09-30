import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cmxxselhjqdrntkmalro.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)
export const supabase = createClient(supabaseUrl, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNteHhzZWxoanFkcm50a21hbHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3ODM5NDgsImV4cCI6MjAxMDM1OTk0OH0.ZJ1AovsgdHd7deye4HCTb1pX8nIcwjg_Sro4Lg3WYmg')