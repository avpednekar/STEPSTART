
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');



const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);




const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

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



