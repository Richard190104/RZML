console.log("Script načítaný."); // Na kontrolu, či sa tento kód vykonáva

const supabaseUrl = 'https://zpikwrtdtjglxbhbaecy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOi...';
console.log("Inicializácia Supabase klienta...", supabase);
const supabase = supabase.createClient(supabaseUrl, supabaseKey);
console.log("Supabase inicializovaný:", supabase);

// Funkcia na získanie dát
async function fetchImages() {
  console.log("Volám funkciu fetchImages...");
  const { data, error } = await supabase
    .from('images') // Skontrolujte, že 'images' existuje vo vašej databáze
    .select('*');

  if (error) {
    console.error("Chyba pri získavaní dát:", error);
  } else {
    console.log("Získané dáta:", data);
  }
}

fetchImages();
