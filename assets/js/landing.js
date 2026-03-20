document.addEventListener("DOMContentLoaded", () => {

  // -----------------------------
  // Load HTML partials (header/footer)
  // -----------------------------
  document.querySelectorAll("[data-include]").forEach(el => {
    fetch(el.dataset.include)
      .then(res => res.text())
      .then(data => {
        el.innerHTML = data;

        // ONLY initialize navbar AFTER header is loaded
        if (el.dataset.include.includes("header.html")) {
          initNavbar();
        }
      })
      .catch(err => console.error("Error loading partial:", err));
  });

  // -----------------------------
  // Navbar & User Dropdown
  // -----------------------------
  function initNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const userIcon = document.getElementById('userIcon');
    const userDropdown = document.getElementById('userDropdown');

    if (!hamburger || !navLinks || !userIcon || !userDropdown) {
      console.log("Navbar elements not found");
      return;
    }

    // -----------------------------
    // HAMBURGER CLICK
    // -----------------------------
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();

      navLinks.classList.toggle('show');
      hamburger.classList.toggle('open');

      // Close user dropdown if open
      userDropdown.classList.remove('show');
    });

    // -----------------------------
    // USER ICON CLICK
    // -----------------------------
    userIcon.addEventListener('click', (e) => {
      e.stopPropagation();

      userDropdown.classList.toggle('show');

      // Close nav menu if open
      navLinks.classList.remove('show');
      hamburger.classList.remove('open');
    });

    // -----------------------------
    // CLICK OUTSIDE
    // -----------------------------
    document.addEventListener('click', () => {
      navLinks.classList.remove('show');
      hamburger.classList.remove('open');
      userDropdown.classList.remove('show');
    });
  }

  // -----------------------------
  // HERO BACKGROUND SLIDESHOW
  // -----------------------------
  const hero = document.querySelector('.hero');
  const heroImages = [
    '../assets/images/hero/hero1.jpg',
    '../assets/images/hero/hero2.jpg',
    '../assets/images/hero/hero3.jpg',
    '../assets/images/hero/hero4.jpg',
    '../assets/images/hero/hero5.jpg'
  ];

  let currentHero = 0;

  if (hero) {
    setInterval(() => {
      currentHero = (currentHero + 1) % heroImages.length;
      hero.style.backgroundImage = `url(${heroImages[currentHero]})`;
      hero.style.backgroundSize = 'cover';
      hero.style.backgroundPosition = 'center';
    }, 5000);
  }

  // -----------------------------
  // SCROLL TO TOP
  // -----------------------------
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // -----------------------------
  // FAQ
  // -----------------------------
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');

    if (question) {
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    }
  });

  // -----------------------------
  // NEWSLETTER
  // -----------------------------
  const newsletterForm = document.getElementById("newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", e => {
      e.preventDefault();

      const email = newsletterForm.querySelector('input').value;

      if (email) {
        alert(`Subscribed: ${email}`);
      }

      newsletterForm.reset();
    });
  }

});