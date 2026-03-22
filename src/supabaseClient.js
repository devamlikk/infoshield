import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eyoucmhuylxlybqjpfrk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5b3VjbWh1eWx4bHlicWpwZnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5OTQzMzAsImV4cCI6MjA4OTU3MDMzMH0.-3JVbW5KMeHlJxoBo51yAYaXK3S0OJJPbf7JW7W3Gsg'

export const supabase = createClient(supabaseUrl, supabaseKey)