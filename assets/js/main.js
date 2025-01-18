const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');

logo.addEventListener('click', () => {
    navbar.classList.toggle('active');
});