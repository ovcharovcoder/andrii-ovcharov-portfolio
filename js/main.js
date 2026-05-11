// ФІЛЬТРАЦІЯ ТА ПАГІНАЦІЯ — ПРАЦЮЄ З HTML КАРТКАМИ
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');
const showMoreBtn = document.getElementById('showMoreBtn');

let currentFilter = 'all';
let visibleCount = 6; // ПОЧАТКОВА КІЛЬКІСТЬ КАРТОК — 6
let currentLang = 'en';

function filterAndShow() {
  // Спочатку фільтруємо за категорією
  let filteredItems = [];
  projectItems.forEach(item => {
    const category = item.getAttribute('data-category');
    if (currentFilter === 'all' || category === currentFilter) {
      filteredItems.push(item);
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });

  // Потім показуємо тільки visibleCount елементів
  filteredItems.forEach((item, index) => {
    if (index < visibleCount) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });

  // Оновлюємо кнопку SHOW MORE / SHOW LESS
  const remaining = filteredItems.length - visibleCount;
  if (remaining <= 0) {
    showMoreBtn.style.display = 'inline-block';
    showMoreBtn.textContent = currentLang === 'en' ? 'SHOW LESS' : 'ПРИХОВАТИ';
  } else {
    showMoreBtn.style.display = 'inline-block';
    showMoreBtn.textContent = `${currentLang === 'en' ? 'SHOW MORE' : 'ПОКАЗАТИ БІЛЬШЕ'} (${remaining})`;
  }
}

// Обробники фільтрів
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    visibleCount = 6; // СКИДАЄМО ДО 6 ПРИ ЗМІНІ ФІЛЬТРУ
    filterAndShow();
  });
});

// Кнопка SHOW MORE / SHOW LESS
showMoreBtn.addEventListener('click', () => {
  // Отримуємо поточну кількість відфільтрованих видимих карток
  let currentVisibleItems = [];
  projectItems.forEach(item => {
    const category = item.getAttribute('data-category');
    if (
      (currentFilter === 'all' || category === currentFilter) &&
      item.style.display !== 'none'
    ) {
      currentVisibleItems.push(item);
    }
  });

  const filteredTotal = Array.from(projectItems).filter(item => {
    const category = item.getAttribute('data-category');
    return currentFilter === 'all' || category === currentFilter;
  }).length;

  const isAllVisible = currentVisibleItems.length === filteredTotal;

  if (isAllVisible) {
    visibleCount = 6; // ПОВЕРТАЄМОСЯ ДО 6 КАРТОК
  } else {
    visibleCount += 6; // ДОДАЄМО ЩЕ 6 КАРТОК
    if (visibleCount > filteredTotal) visibleCount = filteredTotal;
  }
  filterAndShow();
});

// Ініціалізація
filterAndShow();

// THEME
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
function setTheme(theme) {
  if (theme === 'light') {
    body.classList.add('light');
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}
const savedTheme = localStorage.getItem('theme');
savedTheme === 'light' ? setTheme('light') : setTheme('dark');
themeToggle.addEventListener('click', () =>
  body.classList.contains('light') ? setTheme('dark') : setTheme('light'),
);

// FADE UP
const faders = document.querySelectorAll('.fade-up');
const obs = new IntersectionObserver(
  e => e.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.15 },
);
faders.forEach(el => obs.observe(el));

// ACTIVE NAVIGATION
const sections = {
  work: document.getElementById('work'),
  projects: document.getElementById('projects'),
  about: document.getElementById('about'),
  contact: document.getElementById('contact'),
};
const navLinks = document.querySelectorAll('.nav-links a');
const mobileNavLinks = document.querySelectorAll('.mobile-menu a');

function updateActiveNav() {
  const scrollPosition = window.scrollY + 300;
  let activeSection = null;
  for (const [key, section] of Object.entries(sections)) {
    if (section) {
      const offsetTop = section.offsetTop;
      const offsetBottom = offsetTop + section.offsetHeight;
      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        activeSection = key;
        break;
      }
    }
  }
  navLinks.forEach(link => {
    const sectionId = link.getAttribute('data-section');
    if (sectionId === activeSection) link.classList.add('active');
    else link.classList.remove('active');
  });
  mobileNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    const sectionId = href ? href.substring(1) : null;
    link.style.color = sectionId === activeSection ? 'var(--accent)' : '';
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// TYPEWRITER
const typewriterElements = document.querySelectorAll('.section-label');
function typewriterEffect(element, text, index = 0) {
  if (index < text.length) {
    element.textContent = text.substring(0, index + 1);
    setTimeout(() => typewriterEffect(element, text, index + 1), 30);
  } else {
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'cursor';
    cursorSpan.innerHTML = '';
    element.appendChild(cursorSpan);
  }
}
const typewriterObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.hasAttribute('data-typed')) {
        const text = entry.target.getAttribute('data-text');
        if (text) {
          entry.target.setAttribute('data-typed', 'true');
          typewriterEffect(entry.target, text, 0);
        }
      }
    });
  },
  { threshold: 0.5 },
);
typewriterElements.forEach(el => typewriterObserver.observe(el));

// HERO TYPEWRITER
const heroTypewriterSpan = document.getElementById('hero-typewriter');
const heroText = 'modern brands';
let heroIndex = 0;
function typeHero() {
  if (heroIndex < heroText.length) {
    heroTypewriterSpan.innerHTML =
      heroText.substring(0, heroIndex + 1) + '<span class="cursor"></span>';
    heroIndex++;
    setTimeout(typeHero, 80);
  } else {
    heroTypewriterSpan.innerHTML = heroText + '<span class="cursor"></span>';
  }
}
typeHero();

// CANVAS CUBES
const canvas = document.getElementById('hero-canvas');
let ctx = canvas.getContext('2d');
let w,
  h,
  cubes = [],
  mouseX = -1000,
  mouseY = -1000;
const spacing = 48;
const cubeSz = 9;
function initCubes() {
  cubes = [];
  const cols = Math.ceil(w / spacing) + 2;
  const rows = Math.ceil(h / spacing) + 2;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      cubes.push({
        baseX: i * spacing,
        baseY: j * spacing,
        x: i * spacing,
        y: j * spacing,
        size: cubeSz,
        origSize: cubeSz,
      });
    }
  }
}
function updateCubes() {
  const influence = 140;
  for (let c of cubes) {
    const dx = c.x - mouseX;
    const dy = c.y - mouseY;
    const dist = Math.hypot(dx, dy);
    if (dist < influence) {
      const angle = Math.atan2(dy, dx);
      const force = (influence - dist) / influence;
      c.x = c.baseX + Math.cos(angle) * force * 38;
      c.y = c.baseY + Math.sin(angle) * force * 38;
      c.size = c.origSize + force * 5;
    } else {
      c.x += (c.baseX - c.x) * 0.1;
      c.y += (c.baseY - c.y) * 0.1;
      c.size += (c.origSize - c.size) * 0.1;
    }
  }
}
function draw() {
  if (!ctx) return;
  ctx.clearRect(0, 0, w, h);
  const accent =
    getComputedStyle(body).getPropertyValue('--accent').trim() || '#8B6FCF';
  for (let c of cubes) {
    ctx.fillStyle = accent;
    ctx.globalAlpha = 0.5;
    ctx.shadowBlur = 8;
    ctx.shadowColor = accent + '40';
    ctx.fillRect(c.x - c.size / 2, c.y - c.size / 2, c.size, c.size);
    ctx.fillStyle = '#FFFFFF';
    ctx.globalAlpha = 0.1;
    ctx.fillRect(
      c.x - c.size / 3,
      c.y - c.size / 3,
      c.size / 2.5,
      c.size / 2.5,
    );
  }
  ctx.shadowBlur = 0;
}
function animate() {
  updateCubes();
  draw();
  requestAnimationFrame(animate);
}
function resizeCanvas() {
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    w = heroSection.offsetWidth;
    h = heroSection.offsetHeight;
    canvas.width = w;
    canvas.height = h;
    initCubes();
  }
}
window.addEventListener('resize', () => resizeCanvas());
canvas.addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});
canvas.addEventListener('mouseleave', () => {
  mouseX = -1000;
  mouseY = -1000;
});
setTimeout(() => resizeCanvas(), 50);
resizeCanvas();
animate();

// BURGER MENU
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('open');
  burgerBtn.classList.remove('active');
  document.body.style.overflow = '';
}
function openMobileMenu() {
  mobileMenu.classList.add('open');
  mobileOverlay.classList.add('open');
  burgerBtn.classList.add('active');
  document.body.style.overflow = 'hidden';
}
burgerBtn.addEventListener('click', () => {
  if (mobileMenu.classList.contains('open')) closeMobileMenu();
  else openMobileMenu();
});
mobileOverlay.addEventListener('click', closeMobileMenu);
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', e => {
    closeMobileMenu();
    const targetId = link.getAttribute('href');
    if (targetId && targetId !== '#') {
      setTimeout(() => {
        document
          .querySelector(targetId)
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  });
});

// МОВНИЙ ПЕРЕМИКАЧ
function updateLanguage(lang) {
  currentLang = lang;

  // 1. Всі елементи з атрибутами data-en та data-uk (крім кнопок фільтрів)
  const allElements = document.querySelectorAll('[data-en], [data-uk]');
  allElements.forEach(el => {
    // Пропускаємо кнопки фільтрів, бо їх обробимо окремо
    if (el.classList && el.classList.contains('filter-btn')) return;

    const originalText = el.getAttribute(`data-${lang}`);
    if (originalText) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = originalText;
      } else {
        el.innerHTML = originalText;
      }
    }
  });

  // 2. Кнопки фільтрів (ALL, WORDPRESS, WEBFLOW, KAJABI, UI/UX DESIGN)
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    const btnText = btn.getAttribute(`data-${lang}`);
    if (btnText) {
      btn.innerHTML = btnText;
    }
  });

  // 3. Section-label (з ефектом друкування)
  const sectionLabels = document.querySelectorAll('.section-label');
  sectionLabels.forEach(label => {
    const text = label.getAttribute(`data-text-${lang}`);
    if (text) {
      label.setAttribute('data-text', text);
      // Очищаємо вміст, але зберігаємо атрибут data-typed, якщо він є
      if (!label.hasAttribute('data-typed')) {
        label.innerHTML = '';
      } else {
        label.innerHTML = text;
      }
    }
  });

  // 4. Описи карток
  document.querySelectorAll('.project-desc').forEach(p => {
    const text = p.getAttribute(`data-${lang}`);
    if (text) p.innerHTML = text;
  });

  // 5. Кнопки "Visit website"
  document.querySelectorAll('.project-link').forEach(link => {
    const text = link.getAttribute(`data-${lang}`);
    if (text) link.innerHTML = text;
  });

  // 6. Featured-desc
  document.querySelectorAll('.featured-desc').forEach(desc => {
    const text = desc.getAttribute(`data-${lang}`);
    if (text) desc.innerHTML = text;
  });

  // 7. Featured-link
  document.querySelectorAll('.featured-link').forEach(link => {
    const text = link.getAttribute(`data-${lang}`);
    if (text) link.innerHTML = text;
  });

  // 8. Кнопка SHOW MORE
  const btnText = showMoreBtn.getAttribute(`data-${lang}`);
  if (btnText) {
    const remainingMatch = showMoreBtn.textContent.match(/\((\d+)\)/);
    const remaining = remainingMatch ? remainingMatch[1] : '';
    if (
      showMoreBtn.textContent.includes('SHOW LESS') ||
      showMoreBtn.textContent.includes('ПРИХОВАТИ')
    ) {
      showMoreBtn.textContent =
        btnText === 'SHOW MORE' ? 'SHOW LESS' : 'ПРИХОВАТИ';
    } else {
      showMoreBtn.textContent = btnText + (remaining ? ` (${remaining})` : '');
    }
  }

  // 9. Логотип перемикача мови
  document.getElementById('langToggle').innerText = lang === 'en' ? 'UA' : 'EN';
  document.documentElement.lang = lang === 'en' ? 'en' : 'uk';

  filterAndShow();
}

document.getElementById('langToggle').addEventListener('click', () => {
  const newLang = currentLang === 'en' ? 'uk' : 'en';
  updateLanguage(newLang);
});

updateLanguage('en');

// ЗАКРИТТЯ МЕНЮ КНОПКОЮ ХРЕСТИК
const closeMenuBtn = document.getElementById('closeMenuBtn');
if (closeMenuBtn) {
  closeMenuBtn.addEventListener('click', closeMobileMenu);
}

// Оновлення дати
document.getElementById('currentYear').innerText = new Date().getFullYear();
