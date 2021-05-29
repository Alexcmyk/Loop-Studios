const mobileButton = document.querySelector('.mobile-nav');
const mobilenav = document.querySelector('#mobile-nav');

mobileButton.addEventListener('click', function () {
  if (mobilenav.classList.contains('open')) {
    mobilenav.classList.remove('open');
    document.body.style.overflow = 'auto';
  } else {
    mobilenav.classList.toggle('open');
    document.body.style.overflow = 'hidden';
  }
});
