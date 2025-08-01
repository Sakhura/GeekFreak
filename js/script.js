// Add interactive sound effects (visual feedback)
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
});

// Smooth scrolling for navigation links
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

// Dynamic score counter
let score = 0;
const scoreElement = document.querySelector('.score');

if (scoreElement) {
    setInterval(() => {
        score += Math.floor(Math.random() * 100);
        scoreElement.innerHTML = `<span class="coin">🪙</span>SCORE: ${score.toLocaleString()}`;
    }, 3000);
}

// Add more floating power-ups randomly
function createRandomPowerUp() {
    const powerUpsContainer = document.querySelector('.power-ups');
    if (!powerUpsContainer) return;
    
    const powerUps = ['💻', '⚡', '🚀', '🔧', '🖥️', '📱', '⭐', '🎯', '🛡️', '🎓'];
    const powerUp = document.createElement('div');
    powerUp.className = 'power-up';
    powerUp.textContent = powerUps[Math.floor(Math.random() * powerUps.length)];
    powerUp.style.left = Math.random() * 100 + '%';
    powerUp.style.animationDuration = (Math.random() * 5 + 5) + 's';
    
    powerUpsContainer.appendChild(powerUp);
    
    setTimeout(() => {
        powerUp.remove();
    }, 10000);
}

// Create random power-ups every few seconds
setInterval(createRandomPowerUp, 2000);

// Chatbox functionality
const chatboxBtn = document.getElementById('chatboxBtn');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatBody = document.getElementById('chatBody');
const chatNotification = document.getElementById('chatNotification');

let isChatOpen = false;

// Toggle chat window
if (chatboxBtn) {
    chatboxBtn.addEventListener('click', function() {
        isChatOpen = !isChatOpen;
        chatWindow.classList.toggle('active', isChatOpen);
        if (chatNotification) {
            chatNotification.style.display = 'none';
        }
    });
}

// Close chat window
if (chatClose) {
    chatClose.addEventListener('click', function() {
        isChatOpen = false;
        chatWindow.classList.remove('active');
    });
}

// Send message function
function sendMessage() {
    if (!chatInput || !chatBody) return;
    
    const message = chatInput.value.trim();
    if (message) {
        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message';
        userMessage.innerHTML = `<strong>Tú:</strong><br>${message}`;
        chatBody.appendChild(userMessage);
        
        // Clear input
        chatInput.value = '';
        
        // Auto-scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
        
        // Simulate bot response after delay
        setTimeout(() => {
            const botResponses = [
                "¡Excelente pregunta! 🚀 Te conectaré con un especialista para darte más detalles.",
                "¡Perfecto! Tenemos soluciones ideales para eso. ¿Te gustaría agendar una reunión?",
                "¡Great choice! 💻 Nuestros cursos tienen metodología gamificada súper efectiva.",
                "¡Level up incoming! Te enviaré información detallada por email. ¿Cuál es tu correo?",
                "¡Boss fight activated! 🎯 Este tipo de proyecto es nuestra especialidad.",
                "¡Achievement unlocked! 🏆 Te paso con nuestro equipo comercial de inmediato.",
                "¡Combo perfecto! Desarrollamos, asesoramos y capacitamos. Triple win! ⚡",
                "¡Critical hit! 💥 Esa tecnología está en nuestro stack principal."
            ];
            
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            const botMessage = document.createElement('div');
            botMessage.className = 'chat-message bot';
            botMessage.innerHTML = randomResponse;
            chatBody.appendChild(botMessage);
            
            // Auto-scroll to bottom
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000 + Math.random() * 2000);
    }
}

// Send message on button click
if (chatSend) {
    chatSend.addEventListener('click', sendMessage);
}

// Send message on Enter key
if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Show notification after some time
setTimeout(() => {
    if (!isChatOpen && chatNotification) {
        chatNotification.style.display = 'flex';
    }
}, 5000);

// General utility functions for all pages
function addHoverEffects() {
    const elements = document.querySelectorAll('.feature-card, .game-btn, .nav a');
    elements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1)';
        });
    });
}

// Initialize hover effects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addHoverEffects();
});

// Easter egg: Konami code for fun
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Activate rainbow mode
        document.body.style.animation = 'rainbow 1s infinite';
        
        // Show achievement message
        const achievement = document.createElement('div');
        achievement.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
            color: white;
            padding: 20px;
            border: 5px solid #333;
            border-radius: 15px;
            font-family: 'Press Start 2P', cursive;
            font-size: 1rem;
            text-align: center;
            z-index: 9999;
            animation: bounce 0.5s ease;
        `;
        achievement.innerHTML = '🎉 CHEAT CODE ACTIVATED! 🎉<br>DEVELOPER MODE UNLOCKED!';
        document.body.appendChild(achievement);
        
        setTimeout(() => {
            document.body.style.animation = '';
            achievement.remove();
        }, 3000);
    }
});

// Add rainbow animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);