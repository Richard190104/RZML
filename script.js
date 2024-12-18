async function fetchImages() {
    try {
        const response = await fetch('https://rzml.onrender.com/api/images');
        const data = await response.json();

        const gallery = document.getElementById('gallery');
        console.log(data)
        data.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.url;
            imgElement.alt = image.alt;
            gallery.appendChild(imgElement);
        });
    } catch (error) {
        console.error('Chyba pri načítaní obrázkov:', error);
    }
}