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
    const buttons = document.querySelectorAll('.game-btn, .service-card, .package, .service-tier');
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

// Dynamic loading messages for services
function setupDynamicMessages() {
    const loadingElement = document.querySelector('.loading-dots');
    if (!loadingElement) return;
    
    const loadingMessages = [
        "OPTIMIZING CODE",
        "LOADING ASSETS",
        "COMPILING SOLUTIONS",
        "INITIALIZING SERVICES",
        "DEPLOYING AWESOME",
        "BUILDING FEATURES",
        "CRAFTING QUALITY"
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
    
    const baseWidth = 85; // 85% for services
    
    setInterval(() => {
        const randomVariation = Math.random() * 4 - 2; // ±2%
        const newWidth = Math.max(Math.min(baseWidth + randomVariation, 92), 80);
        progressBar.style.width = newWidth + '%';
    }, 3000);
}

// Service-specific animations
function initializeServiceFeatures() {
    // Animate service tiers on load
    const serviceTiers = document.querySelectorAll('.service-tier');
    serviceTiers.forEach((tier, index) => {
        setTimeout(() => {
            tier.style.animation = 'bounce 0.5s ease';
            tier.style.transform = 'scale(1.1)';
            setTimeout(() => {
                tier.style.transform = 'scale(1)';
                tier.style.animation = '';
            }, 500);
        }, index * 150);
    });
    
    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#4ECDC4';
            this.style.boxShadow = '0 10px 25px rgba(78, 205, 196, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#FF6B6B';
            this.style.boxShadow = '';
        });
    });
    
    // Animate service packages
    const packages = document.querySelectorAll('.package');
    packages.forEach((pkg, index) => {
        setTimeout(() => {
            pkg.style.transform = 'scale(1.05)';
            setTimeout(() => {
                pkg.style.transform = 'scale(1)';
            }, 300);
        }, index * 200 + 1500);
    });
}

// Service availability indicator
function updateServiceAvailability() {
    const serviceCards = document.querySelectorAll('.service-card');
    const availabilityStates = ['AVAILABLE', 'BUSY', 'PLANNING', 'READY'];
    
    setInterval(() => {
        serviceCards.forEach(card => {
            const randomState = availabilityStates[Math.floor(Math.random() * availabilityStates.length)];
            
            // Create availability indicator
            const indicator = document.createElement('div');
            indicator.style.cssText = `
                position: absolute;
                top: 8px;
                left: 8px;
                background: ${randomState === 'AVAILABLE' ? '#4ECDC4' : randomState === 'READY' ? '#FFD700' : '#FF8E53'};
                color: white;
                padding: 2px 6px;
                border-radius: 10px;
                font-size: 0.3rem;
                z-index: 100;
                animation: pulse 0.5s ease;
            `;
            indicator.textContent = randomState;
            card.style.position = 'relative';
            
            // Remove existing indicator
            const existingIndicator = card.querySelector('.availability-indicator');
            if (existingIndicator) {
                existingIndicator.remove();
            }
            
            indicator.className = 'availability-indicator';
            card.appendChild(indicator);
            
            setTimeout(() => {
                indicator.remove();
            }, 4000);
        });
    }, 8000);
}

// Package pricing animation
function animatePackagePricing() {
    const packages = document.querySelectorAll('.package');
    let currentPackage = 0;
    
    setInterval(() => {
        // Reset all packages
        packages.forEach(pkg => {
            pkg.style.transform = 'scale(1)';
            pkg.style.borderWidth = '2px';
        });
        
        // Highlight current package
        if (packages[currentPackage]) {
            packages[currentPackage].style.transform = 'scale(1.08)';
            packages[currentPackage].style.borderWidth = '4px';
            packages[currentPackage].style.borderColor = '#FFD700';
        }
        
        currentPackage = (currentPackage + 1) % packages.length;
    }, 2500);
}

// Service tier rotation
function rotateServiceTiers() {
    const serviceTiers = document.querySelectorAll('.service-tier');
    const tierTypes = ['STARTER', 'PROFESSIONAL', 'PREMIUM', 'ENTERPRISE', 'CUSTOM'];
    const tierColors = ['#4ECDC4', '#FF8E53', '#FFD700', '#FF6B6B', '#9B59B6'];
    
    setInterval(() => {
        serviceTiers.forEach(tier => {
            if (Math.random() > 0.7) {
                const randomIndex = Math.floor(Math.random() * tierTypes.length);
                const newTier = tierTypes[randomIndex];
                const newColor = tierColors[randomIndex];
                
                tier.style.background = newColor;
                tier.style.animation = 'bounce 0.5s ease';
                tier.textContent = newTier;
                
                setTimeout(() => {
                    tier.style.animation = '';
                }, 500);
            }
        });
    }, 6000);
}

// Client request simulation
function simulateClientRequests() {
    const serviceCards = document.querySelectorAll('.service-card');
    const requestTypes = ['Quote Request', 'Consultation', 'Project Inquiry', 'Support'];
    
    setInterval(() => {
        const randomCard = serviceCards[Math.floor(Math.random() * serviceCards.length)];
        const randomRequest = requestTypes[Math.floor(Math.random() * requestTypes.length)];
        
        // Create request notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: absolute;
            bottom: -25px;
            left: 50%;
            transform: translateX(-50%);
            background: #4ECDC4;
            color: white;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.4rem;
            white-space: nowrap;
            z-index: 100;
            animation: slideUp 0.5s ease;
            border: 2px solid #333;
        `;
        notification.textContent = `📧 ${randomRequest}`;
        randomCard.style.position = 'relative';
        randomCard.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3500);
    }, 7000);
}

// Service metrics counter
function updateServiceMetrics() {
    const metrics = {
        clients: { current: 150, increment: () => Math.random() > 0.8 ? 1 : 0 },
        projects: { current: 200, increment: () => Math.random() > 0.9 ? 1 : 0 },
        satisfaction: { current: 98.5, increment: () => Math.random() > 0.95 ? 0.1 : 0 }
    };
    
    setInterval(() => {
        const etaDisplay = document.querySelector('.eta-display');
        if (etaDisplay) {
            // Update metrics
            Object.keys(metrics).forEach(key => {
                metrics[key].current += metrics[key].increment();
            });
            
            // Flash update indicator
            etaDisplay.style.borderColor = '#4ECDC4';
            etaDisplay.style.boxShadow = '0 0 15px rgba(78, 205, 196, 0.3)';
            
            setTimeout(() => {
                etaDisplay.style.borderColor = '#FF6B6B';
                etaDisplay.style.boxShadow = '';
            }, 800);
        }
    }, 12000);
}

// Easter egg: Konami code for services
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Activate cheat mode for services
        document.body.style.animation = 'rainbow 1s infinite';
        
        const title = document.querySelector('.game-title');
        const status = document.querySelector('.status-message');
        
        if (title && status) {
            title.textContent = '🎉 PREMIUM CLIENT MODE! 🎉';
            status.textContent = 'VIP SERVICES UNLOCKED!';
            
            // Make all service tiers "VIP"
            const serviceTiers = document.querySelectorAll('.service-tier');
            serviceTiers.forEach(tier => {
                tier.textContent = 'VIP';
                tier.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                tier.style.animation = 'bounce 0.5s infinite';
            });
            
            // Make all packages golden
            const packages = document.querySelectorAll('.package');
            packages.forEach(pkg => {
                pkg.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                pkg.style.borderColor = '#FFD700';
                pkg.style.animation = 'pulse 1s infinite';
                
                const price = pkg.querySelector('.package-price');
                if (price) {
                    price.textContent = 'FREE*';
                    price.style.color = '#FF6B6B';
                }
            });
            
            setTimeout(() => {
                document.body.style.animation = '';
                title.textContent = 'SERVICIOS LOADING...';
                status.textContent = 'COMPILANDO SOLUCIONES TI';
                
                // Reset service tiers
                const originalTiers = ['PREMIUM', 'ENTERPRISE', 'PROFESSIONAL', 'PREMIUM', 'ENTERPRISE', 'PROFESSIONAL'];
                serviceTiers.forEach((tier, index) => {
                    tier.textContent = originalTiers[index] || 'PROFESSIONAL';
                    tier.style.background = '#4ECDC4';
                    tier.style.animation = '';
                });
                
                // Reset packages
                const originalPrices = ['$999', '$2999', '$9999'];
                packages.forEach((pkg, index) => {
                    pkg.style.animation = '';
                    pkg.style.borderColor = '#333';
                    
                    const price = pkg.querySelector('.package-price');
                    if (price) {
                        price.textContent = originalPrices[index] || '$999';
                        price.style.color = '#FFD700';
                    }
                    
                    // Reset package backgrounds
                    if (pkg.classList.contains('starter')) {
                        pkg.style.background = 'linear-gradient(45deg, #4ECDC4, #45B7A8)';
                    } else if (pkg.classList.contains('professional')) {
                        pkg.style.background = 'linear-gradient(45deg, #FF8E53, #FFA500)';
                    } else if (pkg.classList.contains('enterprise')) {
                        pkg.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                    }
                });
            }, 4000);
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
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        @keyframes slideUp {
            0% {
                transform: translateX(-50%) translateY(20px);
                opacity: 0;
            }
            100% {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}

// Service consultation booking simulation
function simulateConsultations() {
    const consultationTypes = [
        'Web Development Consultation',
        'Mobile App Planning',
        'Cloud Migration Assessment',
        'AI Implementation Review',
        'Security Audit Booking',
        'DevOps Strategy Session'
    ];
    
    setInterval(() => {
        const randomConsultation = consultationTypes[Math.floor(Math.random() * consultationTypes.length)];
        
        // Create consultation notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: rgba(255, 107, 107, 0.95);
            color: white;
            padding: 10px 15px;
            border: 3px solid #333;
            border-radius: 10px;
            font-size: 0.5rem;
            z-index: 1000;
            animation: slideIn 0.5s ease;
            max-width: 200px;
        `;
        notification.innerHTML = `
            <strong>📅 Nueva Consulta</strong><br>
            ${randomConsultation}
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }, 15000);
}

// Add slide-in animation
function addSlideInAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            0% {
                transform: translateX(100%);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    createParticles();
    addSoundEffects();
    setupDynamicMessages();
    animateProgressBar();
    addRainbowEffect();
    addSlideInAnimation();
    
    // Service-specific initializations
    setTimeout(() => {
        initializeServiceFeatures();
        updateServiceAvailability();
        animatePackagePricing();
        rotateServiceTiers();
        simulateClientRequests();
        updateServiceMetrics();
        simulateConsultations();
    }, 1000);
});

// Export functions for potential external use
window.GeekFreakServices = {
    createStars,
    createParticles,
    addSoundEffects,
    setupDynamicMessages,
    animateProgressBar,
    initializeServiceFeatures,
    updateServiceAvailability,
    animatePackagePricing
};