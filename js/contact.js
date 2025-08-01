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
    const buttons = document.querySelectorAll('.game-btn, .contact-card, .contact-action, .channel');
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

// Dynamic loading messages for contact
function setupDynamicMessages() {
    const loadingElement = document.querySelector('.loading-dots');
    if (!loadingElement) return;
    
    const loadingMessages = [
        "CONNECTING SIGNALS",
        "SYNCING CHANNELS",
        "LOADING CONTACTS",
        "ESTABLISHING LINK",
        "ACTIVATING COMMS",
        "BUFFERING MESSAGES",
        "INITIALIZING CHAT"
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
    
    const baseWidth = 95; // 95% for contact (almost complete)
    
    setInterval(() => {
        const randomVariation = Math.random() * 3 - 1.5; // ±1.5%
        const newWidth = Math.max(Math.min(baseWidth + randomVariation, 99), 92);
        progressBar.style.width = newWidth + '%';
    }, 3000);
}

// Simulate communication channels activity
function animateChannels() {
    const channels = document.querySelectorAll('.channel');
    if (channels.length === 0) return;
    
    setInterval(() => {
        const randomChannel = channels[Math.floor(Math.random() * channels.length)];
        const originalBg = getComputedStyle(randomChannel).backgroundColor;
        randomChannel.style.background = '#4ECDC4';
        randomChannel.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            randomChannel.style.background = '#FF8E53';
            randomChannel.style.transform = 'scale(1)';
        }, 500);
    }, 3000);
}

// Contact-specific animations
function initializeContactFeatures() {
    // Add pulse effect to contact actions
    const contactActions = document.querySelectorAll('.contact-action');
    contactActions.forEach((action, index) => {
        setTimeout(() => {
            action.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                action.style.animation = '';
            }, 500);
        }, index * 300);
    });
    
    // Add hover effects to contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#4ECDC4';
            this.style.boxShadow = '0 10px 25px rgba(78, 205, 196, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#FF8E53';
            this.style.boxShadow = '';
        });
    });
    
    // Simulate incoming messages
    setTimeout(() => {
        simulateIncomingNotifications();
    }, 3000);
}

// Simulate incoming message notifications
function simulateIncomingNotifications() {
    const contactCards = document.querySelectorAll('.contact-card');
    
    setInterval(() => {
        const randomCard = contactCards[Math.floor(Math.random() * contactCards.length)];
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: absolute;
            top: -8px;
            right: -8px;
            background: #FF4444;
            color: white;
            border: 2px solid #333;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.4rem;
            z-index: 100;
            animation: bounce 0.5s ease;
        `;
        notification.textContent = '1';
        randomCard.style.position = 'relative';
        randomCard.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }, 8000);
}

// Response time animation
function animateResponseTime() {
    const responseTimeElement = document.querySelector('.response-time');
    if (!responseTimeElement) return;
    
    setInterval(() => {
        responseTimeElement.style.borderColor = '#FFD700';
        responseTimeElement.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.3)';
        
        setTimeout(() => {
            responseTimeElement.style.borderColor = '#4ECDC4';
            responseTimeElement.style.boxShadow = '';
        }, 1000);
    }, 5000);
}

// Contact method availability indicator
function updateContactAvailability() {
    const currentHour = new Date().getHours();
    const phoneCard = document.querySelector('.contact-card:nth-child(3)'); // Phone card
    
    if (phoneCard) {
        const phoneInfo = phoneCard.querySelector('.contact-info');
        if (currentHour >= 9 && currentHour < 18) {
            phoneInfo.style.color = '#4ECDC4';
            phoneInfo.innerHTML = 'DISPONIBLE AHORA 🟢';
        } else {
            phoneInfo.style.color = '#FF6B6B';
            phoneInfo.innerHTML = 'Fuera de horario 🔴';
        }
    }
}

// Easter egg: Konami code for contact
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Activate cheat mode for contact
        document.body.style.animation = 'rainbow 1s infinite';
        
        const title = document.querySelector('.game-title');
        const status = document.querySelector('.status-message');
        
        if (title && status) {
            title.textContent = '🎉 VIP CONTACT MODE! 🎉';
            status.textContent = 'PRIORITY SUPPORT ACTIVATED!';
            
            // Make all response times instant
            const responseTime = document.querySelector('.response-time');
            if (responseTime) {
                responseTime.innerHTML = `
                    ⚡ <strong>VIP RESPONSE TIME:</strong><br>
                    • Email: INSTANT ⚡<br>
                    • WhatsApp: INSTANT ⚡<br>
                    • Llamadas: INSTANT ⚡<br>
                    • Proyectos: INSTANT ⚡
                `;
                responseTime.style.borderColor = '#FFD700';
                responseTime.style.background = 'rgba(255, 215, 0, 0.2)';
            }
            
            setTimeout(() => {
                document.body.style.animation = '';
                title.textContent = 'CONTACT LOADING...';
                status.textContent = 'ESTABLECIENDO CONEXIÓN';
                
                // Reset response time
                if (responseTime) {
                    responseTime.innerHTML = `
                        ⚡ <strong>TIEMPO DE RESPUESTA:</strong><br>
                        • Email: < 4 horas<br>
                        • WhatsApp: < 30 minutos<br>
                        • Llamadas: Inmediato<br>
                        • Proyectos urgentes: < 1 hora
                    `;
                    responseTime.style.borderColor = '#4ECDC4';
                    responseTime.style.background = 'rgba(78, 205, 196, 0.2)';
                }
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
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-5px); }
            60% { transform: translateY(-3px); }
        }
    `;
    document.head.appendChild(style);
}

// Simulate network status
function simulateNetworkStatus() {
    const channels = document.querySelectorAll('.channel');
    const statusMessages = ['ONLINE', 'CONNECTING', 'ACTIVE', 'STANDBY'];
    
    setInterval(() => {
        channels.forEach(channel => {
            const randomStatus = statusMessages[Math.floor(Math.random() * statusMessages.length)];
            const originalText = channel.textContent;
            
            // Briefly show status
            channel.textContent = randomStatus;
            channel.style.background = '#4ECDC4';
            
            setTimeout(() => {
                channel.textContent = originalText;
                channel.style.background = '#FF8E53';
            }, 800);
        });
    }, 10000);
}

// Contact form simulation (for future implementation)
function simulateContactForm() {
    // This function prepares for when a real contact form is added
    const contactActions = document.querySelectorAll('.contact-action');
    
    contactActions.forEach(action => {
        action.addEventListener('click', function(e) {
            // Add click effect
            this.style.background = '#4ECDC4';
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.style.background = '#FF8E53';
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Show feedback message
            const feedback = document.createElement('div');
            feedback.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #4ECDC4;
                color: white;
                padding: 10px 20px;
                border: 3px solid #333;
                border-radius: 10px;
                font-size: 0.6rem;
                z-index: 1000;
                animation: slideIn 0.3s ease;
            `;
            feedback.textContent = 'Redirigiendo...';
            document.body.appendChild(feedback);
            
            setTimeout(() => {
                feedback.remove();
            }, 2000);
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    createParticles();
    addSoundEffects();
    setupDynamicMessages();
    animateProgressBar();
    animateChannels();
    addRainbowEffect();
    
    // Contact-specific initializations
    setTimeout(() => {
        initializeContactFeatures();
        animateResponseTime();
        updateContactAvailability();
        simulateNetworkStatus();
        simulateContactForm();
    }, 1000);
    
    // Update availability every hour
    setInterval(updateContactAvailability, 3600000);
});

// Export functions for potential external use
window.GeekFreakContact = {
    createStars,
    createParticles,
    addSoundEffects,
    setupDynamicMessages,
    animateProgressBar,
    animateChannels,
    initializeContactFeatures
};