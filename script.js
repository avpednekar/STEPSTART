
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');



const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);




const themeBtn = document.querySelectorAll('.theme-btn');

function setTheme(theme) {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(theme);
  for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].classList.remove('light', 'dark');
    themeBtn[i].classList.add(theme === 'light-theme' ? 'light' : 'dark');
  }
}

function toggleTheme() {
  const currentTheme = document.body.classList.contains('dark-theme')
    ? 'dark-theme'
    : 'light-theme';

  const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
  setTheme(newTheme);

  localStorage.setItem('themePreference', newTheme);
}

const storedTheme = localStorage.getItem('themePreference');
if (storedTheme) {
  setTheme(storedTheme);
}

for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener('click', toggleTheme);
}





const blogCards = document.querySelectorAll('.blog-card');


function showAllPosts() {
  blogCards.forEach(card => {
    card.style.display = 'block'; 
  });
}


function showMathPosts() {
  blogCards.forEach(card => {
    const topic = card.dataset.topic;
    if (topic === 'Mathematics') {
      card.style.display = 'block'; 
    } else {
      card.style.display = 'none'; 
    }
  });
}


function showComputerSciencePosts() {
  blogCards.forEach(card => {
    const topic = card.dataset.topic;
    if (topic === 'Computer Science') {
      card.style.display = 'block';
    } else {
      card.style.display = 'none'; 
    }
  });
}





