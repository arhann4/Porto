// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animasi muncul saat scroll
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal-fade, .reveal-slide-right, .reveal-slide-left, .reveal-slide-up');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Reveal Animation on Scroll
reveal(); // Initial check

// Form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ambil nilai input
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validasi sederhana
        if (!name || !email || !message) {
            alert('Mohon isi semua field');
            return;
        }
        
        // Simulasi pengiriman form
        alert('Pesan telah terkirim!');
        contactForm.reset();
    });
}

// Lazy loading untuk gambar
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        });
    }, imageOptions);
    
    images.forEach(img => imageObserver.observe(img));
});

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Check saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Typewriter Effect
const typewriter = document.querySelector('.typewriter');
if (typewriter) {
    const text = typewriter.textContent;
    typewriter.textContent = '';

    let i = 0;
    function type() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }

    // Start typewriter effect after a delay
    setTimeout(type, 1000);
}

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// Notification Badge
const notifications = document.querySelector('.notifications');
notifications.addEventListener('click', () => {
    const badge = notifications.querySelector('.notification-badge');
    if (badge) {
        badge.style.display = 'none';
    }
});

// Project Card Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Progress Bar Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.progress').forEach(bar => {
    observer.observe(bar);
});

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Navigation Highlight
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links li').forEach(li => {
        li.classList.remove('active');
        if (li.querySelector('a').getAttribute('href') === `#${current}`) {
            li.classList.add('active');
        }
    });
});

// Add parallax effect to gradient sphere
const sphere = document.querySelector('.gradient-sphere');
if (sphere) {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        sphere.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
    });
}

// Form submission animation
const form = document.querySelector('.contact-form');
const submitBtn = form.querySelector('.submit-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Terkirim!';
        form.reset();
        
        setTimeout(() => {
            submitBtn.innerHTML = '<span>Kirim</span><i class="fas fa-paper-plane"></i>';
        }, 2000);
    }, 1500);
});

// Parallax effect for achievement cards
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.achievement-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});

// Reset card rotation when mouse leaves
document.querySelectorAll('.achievement-card').forEach(card => {
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Tunggu sampai DOM sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Utility function untuk safely query elements
    const safeQuerySelector = (selector) => {
        const element = document.querySelector(selector);
        return element || null;
    };

    const safeQuerySelectorAll = (selector) => {
        const elements = document.querySelectorAll(selector);
        return elements.length ? elements : [];
    };

    // Reveal Animation on Scroll
    const handleReveal = () => {
        const reveals = safeQuerySelectorAll('.reveal-fade, .reveal-slide-right, .reveal-slide-left, .reveal-slide-up');
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Add scroll event listener if we have elements to reveal
    if (safeQuerySelectorAll('.reveal-fade, .reveal-slide-right, .reveal-slide-left, .reveal-slide-up').length > 0) {
        window.addEventListener('scroll', handleReveal);
        handleReveal(); // Initial check
    }

    // Typewriter Effect
    const typewriter = safeQuerySelector('.typewriter');
    if (typewriter) {
        const text = typewriter.textContent;
        typewriter.textContent = '';

        const typeText = () => {
            let i = 0;
            const type = () => {
                if (i < text.length) {
                    typewriter.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, 100);
                }
            };
            setTimeout(type, 1000);
        };

        typeText();
    }

    // Card hover effects
    const cards = safeQuerySelectorAll('.achievement-card');
    if (cards.length > 0 && window.matchMedia('(hover: hover)').matches) {
        const handleMouseMove = (e) => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }
            });
        };

        const handleMouseLeave = (card) => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        };

        document.addEventListener('mousemove', handleMouseMove);
        cards.forEach(card => {
            card.addEventListener('mouseleave', () => handleMouseLeave(card));
        });
    }

    // Timeline animation
    const timelineItems = safeQuerySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.2
        });

        timelineItems.forEach(item => observer.observe(item));
    }

    // Form handling (jika ada)
    const form = safeQuerySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Terkirim!';
                    form.reset();
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = '<span>Kirim</span><i class="fas fa-paper-plane"></i>';
                    }, 2000);
                }, 1500);
            }
        });
    }

    // Smooth scroll
    const smoothScrollLinks = safeQuerySelectorAll('a[href^="#"]');
    if (smoothScrollLinks.length > 0) {
        smoothScrollLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = safeQuerySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
});
