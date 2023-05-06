const menuBtn = document.querySelector('.menu-btn');
const menuContent = document.querySelector('.menu-content');

menuBtn.addEventListener('click', function() {
  menuContent.classList.toggle('show');
});
