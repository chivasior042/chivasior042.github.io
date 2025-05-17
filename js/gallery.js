// Pobieramy listę plików z images/images.json
fetch('images/images.json')
  .then(res => res.json())
  .then(list => {
    const container = document.getElementById('gallery-container');
    list.forEach((fname, i) => {
      const img = document.createElement('img');
      img.src = `images/${fname}`;
      // opóźnienie animacji kolejnych zdjęć
      img.style.animationDelay = `${i * 0.1}s`;
      container.appendChild(img);
    });
  })
  .catch(err => console.error('Nie udało się załadować galerii:', err));
