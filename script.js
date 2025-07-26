// 1. Toggle Navigation for Mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu ul');
const navClose = document.querySelector('.nav-close');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('active');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

// 2. Close nav on link click (for small screens)
document.querySelectorAll('.nav-menu ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Initialize Swiper
// Initialize Swiper for Featured Products
const featuredSwiper = new Swiper('.featured-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});


// 4. Learn More Button Function
function learnMore() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

// 5. Sign Up Button Function
function signupTour() {
  alert("Thank you for signing up! We'll contact you soon.");
}

// Tour form action
document.getElementById("tourForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.querySelector("input").value;
  alert(`Thank you for signing up, ${email}!`);
  this.reset();
});