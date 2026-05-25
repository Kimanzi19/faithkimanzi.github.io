// Custom Cursor
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    // Slight delay for the ring for a smooth trailing effect
    cursorRing.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 100, fill: "forwards" });
});

// Interactive elements hover effect for cursor
const links = document.querySelectorAll('a, button, .hamburger');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorRing.style.width = '50px';
        cursorRing.style.height = '50px';
        cursorRing.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
    });
    link.addEventListener('mouseleave', () => {
        cursorRing.style.width = '30px';
        cursorRing.style.height = '30px';
        cursorRing.style.backgroundColor = 'transparent';
    });
});

// Mobile Menu Toggle
function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMenu() {
    document.getElementById('hamburger').classList.remove('active');
    document.getElementById('mobile-menu').classList.remove('active');
    document.body.style.overflow = '';
}

// Sticky Navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade-up Animations with Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(element => {
    observer.observe(element);
});

// Initial trigger for hero section elements
setTimeout(() => {
    document.querySelectorAll('#home .fade-up').forEach(element => {
        element.classList.add('visible');
    });
}, 100);

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
