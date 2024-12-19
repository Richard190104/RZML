console.log("Script načítaný."); // Na kontrolu, či sa tento kód vykonáva

const supabaseUrl = 'https://zpikwrtdtjglxbhbaecy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwaWt3cnRkdGpnbHhiaGJhZWN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MDQxODUsImV4cCI6MjA1MDE4MDE4NX0.MzFoRqOn_393c3yMM3D269vAgBKaMx5ZHurD-ggfLws';
console.log("Inicializácia Supabase klienta...");
const supabases = supabase.createClient(supabaseUrl, supabaseKey);
console.log("Supabase inicializovaný:", supabases);

// Funkcia na získanie dát
async function fetchImages() {
  console.log("Volám funkciu fetchImages...");
  const { data, error } = await supabases
    .from('images') // Skontrolujte, že 'images' existuje vo vašej databáze
    .select('*');

  if (error) {
    console.error("Chyba pri získavaní dát:", error);
  } else {
    data.forEach(image => {
        
 
    const imgElement = document.createElement("img");

    imgElement.src = image.img_src;

    const gallery = document.getElementById("gallery");

    gallery.appendChild(imgElement);
});
  }
}

fetchImages();
