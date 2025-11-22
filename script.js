const ham = document.querySelector('.ham');
const navLinks = document.querySelector('.nav-links');

ham.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    ham.classList.toggle('active');
});

const contactForm = document.querySelector('.contact-me form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});
