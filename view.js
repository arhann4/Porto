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

    // GitHub Stats dengan Personal Access Token
    async function fetchGitHubStats() {
        const username = 'arhann4';
        const token = 'ghp_YourPersonalAccessTokenHere'; // Ganti dengan token Anda
        
        try {
            const headers = {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            };

            // Fetch user data
            const userResponse = await fetch(`https://api.github.com/users/${username}`, { headers });
            const userData = await userResponse.json();

            // Fetch repositories
            const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`, { headers });
            const reposData = await reposResponse.json();

            // Update UI
            if (userData.message === "Not Found") {
                console.error('GitHub user not found');
                initDemoStats();
                return;
            }

            // Debug logs
            console.log('User Data:', userData);
            console.log('Repos Data:', reposData);

            // Update stats
            document.getElementById('repoCount').textContent = userData.public_repos;
            document.getElementById('starsCount').textContent = userData.followers;
            document.getElementById('forksCount').textContent = userData.following;

            // Contribution chart data
            const monthlyData = [30, 45, 25, 60, 35, 40]; // Contoh data, akan diupdate dengan data real
            updateContributionChart({
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                data: monthlyData
            });

        } catch (error) {
            console.error('Error fetching GitHub data:', error);
            initDemoStats();
        }
    }

    // Proses data kontribusi
    function processContributionData(events) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        const contributions = new Array(6).fill(0);
        
        events.forEach(event => {
            if (event.type === 'PushEvent' || event.type === 'PullRequestEvent') {
                const date = new Date(event.created_at);
                const monthIndex = date.getMonth();
                if (monthIndex >= 0 && monthIndex < 6) {
                    contributions[monthIndex]++;
                }
            }
        });
        
        return {
            labels: months,
            data: contributions
        };
    }

    // Update chart dengan data real
    function updateContributionChart(data) {
        const ctx = document.getElementById('contributionChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Contributions',
                    data: data.data,
                    backgroundColor: '#4d7eff',
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255,255,255,0.1)'
                        },
                        ticks: {
                            color: 'rgba(255,255,255,0.7)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: 'rgba(255,255,255,0.7)'
                        }
                    }
                }
            }
        });
    }

    // Fallback data demo jika API gagal
    function initDemoStats() {
        document.getElementById('repoCount').textContent = '15';
        document.getElementById('starsCount').textContent = '45';
        document.getElementById('forksCount').textContent = '23';
        
        updateContributionChart({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            data: [20, 35, 45, 30, 50, 40]
        });
    }

    // Skills Radar Chart
    function initSkillsChart() {
        const ctx = document.getElementById('skillsRadarChart').getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Frontend', 'Backend', 'Mobile Dev', 'UI/UX', 'DevOps', 'Security'],
                datasets: [{
                    label: 'Skills Level',
                    data: [90, 85, 75, 80, 70, 85],
                    backgroundColor: 'rgba(77,126,255,0.2)',
                    borderColor: '#4d7eff',
                    pointBackgroundColor: '#4d7eff',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#4d7eff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(255,255,255,0.1)'
                        },
                        grid: {
                            color: 'rgba(255,255,255,0.1)'
                        },
                        pointLabels: {
                            color: 'rgba(255,255,255,0.7)',
                            font: {
                                size: 12
                            }
                        },
                        ticks: {
                            backdropColor: 'transparent',
                            color: 'rgba(255,255,255,0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    // Weather Widget dengan data statis
    function initWeather() {
        document.getElementById('weather-temp').textContent = '28°C';
        document.getElementById('weather-desc').textContent = 'Cerah Berawan';
        document.getElementById('weather-icon').innerHTML = '<i class="fas fa-cloud-sun" style="font-size: 2.5rem; color: #4d7eff;"></i>';
    }

    // Inisialisasi semua charts dan fitur
    document.addEventListener('DOMContentLoaded', () => {
        // Check if Chart.js is loaded
        if (typeof Chart === 'undefined') {
            console.error('Chart.js not loaded!');
            return;
        }

        // Initialize coding chart
        const ctx = document.getElementById('codingChart');
        if (!ctx) {
            console.error('Canvas element not found!');
            return;
        }

        const thisWeek = [6.5, 7.2, 8.5, 6.8, 7.5, 5.5, 4.8];
        const lastWeek = [5.8, 6.5, 7.8, 6.2, 7.0, 4.8, 4.2];

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [
                    {
                        label: 'This Week',
                        data: thisWeek,
                        backgroundColor: '#4d7eff',
                        borderRadius: 8,
                        barThickness: 12
                    },
                    {
                        label: 'Last Week',
                        data: lastWeek,
                        backgroundColor: 'rgba(77,126,255,0.3)',
                        borderRadius: 8,
                        barThickness: 12
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        padding: 12,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}h`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255,255,255,0.1)',
                            drawBorder: false
                        },
                        ticks: {
                            color: 'rgba(255,255,255,0.7)',
                            padding: 10,
                            callback: function(value) {
                                return value + 'h';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            color: 'rgba(255,255,255,0.7)',
                            padding: 5
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                animation: {
                    duration: 1000,
                    easing: 'easeInOutQuart'
                }
            }
        });

        // Animate stats numbers
        function animateValue(element, start, end, duration) {
            let current = start;
            const range = end - start;
            const increment = range / (duration / 16);
            const timer = setInterval(() => {
                current += increment;
                if (current >= end) {
                    clearInterval(timer);
                    current = end;
                }
                element.textContent = current.toFixed(1);
            }, 16);
        }

        // Initialize stats animations
        animateValue(document.getElementById('hoursValue'), 0, 42.5, 1500);
        animateValue(document.getElementById('streakValue'), 0, 15, 1500);
        animateValue(document.getElementById('commitsValue'), 0, 127, 1500);

        // Inisialisasi fitur lainnya yang sudah ada
        initSkillsChart();
        initWeather();
        fetchGitHubStats();
    });

    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;

    // Data untuk grafik
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Project Progress',
                data: [65, 78, 90, 85, 92, 88, 95, 91, 85, 88, 92, 96],
                borderColor: '#4d7eff',
                backgroundColor: function(context) {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;
                    if (!chartArea) return null;
                    
                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(0, 'rgba(77,126,255,0)');
                    gradient.addColorStop(1, 'rgba(77,126,255,0.3)');
                    return gradient;
                },
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#4d7eff',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }
        ]
    };

    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return `Progress: ${context.raw}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(255,255,255,0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: 'rgba(255,255,255,0.7)',
                        padding: 10,
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        color: 'rgba(255,255,255,0.7)',
                        padding: 5
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        }
    });

    // Period button click handlers
    const periodBtns = document.querySelectorAll('.period-btn');
    periodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            periodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Animasi untuk Project Cards
    const projectCards = document.querySelectorAll('.project-card');
    
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        projectObserver.observe(card);
    });

    // Hover effect untuk project links
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'translateY(0)';
        });
    });

    // Animasi untuk tech items
    const techItems = document.querySelectorAll('.tech-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });

    techItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
        
        // Tambahkan efek hover yang lebih interaktif
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Cek apakah elemen ada sebelum menambahkan event listener
    const themeSwitch = document.querySelector('.theme-switch');
    if (themeSwitch) {
        themeSwitch.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Cek elemen lain yang mungkin menyebabkan error
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Inisialisasi particles.js jika ada
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            // konfigurasi particles
        });
    }

    // Inisialisasi typed.js jika ada
    const typedElement = document.querySelector('.typed-text');
    if (typedElement && typeof Typed !== 'undefined') {
        new Typed('.typed-text', {
            // konfigurasi typed
        });
    }

    // Inisialisasi chart.js jika ada
    const chartElement = document.getElementById('skillChart');
    if (chartElement && typeof Chart !== 'undefined') {
        new Chart(chartElement, {
            // konfigurasi chart
        });
    }
});
