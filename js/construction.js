// Create animated stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    
    const numStars = 50;
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = (Math.random() * 3 + 1) + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 8000);
    }, 500);
}

// Change character and messages based on page
function setupPageContent() {
    const path = window.location.pathname;
    const character = document.querySelector('.character');
    const title = document.querySelector('.game-title');
    const status = document.querySelector('.status-message');
    const container = document.querySelector('.construction-container');
    
    if (!character || !title || !status || !container) return;
    
    // Remove existing page classes
    container.classList.remove('page-services', 'page-courses', 'page-projects', 'page-contact');
    
    if (path.includes('servicios') || path.includes('services')) {
        character.textContent = '💻';
        title.textContent = 'SERVICIOS LOADING...';
        status.textContent = 'COMPILANDO SOLUCIONES TI';
        container.classList.add('page-services');
    } else if (path.includes('cursos') || path.includes('courses')) {
        character.textContent = '🎓';
        title.textContent = 'ACADEMY LOADING...';
        status.textContent = 'GENERANDO CONOCIMIENTO';
        container.classList.add('page-courses');
    } else if (path.includes('proyectos') || path.includes('projects')) {
        character.textContent = '🚀';
        title.textContent = 'PORTFOLIO LOADING...';
        status.textContent = 'RENDERIZANDO PROYECTOS';
        container.classList.add('page-projects');
    } else if (path.includes('contacto') || path.includes('contact')) {
        character.textContent = '📱';
        title.textContent = 'CONTACT LOADING...';
        status.textContent = 'ESTABLECIENDO CONEXIÓN';
        container.classList.add('page-contact');
    }
}

// Gaming sound effects simulation (visual feedback)
function addSoundEffects() {
    const buttons = document.querySelectorAll('.game-btn, .preview-card, .contact-card, .service-card, .course-card, .project-card');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.2)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1)';
        });
        
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
}

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Activate cheat mode
        document.body.style.animation = 'rainbow 1s infinite';
        
        const title = document.querySelector('.game-title');
        const status = document.querySelector('.status-message');
        
        if (title && status) {
            const originalTitle = title.textContent;
            const originalStatus = status.textContent;
            
            title.textContent = '🎉 CHEAT CODE ACTIVATED! 🎉';
            status.textContent = 'LEVEL UP BONUS UNLOCKED!';
            
            setTimeout(() => {
                document.body.style.animation = '';
                title.textContent = originalTitle;
                status.textContent = originalStatus;
            }, 3000);
        }
    }
});

// Dynamic loading messages
function setupDynamicMessages() {
    const loadingElement = document.querySelector('.loading-dots');
    if (!loadingElement) return;
    
    const path = window.location.pathname;
    let loadingMessages = [];
    
    if (path.includes('servicios') || path.includes('services')) {
        loadingMessages = [
            "OPTIMIZING CODE",
            "LOADING ASSETS",
            "COMPILING SOLUTIONS",
            "INITIALIZING SERVICES",
            "DEPLOYING AWESOME"
        ];
    } else if (path.includes('cursos') || path.includes('courses')) {
        loadingMessages = [
            "LOADING KNOWLEDGE",
            "COMPILING WISDOM",
            "GENERATING SKILLS",
            "INITIALIZING LEARNING",
            "DEPLOYING EDUCATION"
        ];
    } else if (path.includes('proyectos') || path.includes('projects')) {
        loadingMessages = [
            "COMPILING PROJECTS",
            "LOADING PORTFOLIO",
            "RENDERING AWESOME",
            "DEPLOYING MAGIC",
            "INITIALIZING LEGEND"
        ];
    } else if (path.includes('contacto') || path.includes('contact')) {
        loadingMessages = [
            "CONNECTING SIGNALS",
            "SYNCING CHANNELS",
            "LOADING CONTACTS",
            "ESTABLISHING LINK",
            "ACTIVATING COMMS"
        ];
    } else {
        loadingMessages = [
            "LOADING",
            "PROCESSING",
            "INITIALIZING",
            "COMPILING",
            "DEPLOYING"
        ];
    }
    
    let messageIndex = 0;
    setInterval(() => {
        loadingElement.innerHTML = loadingMessages[messageIndex] + '<span class="dots"></span>';
        messageIndex = (messageIndex + 1) % loadingMessages.length;
    }, 2000);
}

// Update progress bar dynamically
function animateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    if (!progressBar) return;
    
    const baseWidth = parseInt(progressBar.style.width) || 75;
    
    setInterval(() => {
        const randomVariation = Math.random() * 10 - 5; // ±5%
        const newWidth = Math.max(Math.min(baseWidth + randomVariation, 99), baseWidth - 5);
        progressBar.style.width = newWidth + '%';
    }, 3000);
}

// Simulate communication channels activity (for contact page)
function animateChannels() {
    const channels = document.querySelectorAll('.channel');
    if (channels.length === 0) return;
    
    setInterval(() => {
        const randomChannel = channels[Math.floor(Math.random() * channels.length)];
        const originalBg = getComputedStyle(randomChannel).backgroundColor;
        randomChannel.style.background = '#4ECDC4';
        
        setTimeout(() => {
            randomChannel.style.background = '';
        }, 500);
    }, 3000);
}

// Rainbow effect for easter egg
function addRainbowEffect() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    createParticles();
    setupPageContent();
    addSoundEffects();
    setupDynamicMessages();
    animateProgressBar();
    animateChannels();
    addRainbowEffect();
});

// Additional functionality for specific pages
function initializePageSpecificFeatures() {
    const path = window.location.pathname;
    
    // Services page specific features
    if (path.includes('servicios') || path.includes('services')) {
        // Add service card hover effects
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.borderColor = '#4ECDC4';
                this.style.boxShadow = '0 5px 15px rgba(78, 205, 196, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.borderColor = '#FF6B6B';
                this.style.boxShadow = '';
            });
        });
    }
    
    // Courses page specific features
    if (path.includes('cursos') || path.includes('courses')) {
        // Animate course progress indicators
        const courseLevels = document.querySelectorAll('.course-level');
        courseLevels.forEach((level, index) => {
            setTimeout(() => {
                level.style.animation = 'pulse 1s ease';
            }, index * 200);
        });
    }
    
    // Projects page specific features
    if (path.includes('proyectos') || path.includes('projects')) {
        // Animate project achievements
        const achievements = document.querySelectorAll('.achievement');
        achievements.forEach((achievement, index) => {
            setTimeout(() => {
                achievement.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    achievement.style.transform = 'scale(1)';
                }, 200);
            }, index * 100);
        });
    }
    
    // Contact page specific features
    if (path.includes('contacto') || path.includes('contact')) {
        // Add pulse effect to contact actions
        const contactActions = document.querySelectorAll('.contact-action');
        contactActions.forEach(action => {
            setInterval(() => {
                action.style.animation = 'pulse 0.5s ease';
                setTimeout(() => {
                    action.style.animation = '';
                }, 500);
            }, 5000 + Math.random() * 3000);
        });
    }
}

// Initialize page-specific features after DOM load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializePageSpecificFeatures, 1000);
});

// Export functions for potential external use
window.GeekFreakConstruction = {
    createStars,
    createParticles,
    setupPageContent,
    addSoundEffects,
    setupDynamicMessages,
    animateProgressBar
};