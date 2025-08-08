// Generate Navigation HTML
function generateNavigation() {
    const navigationElement = document.querySelector('navigation');
    if (!navigationElement) {
        console.error('Navigation element not found');
        return;
    }
    
    console.log('Generating navigation...');
    
    const navigationHTML = `
        <header class="hamb-header">
            <div class="hamb-header-container">
                <div class="hamb-header-left">
                    <button class="hamb-hamburger" id="hamburger">☰</button>
                </div>
                <div class="hamb-header-center">
                    <a href="index.html" class="hamb-logo">Anton Kupin</a>
                </div>
            </div>
        </header>
        <nav class="hamb-nav-drawer" id="navDrawer">
            <button class="hamb-close-btn" id="closeBtn"></button>
            <ul class="hamb-nav-list" id="navList">
                <li><a href="index.html#home" class="scroll-link">Home</a></li>
                <li><a href="index.html#portfolio" class="scroll-link">Portfolio</a></li>
                <li><a href="index.html#about" class="scroll-link">About</a></li>
                <li><a href="index.html#contact" class="scroll-link">Contact</a></li>
            </ul>
            <div class="hamb-nav-footer"></div>
        </nav>
        <div class="hamb-overlay" id="overlay"></div>
    `;
    
    navigationElement.innerHTML = navigationHTML;
    console.log('Navigation generated successfully');
}

// Initialize navigation on DOM load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing all components...');
    generateNavigation();
    initializeNavigation();
    initializePortfolioFiltering();
    initializeSmoothScrolling();
    initializeNavbarScroll();
    initializeAnimations();
    initializeContactForm();
    initializePortfolioHover();
    initializeLazyLoading();
    initializeKeyboardNavigation();
    initializeTouchSupport();
    addLoadingAnimation();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navDrawer = document.getElementById('navDrawer');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');
    
    if (!hamburger || !navDrawer || !overlay || !closeBtn) return;
    
    hamburger.addEventListener('click', () => {
        navDrawer.classList.add('active');
        overlay.classList.add('active');
    });
    
    overlay.addEventListener('click', () => {
        navDrawer.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    closeBtn.addEventListener('click', () => {
        navDrawer.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Setup smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('.scroll-link');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Check if it's an external link (contains index.html)
            if (href.includes('index.html')) {
                // Close hamburger menu if open
                navDrawer.classList.remove('active');
                overlay.classList.remove('active');
                
                // Navigate to the external page
                window.location.href = href;
            } else {
                // Handle internal scrolling
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    // Close hamburger menu if open
                    navDrawer.classList.remove('active');
                    overlay.classList.remove('active');
                    
                    // Smooth scroll to target section
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Portfolio Filtering
function initializePortfolioFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Smooth Scrolling for Navigation Links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar Background Change on Scroll
function initializeNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.8)';
                navbar.style.boxShadow = 'none';
                navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
            }
        }
    });
}

// Intersection Observer for Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.portfolio-item, .stat-item, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// Contact Form Handling
function initializeContactForm() {
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
        
        // Create mailto link
        const mailtoLink = `mailto:akupin.contact@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Show success message and reset form
        showNotification('Opening your email client...', 'success');
        this.reset();
    });
    }
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#34c759' : type === 'error' ? '#ff3b30' : '#007aff'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Portfolio item hover effects
function initializePortfolioHover() {
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Add loading animation to portfolio items
function addLoadingAnimation() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Add keyboard navigation support
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close hamburger drawer if open
            const navDrawer = document.getElementById('navDrawer');
            const overlay = document.getElementById('overlay');
            if (navDrawer && navDrawer.classList.contains('active')) {
                navDrawer.classList.remove('active');
                overlay.classList.remove('active');
            }
            
            // Close any open notifications
            const notifications = document.querySelectorAll('.notification');
            notifications.forEach(notification => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            });
        }
    });
}

// Add touch support for mobile devices
let touchStartY = 0;
let touchEndY = 0;

function initializeTouchSupport() {
    document.addEventListener('touchstart', e => {
        touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener('touchend', e => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could be used for navigation
            console.log('Swipe up detected');
        } else {
            // Swipe down - could be used for navigation
            console.log('Swipe down detected');
        }
    }
}