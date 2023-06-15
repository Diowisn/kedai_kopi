// // // Toggle class active

// const navbarNav = document.querySelector ('.navbar-nav');

// // // ketika hamburger menu di klik
// document.querySelector('#hamburger-menu').onclick = () => {
//    navbarNav.classList.toggle('active');

// };

// // //klik diluar sidebar untuk menghilangkan nav
// const hamburger = document.querySelector('#hamburger-menu');

// document.addEventListener('click', function(e) {
//     if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
//         navbarNav.remove('active');
//     }
// });

const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

// // Toggle class active pada elemen navbar-nav
const toggleNavbar = () => {
  navbarNav.classList.toggle('active');
};

// // Handler saat hamburger menu di klik
const handleHamburgerClick = () => {
  toggleNavbar();
};

// // Handler saat klik dilakukan di luar sidebar
const handleOutsideClick = (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
};

// // Menambahkan event listener ke tombol hamburger menu
hamburger.addEventListener('click', handleHamburgerClick);

// // Menambahkan event listener ke seluruh dokumen untuk mendeteksi klik di luar sidebar
document.addEventListener('click', handleOutsideClick);
