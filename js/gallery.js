// Pobieramy listę plików z images/images.json
fetch('images/images.json')
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then(list => {
    const container = document.getElementById('gallery-container');
    list.forEach((fname, i) => {
      const img = document.createElement('img');
      img.src = `images/${fname}`;
      img.alt = `Obraz ${i + 1}`;
      // opóźnienie animacji kolejnych zdjęć
      img.style.animationDelay = `${i * 0.1}s`;
      container.appendChild(img);
    });
  })
  .catch(err => console.error('Nie udało się załadować galerii:', err));