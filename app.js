function toggleMenu() {
  const menuToggle = document.querySelector('.toggle');
  const navigation = document.querySelector('.navigation');
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
  });
}

function videoToggle() {
  const trailer = document.querySelector('.trailer');
  const playButton = document.querySelector('.play');
  playButton.addEventListener('click', () => {
    trailer.classList.toggle('active');
  });
  trailer.addEventListener('click', () => {
    trailer.classList.toggle('active');
  });
}

toggleMenu();
videoToggle();
