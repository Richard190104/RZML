const supabaseUrl = 'https://zpikwrtdtjglxbhbaecy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwaWt3cnRkdGpnbHhiaGJhZWN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MDQxODUsImV4cCI6MjA1MDE4MDE4NX0.MzFoRqOn_393c3yMM3D269vAgBKaMx5ZHurD-ggfLws';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Príklad: Získať dáta z tabuľky 'users'
async function fetchImages() {
    console.log('ahoj')
  const { data, error } = await supabase
    .from('images')
    .select('*');
  console.log(data)
  if (error) {
    console.error('Chyba:', error);
  } else {
    console.log('Dáta:', data);
  }
}

fetchImages();
