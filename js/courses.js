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

// Gaming sound effects simulation (visual feedback)
function addSoundEffects() {
    const buttons = document.querySelectorAll('.game-btn, .course-card, .path-step');
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

// Dynamic loading messages for courses
function setupDynamicMessages() {
    const loadingElement = document.querySelector('.loading-dots');
    if (!loadingElement) return;
    
    const loadingMessages = [
        "LOADING KNOWLEDGE",
        "COMPILING WISDOM",
        "GENERATING SKILLS",
        "INITIALIZING LEARNING",
        "DEPLOYING EDUCATION",
        "BUFFERING BRILLIANCE",
        "SYNCING SYNAPSES"
    ];
    
    let messageIndex = 0;
    setInterval(() => {
        loadingElement.innerHTML = loadingMessages[messageIndex] + '<span class="dots"></span>';
        messageIndex = (messageIndex + 1) % loadingMessages.length;
    }, 2000);
}

// Animate progress bar
function animateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    if (!progressBar) return;
    
    const baseWidth = 78; // 78% for courses
    
    setInterval(() => {
        const randomVariation = Math.random() * 5 - 2.5; // ±2.5%
        const newWidth = Math.max(Math.min(baseWidth + randomVariation, 85), 75);
        progressBar.style.width = newWidth + '%';
    }, 3000);
}

// Course-specific animations
function initializeCourseFeatures() {
    // Animate course levels on load
    const courseLevels = document.querySelectorAll('.course-level');
    courseLevels.forEach((level, index) => {
        setTimeout(() => {
            level.style.animation = 'levelPulse 1s ease';
            level.style.transform = 'scale(1.1)';
            setTimeout(() => {
                level.style.transform = 'scale(1)';
            }, 500);
        }, index * 200);
    });
    
    // Add hover effects to course cards
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#FFD700';
            this.style.boxShadow = '0 10px 25px rgba(255, 215, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#4ECDC4';
            this.style.boxShadow = '';
        });
    });
    
    // Animate learning path steps
    const pathSteps = document.querySelectorAll('.path-step');
    pathSteps.forEach((step, index) => {
        setTimeout(() => {
            step.style.background = '#FFD700';
            setTimeout(() => {
                step.style.background = '#4ECDC4';
            }, 300);
        }, index * 500 + 2000); // Start after 2 seconds
    });
}

// Learning path progression simulation
function simulateProgressPath() {
    const pathSteps = document.querySelectorAll('.path-step');
    let currentStep = 0;
    
    setInterval(() => {
        // Reset all steps
        pathSteps.forEach(step => {
            step.style.background = '#4ECDC4';
            step.style.transform = 'scale(1)';
        });
        
        // Highlight current step
        if (pathSteps[currentStep]) {
            pathSteps[currentStep].style.background = '#FFD700';
            pathSteps[currentStep].style.transform = 'scale(1.1)';
        }
        
        currentStep = (currentStep + 1) % pathSteps.length;
    }, 2000);
}

// Course difficulty indicator
function updateCourseDifficulty() {
    const difficulties = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'];
    const courseLevels = document.querySelectorAll('.course-level');
    
    courseLevels.forEach(level => {
        const currentText = level.textContent.trim();
        let color = '#FFD700';
        
        switch(currentText) {
            case 'BEGINNER':
                color = '#4ECDC4';
                break;
            case 'INTERMEDIATE':
                color = '#FFD700';
                break;
            case 'ADVANCED':
                color = '#FF8E53';
                break;
            case 'EXPERT':
                color = '#FF6B6B';
                break;
        }
        
        level.style.background = color;
    });
}

// Easter egg: Konami code for courses
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Activate cheat mode for courses
        document.body.style.animation = 'rainbow 1s infinite';
        
        const title = document.querySelector('.game-title');
        const status = document.querySelector('.status-message');
        
        if (title && status) {
            title.textContent = '🎉 MASTER STUDENT MODE! 🎉';
            status.textContent = 'ALL COURSES UNLOCKED!';
            
            // Make all course levels "EXPERT"
            const courseLevels = document.querySelectorAll('.course-level');
            courseLevels.forEach(level => {
                level.textContent = 'EXPERT';
                level.style.background = '#FF6B6B';
                level.style.animation = 'bounce 0.5s infinite';
            });
            
            setTimeout(() => {
                document.body.style.animation = '';
                title.textContent = 'ACADEMY LOADING...';
                status.textContent = 'GENERANDO CONOCIMIENTO';
                
                // Reset course levels
                const levels = ['INTERMEDIATE', 'ADVANCED', 'EXPERT', 'ADVANCED', 'EXPERT', 'INTERMEDIATE'];
                courseLevels.forEach((level, index) => {
                    level.textContent = levels[index] || 'INTERMEDIATE';
                    level.style.animation = 'levelPulse 3s infinite';
                });
                updateCourseDifficulty();
            }, 3000);
        }
    }
});

// Add rainbow animation style
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

// Simulate course enrollment notifications
function simulateEnrollmentNotifications() {
    const courseCards = document.querySelectorAll('.course-card');
    
    setInterval(() => {
        const randomCard = courseCards[Math.floor(Math.random() * courseCards.length)];
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: absolute;
            top: -10px;
            right: -10px;
            background: #FF6B6B;
            color: white;
            padding: 2px 6px;
            border-radius: 10px;
            font-size: 0.4rem;
            z-index: 100;
            animation: bounce 0.5s ease;
        `;
        notification.textContent = '+1';
        randomCard.style.position = 'relative';
        randomCard.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }, 5000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    createParticles();
    addSoundEffects();
    setupDynamicMessages();
    animateProgressBar();
    addRainbowEffect();
    
    // Course-specific initializations
    setTimeout(() => {
        initializeCourseFeatures();
        updateCourseDifficulty();
        simulateProgressPath();
        simulateEnrollmentNotifications();
    }, 1000);
});

// Export functions for potential external use
window.GeekFreakCourses = {
    createStars,
    createParticles,
    addSoundEffects,
    setupDynamicMessages,
    animateProgressBar,
    initializeCourseFeatures
};