document.querySelectorAll('#discord-btn, #join-discord, #discord-btn-2').forEach(el => {
  el.addEventListener('click', () => {
    // podmień na swój link zaproszenia
    window.open('https://discord.gg/TWOJ_INVIТE_LINK', '_blank');
  });
});
