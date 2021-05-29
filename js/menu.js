const mobileButton = document.querySelector('.mobile-nav');
const mobileButtonImg = document.querySelector('.mobile-nav img');
const mobilenav = document.querySelector('#mobile-nav');

console.dir(mobileButtonImg);

mobileButton.addEventListener('click', function () {
  if (mobilenav.classList.contains('open')) {
    mobilenav.classList.remove('open');
    document.body.style.overflow = 'auto';
    mobileButtonImg.src = './images/icon-hamburger.svg';
  } else {
    mobilenav.classList.toggle('open');
    document.body.style.overflow = 'hidden';
    mobileButtonImg.src = './images/icon-hamburger-closed.svg';
  }
});
