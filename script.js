// =============================================
// Shah Alam Portfolio — script.js
// =============================================

// Scroll Progress Bar
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
document.body.appendChild(progressBar);
window.addEventListener('scroll', () => {
    const s = document.documentElement.scrollTop;
    const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = (s / h * 100) + '%';
});

// Typing Animation
const roles = ["SDE (Full-Stack)", "UI/UX Designer", "Web Developer", "AI Architect", "Problem Solver"];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const dynamicSpan = document.getElementById("dynamicTitle");
function typeEffect() {
    if (!dynamicSpan) return;
    const current = roles[roleIndex];
    dynamicSpan.innerText = isDeleting
        ? current.substring(0, charIndex - 1)
        : current.substring(0, charIndex + 1);
    isDeleting ? charIndex-- : charIndex++;
    if (!isDeleting && charIndex === current.length) {
        isDeleting = true; setTimeout(typeEffect, 1800);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; setTimeout(typeEffect, 300);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}
typeEffect();

// Download CV
document.getElementById('downloadCVBtn')?.addEventListener('click', () => {
    const cv = `=== SHAH ALAM ===\nCOMPUTER SCIENCE ENGINEER | SDE (FULL-STACK)\n\n📍 Hyderabad, India  |  📞 +91 7033376610  |  ✉️ siddshahalam@gmail.com\n🔗 GitHub: github.com/2303a510c1  |  LinkedIn: linkedin.com/in/shah-alam-919a892a1\n\n────────────────────────────────────\nPROFESSIONAL SUMMARY\n────────────────────────────────────\nPassionate Computer Science Engineer with expertise in full-stack development, AI integration, and UI/UX design. Proven ability to build scalable web applications and intelligent solutions. Aiming to become a top 1% engineer.\n\n────────────────────────────────────\nTECHNICAL SKILLS\n────────────────────────────────────\n• Languages: Python, JavaScript, Java, C++\n• Frameworks: React, Node.js, Express, Flask\n• Databases: MongoDB, MySQL, Firebase\n• Tools: Git, Docker, AWS, Figma\n• AI/ML: OpenAI API, TensorFlow, LangChain\n\n────────────────────────────────────\nPROJECTS\n────────────────────────────────────\n1. CAR RENTAL SYSTEM — Full-stack platform with AI price prediction\n2. CIVIC REPORTING APP — Crowdsourced reporting with ML severity detection\n3. STUDY GUIDANCE — Interactive academic guidance platform\n\n────────────────────────────────────\nEDUCATION\n────────────────────────────────────\nB.Tech Computer Science Engineering (2022–2026) | CGPA: 9.1/10\n\n────────────────────────────────────\nCERTIFICATIONS\n────────────────────────────────────\n• Full-Stack Web Development — Udemy\n• Python for Data Science — NPTEL (Elite)\n• Top 5% — Coding Ninjas Weekly Contests\n• Open Source Contributor — Hacktoberfest`;

    const blob = new Blob([cv], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'Shah_Alam_Resume.txt';
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
    showToast('📄 CV Downloaded!', '#f59e0b');
});

// Toast Helper
function showToast(msg, bg) {
    const t = document.createElement('div');
    t.innerText = msg;
    Object.assign(t.style, {
        position:'fixed', bottom:'30px', left:'50%', transform:'translateX(-50%)',
        background: bg, color: bg === '#f59e0b' ? '#0a0c10' : 'white',
        padding:'12px 24px', borderRadius:'40px', zIndex:'9999',
        fontWeight:'600', backdropFilter:'blur(8px)', fontFamily:"'Inter',sans-serif"
    });
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2500);
}

// Cursor Glow
const cursor = document.getElementById('cursorGlow');
if (cursor) document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 3D Parallax Avatar
const avatar = document.getElementById('parallaxAvatar');
if (avatar) {
    document.addEventListener('mousemove', e => {
        const x = (window.innerWidth / 2 - e.clientX) / 35;
        const y = (window.innerHeight / 2 - e.clientY) / 35;
        avatar.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
    document.body.addEventListener('mouseleave', () => { avatar.style.transform = ''; });
}

// Ripple Effect
function createRipple(e, el) {
    const r = el.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = (e.clientX - r.left) + 'px';
    ripple.style.top = (e.clientY - r.top) + 'px';
    ripple.style.width = ripple.style.height = '10px';
    el.style.position = 'relative'; el.style.overflow = 'hidden';
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}
document.querySelectorAll('.btn,.project-card,.service-card,.skill-card').forEach(el => {
    el.addEventListener('click', e => createRipple(e, el));
});

// Project Card Links
document.querySelectorAll('.project-card').forEach(card => {
    const link = card.getAttribute('data-link');
    if (link) card.addEventListener('click', () => window.open(link, '_blank'));
});

// Project Card Tilt
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const rx = (e.clientY - r.top - r.height / 2) / 20;
        const ry = (r.width / 2 - (e.clientX - r.left)) / 20;
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// Social Links
const socialUrls = {
    github: 'https://github.com/2303a510c1',
    linkedin: 'https://www.linkedin.com/in/shah-alam-919a892a1',
    twitter: 'https://x.com/alam_shah82361',
    whatsapp: 'https://wa.me/917033376610'
};
document.querySelectorAll('.social-icon').forEach(icon => {
    const s = icon.getAttribute('data-social');
    if (s && socialUrls[s]) icon.addEventListener('click', () => window.open(socialUrls[s], '_blank'));
});

// Smooth Nav Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById(link.getAttribute('href').substring(1));
        if (target) window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    });
});

// Contact Form
document.getElementById('contactForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const message = document.getElementById('userMsg').value.trim();
    const status = document.getElementById('formStatus');
    if (!name || !email || !message) {
        status.innerHTML = '❌ Please fill all fields'; status.style.color = '#f87171';
        setTimeout(() => status.innerHTML = '', 3000); return;
    }
    status.innerHTML = '📤 Sending...'; status.style.color = '#a5f3fc';
    try {
        const res = await fetch("https://formspree.io/f/manyrqwp", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });
        if (res.ok) {
            status.innerHTML = "✅ Message sent! I'll reply soon."; status.style.color = '#86efac';
            document.getElementById('contactForm').reset();
            showToast('✨ Message sent!', '#10b981');
        } else throw new Error();
    } catch {
        window.location.href = `mailto:siddshahalam@gmail.com?subject=Portfolio Query from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
        status.innerHTML = '📧 Email client opened!'; status.style.color = '#86efac';
    }
});

// Scroll Fade In
const fadeEls = document.querySelectorAll('.skill-card,.project-card,.service-card,.contact-info,.query-form,.about-card');
const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            obs.unobserve(entry.target);
        }
    });
}, { threshold: .1 });
fadeEls.forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .6s ease, transform .5s ease';
    obs.observe(el);
});

// Footer Year
const footer = document.querySelector('footer');
if (footer) footer.innerHTML = footer.innerHTML.replace('2025', new Date().getFullYear());

console.log('%c🚀 Shah Alam Portfolio — CS Engineer | SDE | Full-Stack', 'color:#3b82f6;font-size:16px;font-weight:bold;');
