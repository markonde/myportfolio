// ---- Animated Job Title Typing Effect ----
const jobTitles = [
  'Junior Web Developer',
  'UI/UX Enthusiast',
  'CSS & JavaScript Explorer',
  'Creative Coder'
];
let jtIdx = 0, charIdx = 0, typing = true;
const jobEl = document.getElementById('animated-job');
function typeJobTitle() {
  const current = jobTitles[jtIdx];
  if (typing) {
    jobEl.textContent = current.slice(0, charIdx++);
    if (charIdx > current.length) {
      typing = false;
      setTimeout(typeJobTitle, 1100);
    } else setTimeout(typeJobTitle, 80);
  } else {
    jobEl.textContent = current.slice(0, charIdx--);
    if (charIdx < 0) {
      typing = true;
      jtIdx = (jtIdx + 1) % jobTitles.length;
      setTimeout(typeJobTitle, 400);
    } else setTimeout(typeJobTitle, 40);
  }
}
typeJobTitle();

// ---- Theme Toggle ----
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});
// On load: restore theme
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    themeToggle.textContent = saved === 'dark' ? '☀️' : '🌙';
  }
});

// ---- Scroll Reveal for .glass-tech-card and .project-card ----
function revealCards() {
  const cards = document.querySelectorAll('.glass-tech-card, .project-card');
  const triggerBottom = window.innerHeight * 0.92;
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', revealCards);
window.addEventListener('DOMContentLoaded', revealCards);

// ---- Contact Form (dummy feedback for demo) ----
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    setTimeout(() => {
      contactForm.reset();
      alert('Thank you for your message!');
    }, 700);
  });
}

// ---- Live Demo Modal Prompt ----
let demoUrl = "";
const demoModal = document.getElementById('live-demo-modal');
const confirmDemo = document.getElementById('confirm-demo');
const cancelDemo = document.getElementById('cancel-demo');
const closeDemoModal = document.getElementById('close-demo-modal');

// Handle click on Live Demo buttons
document.querySelectorAll('.live-demo-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    demoUrl = this.getAttribute('data-demo');
    demoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Confirm navigation
confirmDemo.addEventListener('click', function() {
  demoModal.classList.remove('active');
  document.body.style.overflow = '';
  if (demoUrl) window.open(demoUrl, '_blank');
});

// Cancel or close
function closeModalDemo() {
  demoModal.classList.remove('active');
  document.body.style.overflow = '';
}
cancelDemo.addEventListener('click', closeModalDemo);
closeDemoModal.addEventListener('click', closeModalDemo);
window.addEventListener('click', function(e) {
  if (e.target === demoModal) closeModalDemo();
});