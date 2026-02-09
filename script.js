// ========================================
// CRAZY CHEF - RESTAURANT WEBSITE JAVASCRIPT
// Modern Lebanese Fast Food Website
// ========================================

// Language Data
const translations = {
    en: {
        dir: 'ltr',
    },
    ar: {
        dir: 'rtl',
    }
};

// Current Language State
let currentLang = 'en';

// ========================================
// DOM ELEMENTS
// ========================================
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const langToggle = document.getElementById('langToggle');
const menuTabs = document.querySelectorAll('.menu-tab');
const menuItems = document.querySelectorAll('.menu-item');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.querySelector('.lightbox-close');
const reservationForm = document.getElementById('reservationForm');

// ========================================
// NAVIGATION FUNCTIONS
// ========================================

// Sticky Navigation on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ========================================
// LANGUAGE SWITCHING
// ========================================

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    switchLanguage(currentLang);
});

function switchLanguage(lang) {
    const html = document.documentElement;
    
    // Update direction
    html.setAttribute('dir', translations[lang].dir);
    html.setAttribute('lang', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-en]').forEach(element => {
        const key = lang === 'en' ? 'data-en' : 'data-ar';
        const translation = element.getAttribute(key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update input placeholders
    document.querySelectorAll('[data-placeholder-en]').forEach(element => {
        const key = lang === 'en' ? 'data-placeholder-en' : 'data-placeholder-ar';
        const translation = element.getAttribute(key);
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Update language toggle active state
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });
    
    // Add animation to elements
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 150);
}

// ========================================
// MENU FILTERING
// ========================================

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        menuTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Get category
        const category = tab.getAttribute('data-category');
        
        // Filter menu items
        filterMenu(category);
    });
});

function filterMenu(category) {
    menuItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
            // Add fade-in animation
            item.style.animation = 'fadeIn 0.5s ease';
        } else {
            item.style.display = 'none';
        }
    });
}

// ========================================
// GALLERY LIGHTBOX
// ========================================

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
            lightbox.classList.add('active');
            lightboxImg.src = img.src;
        }
    });
});

// Close lightbox
lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Close lightbox with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
    }
});

// ========================================
// RESERVATION FORM
// ========================================

reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(reservationForm);
    const name = reservationForm.querySelector('input[type="text"]').value;
    const phone = reservationForm.querySelector('input[type="tel"]').value;
    const guests = reservationForm.querySelector('input[type="number"]').value;
    const date = reservationForm.querySelector('input[type="date"]').value;
    const time = reservationForm.querySelector('input[type="time"]').value;
    
    // Create WhatsApp message
    const message = `Hello! I'd like to reserve a table.
    
Name: ${name}
Phone: ${phone}
Guests: ${guests}
Date: ${date}
Time: ${time}

Thank you!`;
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/961XXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    showNotification('Redirecting to WhatsApp...');
    
    // Reset form
    reservationForm.reset();
});

// ========================================
// NOTIFICATION SYSTEM
// ========================================

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-red);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 4px 20px rgba(230, 57, 70, 0.4);
        z-index: 10001;
        animation: slideInRight 0.5s ease;
        font-weight: 600;
    `;
    notification.textContent = message;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Add slide animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

function reveal() {
    const reveals = document.querySelectorAll('.feature-card, .menu-item, .review-card, .gallery-item');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initial setup for reveal elements
document.querySelectorAll('.feature-card, .menu-item, .review-card, .gallery-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', reveal);

// Trigger reveal on load
window.addEventListener('load', reveal);

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// PRELOADER (OPTIONAL)
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// UTILITIES
// ========================================

// Get current time for dynamic greetings (optional enhancement)
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
}

// Check if restaurant is open (optional enhancement)
function isRestaurantOpen() {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 14 && hour < 22; // 2 PM - 10 PM
}

// Update opening status indicator (optional enhancement)
function updateOpenStatus() {
    const isOpen = isRestaurantOpen();
    const statusElement = document.getElementById('openStatus');
    
    if (statusElement) {
        if (isOpen) {
            statusElement.textContent = 'Open Now';
            statusElement.style.color = '#25D366';
        } else {
            statusElement.textContent = 'Closed';
            statusElement.style.color = '#E63946';
        }
    }
}

// ========================================
// INTERACTIVE ENHANCEMENTS
// ========================================

// Add hover effects to menu items
menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================

// Trap focus in mobile menu when open
const focusableElements = 'a[href], button, input, select, textarea';

hamburger.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        const focusable = navMenu.querySelectorAll(focusableElements);
        const firstFocusable = focusable[0];
        const lastFocusable = focusable[focusable.length - 1];
        
        firstFocusable.focus();
        
        navMenu.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        });
    }
});

// ========================================
// FORM VALIDATION
// ========================================

// Add real-time validation to form inputs
const formInputs = document.querySelectorAll('.reservation-form input');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#E63946';
        } else {
            this.style.borderColor = '#25D366';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = '#E63946';
    });
});

// ========================================
// PERFORMANCE OPTIMIZATIONS
// ========================================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(reveal));
window.addEventListener('scroll', debounce(activateNavLink));

// ========================================
// ANALYTICS & TRACKING (PLACEHOLDER)
// ========================================

// Track menu item clicks
menuItems.forEach(item => {
    const orderBtn = item.querySelector('.menu-order-btn');
    if (orderBtn) {
        orderBtn.addEventListener('click', () => {
            const itemName = item.querySelector('h3').textContent;
            console.log(`Menu Item Clicked: ${itemName}`);
            // Add your analytics tracking here
            // Example: gtag('event', 'menu_item_click', { item_name: itemName });
        });
    }
});

// Track reservation attempts
if (reservationForm) {
    reservationForm.addEventListener('submit', () => {
        console.log('Reservation Form Submitted');
        // Add your analytics tracking here
    });
}

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c🍔 Crazy Chef Website Loaded Successfully! 🍔', 'color: #E63946; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped with ❤️ for Lebanese Fast Food Excellence', 'color: #6C6C6C; font-size: 12px;');

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initial reveal
    reveal();
    
    // Set initial active nav link
    activateNavLink();
    
    // Log initialization
    console.log('Website initialized successfully');
});
