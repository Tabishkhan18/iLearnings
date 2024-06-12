const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const offcanvasMenu = document.getElementById('offcanvas-menu');
const mainContent = document.getElementById('main-content');
const plans = document.getElementById('plans');
const courses = document.getElementById('courses');
const faqs = document.getElementById('faqs');
const subs = document.getElementById('subs');
const footer = document.getElementById('footer');


mobileMenuButton.addEventListener('click', () => {
    offcanvasMenu.classList.add('open');
    mainContent.classList.add('content-blur');
    plans.classList.add('content-blur');
    courses.classList.add('content-blur');
    faqs.classList.add('content-blur');
    subs.classList.add('content-blur');
    footer.classList.add('content-blur');
});

closeMenuButton.addEventListener('click', () => {
    offcanvasMenu.classList.remove('open');
    mainContent.classList.remove('content-blur');
    plans.classList.remove('content-blur');
    courses.classList.remove('content-blur');
    faqs.classList.remove('content-blur');
    subs.classList.remove('content-blur');
    footer.classList.remove('content-blur');
});