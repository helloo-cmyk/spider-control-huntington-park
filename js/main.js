document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile navigation toggle & Slide-in drawer animation
  initMobileNav();

  // 2. Navbar scroll state styling (Scroll shadow)
  initHeaderScroll();

  // 3. FAQ Accordion (single-open behavior)
  initFaqAccordion();

  // 4. Active nav link highlight based on current page filename
  initActiveLinkHighlight();

  // 5. Smooth scroll for anchor links
  initSmoothScroll();

  // 6. Subtle fade-in on scroll (IntersectionObserver)
  initScrollFadeIn();

  // 7. Mobile Floating CTA Visibility Toggle based on Scroll position
  initMobileFloatingCta();
});

// Helper initialization functions
function initMobileNav() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
      const isExpanded = !mobileMenu.classList.contains('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close nav on outside click
    document.addEventListener('click', (e) => {
      if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(e.target) && e.target !== mobileMenuBtn) {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

function initHeaderScroll() {
  const header = document.getElementById('global-header');
  if (header) {
    const checkScroll = () => {
      if (window.scrollY > 10) {
        header.classList.add('shadow-md');
        header.classList.remove('shadow-sm');
      } else {
        header.classList.remove('shadow-md');
        header.classList.add('shadow-sm');
      }
    };
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
  }
}

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const button = item.querySelector('.faq-btn');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (button && content && icon) {
      button.addEventListener('click', () => {
        const isOpen = button.getAttribute('aria-expanded') === 'true';

        // Close all other FAQs
        faqItems.forEach(otherItem => {
          const otherButton = otherItem.querySelector('.faq-btn');
          const otherContent = otherItem.querySelector('.faq-content');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherButton && otherContent && otherIcon && otherItem !== item) {
            otherButton.setAttribute('aria-expanded', 'false');
            otherContent.style.maxHeight = null;
            otherIcon.style.transform = 'rotate(0deg)';
          }
        });

        // Toggle current FAQ
        if (isOpen) {
          button.setAttribute('aria-expanded', 'false');
          content.style.maxHeight = null;
          icon.style.transform = 'rotate(0deg)';
        } else {
          button.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + 'px';
          icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });
}

function initActiveLinkHighlight() {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;
  const pageName = currentPath.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === pageName || (pageName === 'index.html' && href === './')) {
      link.classList.add('text-orange', 'font-semibold');
      // Adding a subtle indicator underline for desktop
      link.classList.add('border-b-2', 'border-orange');
      link.classList.remove('text-navy', 'hover:text-orange');
    }
  });
}

function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
        targetElement.scrollIntoView({
          shadow: false,
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function initScrollFadeIn() {
  const fadeElements = document.querySelectorAll('.fade-in-section');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    fadeElements.forEach(el => el.classList.add('is-visible'));
  }
}

function initMobileFloatingCta() {
  const floatingCta = document.getElementById('mobile-floating-cta');
  if (floatingCta) {
    const toggleFloatingCta = () => {
      // Show floating CTA on screens below 768px and when scrolled down > 400px
      if (window.innerWidth < 768 && window.scrollY > 400) {
        floatingCta.classList.remove('translate-y-24');
        floatingCta.classList.add('translate-y-0');
      } else {
        floatingCta.classList.remove('translate-y-0');
        floatingCta.classList.add('translate-y-24');
      }
    };

    window.addEventListener('scroll', toggleFloatingCta);
    window.addEventListener('resize', toggleFloatingCta);
    toggleFloatingCta(); // Initial check
  }
}
