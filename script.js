// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Solution tiles hover animation
    const solutionTiles = document.querySelectorAll('.solution-tile');
    const phoneMockupContainer = document.querySelector('.phone-mockup-container');
    const appVideo = document.querySelector('.app-video');

    solutionTiles.forEach(tile => {
        tile.addEventListener('mouseenter', function() {
            // Remove active class from all tiles
            solutionTiles.forEach(t => t.classList.remove('active'));
            
            // Add active class to current tile
            this.classList.add('active');
            
            // Show phone mockup with animation
            phoneMockupContainer.classList.add('active');
            
            // Play video if available
            if (appVideo) {
                appVideo.play();
            }
        });

        tile.addEventListener('mouseleave', function() {
            // Optional: Hide phone mockup when leaving tile
            // phoneMockupContainer.classList.remove('active');
        });
    });

    // Contact button functionality
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            // Add your contact functionality here
            alert('Contact us at: info@tiffinez.com');
        });
    }

    // App store button functionality
    const appButtons = document.querySelectorAll('.app-button');
    appButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your app store links here
            if (this.classList.contains('google-play')) {
                alert('Redirecting to Google Play Store...');
            } else if (this.classList.contains('app-store')) {
                alert('Redirecting to App Store...');
            }
        });
    });

    // Add scroll effect to header
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for fade-in effect
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Make hero section visible immediately
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
});

// Add loading animation for images
function preloadImages() {
    const images = [
        'hero-food.jpg',
        'phone-mockup.png'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload function
preloadImages();
