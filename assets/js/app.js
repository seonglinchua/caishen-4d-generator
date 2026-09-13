'use strict';

const display = document.getElementById('numberDisplay');
const status = document.getElementById('actionStatus');
const pyro = document.querySelector('.pyro');
const mascot = document.querySelector('.caishen');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');
const nativeShareButton = document.getElementById('nativeShareButton');
const socialButtons = document.getElementById('socialButtons');
const supportsNativeShare = typeof navigator.share === 'function';
const shareButtons = ['facebookButton', 'twitterButton', 'whatsappButton'].map(id => document.getElementById(id));
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let currentNumber = '';
let animationFrame = null;
const celebrationTimers = new Set();
let generation = 0;

function clearCelebration() {
    celebrationTimers.forEach(clearTimeout);
    celebrationTimers.clear();
    if (animationFrame !== null) cancelAnimationFrame(animationFrame);
    animationFrame = null;
    pyro.replaceChildren();
    display.classList.remove('number-animation');
    mascot.classList.remove('mascot-animation');
}

function scheduleCelebration(callback, delay) {
    const timer = setTimeout(() => {
        celebrationTimers.delete(timer);
        callback();
    }, delay);
    celebrationTimers.add(timer);
}

function createFirework(x, y) {
    const colors = ['#a52b26', '#bc8328', '#d8a943'];
    for (let i = 0; i < 18; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework';
        particle.style.backgroundColor = colors[i % colors.length];
        const angle = i * Math.PI * 2 / 18;
        const velocity = 40 + Math.random() * 50;
        particle.style.setProperty('--x', `${x}px`);
        particle.style.setProperty('--y', `${y}px`);
        particle.style.setProperty('--dx', `${Math.cos(angle) * velocity}px`);
        particle.style.setProperty('--dy', `${Math.sin(angle) * velocity}px`);
        pyro.appendChild(particle);
        scheduleCelebration(() => particle.remove(), 1000);
    }
}

function generateNumber() {
    clearCelebration();
    generation++;
    currentNumber = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
    display.removeAttribute('aria-label');
    display.textContent = currentNumber;
    status.textContent = '';
    document.getElementById('generateLabel').textContent = 'Generate again';
    generateButton.querySelector('i').className = 'fa-solid fa-rotate-right button-icon';
    socialButtons.hidden = supportsNativeShare;
    document.getElementById('copyLabel').textContent = 'Copy number';
    copyButton.querySelector('i').className = 'fa-regular fa-copy button-icon';
    [copyButton, nativeShareButton, ...shareButtons].forEach(button => { button.disabled = false; });
    if (reducedMotion.matches) return;
    animationFrame = requestAnimationFrame(() => {
        animationFrame = null;
        display.classList.add('number-animation');
        mascot.classList.add('mascot-animation');
    });
    scheduleCelebration(() => {
        const panel = pyro.getBoundingClientRect();
        const result = display.getBoundingClientRect();
        createFirework(result.left - panel.left + result.width / 2,
            result.top - panel.top + result.height / 2);
    }, 150);
}

function shareText(number = currentNumber) {
    return `My lucky 4D number from Caishen is ${number}!`;
}

function shareOn(platform) {
    if (!/^\d{4}$/.test(currentNumber)) return;
    const text = encodeURIComponent(shareText());
    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${text}`,
        twitter: `https://twitter.com/intent/tweet?text=${text}`,
        whatsapp: `https://wa.me/?text=${text}`
    };
    window.open(urls[platform], '_blank', 'noopener,noreferrer');
}

async function copyNumber() {
    if (!/^\d{4}$/.test(currentNumber)) return;
    const number = currentNumber;
    const version = generation;
    try {
        await navigator.clipboard.writeText(number);
        if (version === generation) {
            status.textContent = `${number} copied.`;
            document.getElementById('copyLabel').textContent = 'Copied';
            copyButton.querySelector('i').className = 'fa-solid fa-check button-icon';
        }
    } catch {
        if (version === generation) status.textContent = 'Couldn’t copy. Select the number and copy it manually.';
    }
}

async function nativeShare() {
    if (!/^\d{4}$/.test(currentNumber)) return;
    const version = generation;
    try {
        await navigator.share({ title: 'Lucky 4D with Caishen', text: shareText() });
    } catch (error) {
        if (error.name !== 'AbortError' && version === generation) {
            status.textContent = 'Couldn’t share. Copy your number or use a platform below.';
            socialButtons.hidden = false;
        }
    }
}

nativeShareButton.hidden = !supportsNativeShare;
generateButton.addEventListener('click', generateNumber);
copyButton.addEventListener('click', copyNumber);
nativeShareButton.addEventListener('click', nativeShare);
shareButtons.forEach((button, index) => {
    button.addEventListener('click', () => shareOn(['facebook', 'twitter', 'whatsapp'][index]));
});
reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) clearCelebration();
});
