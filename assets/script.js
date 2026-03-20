/* Navbar Toggle */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
  });
}

/* Smooth Scroll */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    if(link.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
});

/* Contact Form Dummy Submission */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("Message sent! We will contact you soon.");
    contactForm.reset();
  });
}

/* Fade-in on Scroll */
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  faders.forEach(fader => {
    const faderTop = fader.getBoundingClientRect().top;
    if(faderTop < triggerBottom) fader.classList.add('show');
    else fader.classList.remove('show');
  });
};
window.addEventListener('scroll', appearOnScroll);
appearOnScroll();

/* Back to Top Button */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 400) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Login Form Dummy */
const loginForm = document.getElementById('login-form');
if(loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("Login successful (demo). Redirecting to dashboard...");
    loginForm.reset();
    // Later: redirect to appropriate dashboard page
  });
}

/* Register Form Dummy */
const registerForm = document.getElementById('register-form');
if(registerForm) {
  registerForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("Account created successfully (demo). Redirecting to login...");
    registerForm.reset();
    // Later: redirect to login page
  });
}

/* Sidebar Active Link */
const sidebarLinks = document.querySelectorAll('.sidebar-menu li a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

/* Dummy button actions for demo */
document.querySelectorAll('.cta-btn.small').forEach(btn => {
  btn.addEventListener('click', e => {
    alert("Action clicked (demo). Backend functionality coming later.");
  });
});

/* Dummy actions for teacher dashboard */
document.querySelectorAll('.cta-btn.small').forEach(btn => {
  btn.addEventListener('click', e => {
    alert("Action clicked (demo). Backend functionality coming later.");
  });
});

/* Dummy alerts for student dashboard - optional */
document.querySelectorAll('.cta-btn.small').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Action clicked (demo). Backend functionality coming later.");
  });
});