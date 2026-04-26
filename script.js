// 1. Countdown Logic
function updateTimer() {
    const birthday = new Date('May 7, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = birthday - now;
    if (diff < 0) { document.getElementById('timer').innerText = "IT'S PARTY TIME!"; return; }
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('timer').innerText = `${d}D ${h}H ${m}M ${s}S`;
}
setInterval(updateTimer, 1000);

// 2. Orbital Movement (حركة الأيقونات الدائرية)
gsap.set(".bubbles", {x: -120, y: -50});
gsap.set(".catwoman", {x: 120, y: -50});
gsap.set(".fluttershy", {x: 0, y: 120});

gsap.to(".orbital-system", { rotation: 360, duration: 20, repeat: -1, ease: "none" });
gsap.to(".node", { rotation: -360, duration: 20, repeat: -1, ease: "none" });

// 3. Personality Logic (نصوص الصفات)
const charData = {
    bubbles: { title: "Joyful Power", desc: "A rare mix of pure kindness and unexpected strength. Ousi is the soul of every moment." },
    catwoman: { title: "The Bold Queen", desc: "Strong-willed and independent. Ousi doesn't follow rules; she makes them with style." },
    fluttershy: { title: "Gentle Heart", desc: "Behind the strength lies a heart of gold. Loyal, sweet, and always there when it matters." }
};

function trigger(char) {
    const statusBox = document.getElementById('status-text');
    gsap.to(statusBox, { opacity: 0, y: 10, duration: 0.3, onComplete: () => {
        statusBox.innerHTML = `<strong>${charData[char].title}</strong>${charData[char].desc}`;
        gsap.to(statusBox, { opacity: 1, y: 0, duration: 0.5 });
    }});

    let clr = char === 'bubbles' ? '#00d2ff' : char === 'catwoman' ? '#ff0055' : '#f1ff5c';
    gsap.to(".vignette", { boxShadow: `inset 0 0 150px ${clr}55`, duration: 1 });
    confetti({ particleCount: 30, spread: 50, colors: [clr] });
}

// 4. The "Security Hack" Joke
document.getElementById('action-trigger').addEventListener('click', () => {
    const screen = document.getElementById('hacker-screen');
    screen.classList.remove('hidden');
    setTimeout(() => {
        screen.innerHTML = "<h1 style='color:white; text-align:center;'>ACCESS GRANTED.<br>HAPPY BIRTHDAY OUSI! 🎉</h1>";
        confetti({ particleCount: 200, spread: 100 });
        setTimeout(() => { screen.classList.add('hidden'); }, 2500);
    }, 3000);
});
