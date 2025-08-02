// ======================================================
// 🎮 GeekFreak Script Optimizado y Modular
// ======================================================

// ==================== LOADER ====================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => loadingScreen.remove(), 1000);
    }
});

// ==================== PARTICLE SYSTEM ====================
function generateParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.setProperty('--dx', `${(Math.random() - 0.5) * 200}px`);
    particle.style.setProperty('--dy', `${-Math.random() * 200}px`);
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 3000);
}

document.addEventListener('click', (e) => {
    generateParticle(e.clientX, e.clientY);
});

// ==================== SCORE SYSTEM ====================
let score = 0;
const scoreDisplay = document.getElementById('scoreValue');

function addScore(amount = 1) {
    score += amount;
    if (scoreDisplay) scoreDisplay.textContent = score;
}

// Opcional: incrementa score al hacer clic en elementos interactivos
const interactables = document.querySelectorAll('.clickable-element');
interactables.forEach(el => {
    el.addEventListener('click', () => addScore(5));
});

// ==================== CHATBOX ====================
const chatBtn = document.getElementById('chatboxBtn');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');

chatBtn?.addEventListener('click', () => {
    chatWindow?.classList.toggle('active');
});

chatClose?.addEventListener('click', () => {
    chatWindow?.classList.remove('active');
});

// ==================== MUSIC TOGGLE ====================
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = false;
let bgMusic = new Audio('assets/music/bg-retro.mp3');
bgMusic.loop = true;

musicToggle?.addEventListener('click', () => {
    isMusicPlaying = !isMusicPlaying;
    isMusicPlaying ? bgMusic.play() : bgMusic.pause();
    musicToggle.classList.toggle('glow');
});

// ==================== MINI GAMES ====================
const miniGameBtns = document.querySelectorAll('.mini-game-btn');
miniGameBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const game = btn.dataset.game;
        alert(`🚧 Minijuego '${game}' en desarrollo...`);
    });
});

// ==================== EASTER EGG: KONAMI CODE ====================
const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            triggerEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function triggerEasterEgg() {
    document.body.classList.add('rainbow-mode');
    alert('✨ ¡Easter Egg Activado! ✨');
    setTimeout(() => document.body.classList.remove('rainbow-mode'), 5000);
}

// ==================== ACHIEVEMENTS MOCK ====================
const achievementPanel = document.getElementById('achievementPanel');
const achievementList = document.getElementById('achievementList');

function unlockAchievement(text) {
    const item = document.createElement('div');
    item.classList.add('achievement-item');
    item.textContent = `🏆 ${text}`;
    achievementList?.appendChild(item);
    achievementPanel?.classList.add('visible');
    setTimeout(() => item.remove(), 8000);
    setTimeout(() => achievementPanel?.classList.remove('visible'), 10000);
}

interactables.forEach(el => {
    el.addEventListener('click', () => unlockAchievement('Interacción registrada!'));
});

document.querySelectorAll('[data-feature="security"]').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        window.location.href = 'servicios.html#ciberseguridad';
    });
});
