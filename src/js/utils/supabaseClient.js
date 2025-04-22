import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pfemrlvzxxwqlrdlekiu.supabase.co.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZW1ybHZ6eHh3cWxyZGxla2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMTY2MjUsImV4cCI6MjA1OTc5MjYyNX0.4Ke4aPvtbP0j7ItQ35yzgCfA1bY8Z7wZkJSnXQyWftA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
