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
        
        setInterval(() => {
            score += Math.floor(Math.random() * 100);
            scoreElement.innerHTML = `<span class="coin">🪙</span>SCORE: ${score.toLocaleString()}`;
        }, 3000);
        
        // Add more floating power-ups randomly
        function createRandomPowerUp() {
            const powerUps = ['💻', '⚡', '🚀', '🔧', '🖥️', '📱', '⭐', '🎯', '🛡️', '🎓'];
            const powerUp = document.createElement('div');
            powerUp.className = 'power-up';
            powerUp.textContent = powerUps[Math.floor(Math.random() * powerUps.length)];
            powerUp.style.left = Math.random() * 100 + '%';
            powerUp.style.animationDuration = (Math.random() * 5 + 5) + 's';
            
            document.querySelector('.power-ups').appendChild(powerUp);
            
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
        
        let isChutOpen = false;
        
        // Toggle chat window
        chatboxBtn.addEventListener('click', function() {
            isChutOpen = !isChutOpen;
            chatWindow.classList.toggle('active', isChutOpen);
            chatNotification.style.display = 'none';
        });
        
        // Close chat window
        chatClose.addEventListener('click', function() {
            isChutOpen = false;
            chatWindow.classList.remove('active');
        });
        
        // Send message function
        function sendMessage() {
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
        chatSend.addEventListener('click', sendMessage);
        
        // Send message on Enter key
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        // Show notification after some time
        setTimeout(() => {
            if (!isChutOpen) {
                chatNotification.style.display = 'flex';
            }
        }, 5000);