// БАЗА ДАНИХ ПРОЄКТІВ
const allProjectsData = [
  // WORDPRESS
  {
    title: 'Chophytol',
    category: 'wordpress',
    descEn:
      "Website for the French medical product 'Chophytol' with easy navigation of instructions, dosages, and release forms.",
    descUk:
      'Сайт для французького медичного препарату «Хофітол» із зручною навігацією інструкцій, дозувань та форм випуску.',
    img: 'images/chophytol.webp',
    link: 'https://chophytol.ua',
  },
  {
    title: 'Cardonat',
    category: 'wordpress',
    descEn:
      "Website for 'Cardonat' supplement — a coenzyme complex with carnitine, lysine and B vitamins for recovery after illnesses and overstrain.",
    descUk:
      'Сайт для БАД «Кардонат» — коферментний комплекс з карнітином, лізином та вітамінами групи В для відновлення після хвороб та перенапруження.',
    img: 'images/cardonat.webp',
    link: 'https://cardonat.com.ua/',
  },
  {
    title: 'Noksprey',
    category: 'wordpress',
    descEn:
      "Website for 'Noksprey' — a line of products from Sperco for treating runny nose in adults and children.",
    descUk:
      'Сайт для «Нокспрей» — лінійки засобів від Sperco для лікування нежитю у дорослих та дітей.',
    img: 'images/noksprey.webp',
    link: 'https://noksprey.com.ua/',
  },
  {
    title: 'Langes',
    category: 'wordpress',
    descEn:
      "Website for 'Langes' — a cough treatment and respiratory protection remedy that thins mucus and activates local immunity.",
    descUk:
      'Сайт для «Лангес» — засобу для лікування кашлю та захисту дихальних шляхів.',
    img: 'images/langes.webp',
    link: 'https://langes.com.ua/',
  },
  {
    title: 'Erotex',
    category: 'wordpress',
    descEn:
      "Website for 'Erotex' — a delicate solution for couples who value natural sensations.",
    descUk: 'Сайт для «Еротекс» — делікатне рішення для пар.',
    img: 'images/erotex.webp',
    link: 'https://erotex.com.ua/',
  },
  {
    title: 'Lactazik',
    category: 'wordpress',
    descEn:
      "Website for 'Lactazik' — a remedy that helps children digest milk and eliminates colic and bloating.",
    descUk:
      'Сайт для «Лактазік» — засіб, який допомагає дітям засвоювати молоко.',
    img: 'images/lactazik.webp',
    link: 'https://lactazik.com.ua/',
  },
  // WEBFLOW
  {
    title: 'NovaMD',
    category: 'webflow',
    descEn:
      'Landing page for a menopause supplement brand. Built on Webflow with focus on speed, conversions, and responsive design.',
    descUk: 'Лендінг для бренду добавок для жінок у період менопаузи.',
    img: 'images/novam-d.webp',
    link: 'https://novam-d.webflow.io/',
  },
  {
    title: 'Dream House',
    category: 'webflow',
    descEn:
      "Website for 'Dream House' construction company — professional home construction according to any designs.",
    descUk:
      'Сайт будівельної компанії «Dream House» для професійного будівництва будинків.',
    img: 'images/dreamhouse.webp',
    link: 'https://dream-h.webflow.io/',
  },
  // KAJABI
  {
    title: 'ProMentor',
    category: 'kajabi',
    descEn:
      'A ready-to-fill Kajabi template for corporate coaching. For B2B segment.',
    descUk:
      'Готовий шаблон для Kajabi для корпоративного коучингу. Для B2B-сегменту.',
    img: 'images/promentor.webp',
    link: 'https://www.inweba.com/template-promentor-home',
  },
  {
    title: 'Samantha Parker',
    category: 'kajabi',
    descEn: 'A ready-to-fill Kajabi template for personal coaching.',
    descUk: 'Готовий шаблон для Kajabi для персонального коучингу.',
    img: 'images/samantha.webp',
    link: 'https://kajabi-partner-5e06de.mykajabi.com/samantha-coaching-home-en',
  },
  {
    title: 'Sabina Hertiz',
    category: 'kajabi',
    descEn: 'An innovative Kajabi template for business coaches.',
    descUk: 'Інноваційний шаблон для Kajabi для бізнес-коучів.',
    img: 'images/sabina.webp',
    link: 'https://www.inweba.com/sabina-hertiz-home',
  },
  {
    title: 'Dickens Academy',
    category: 'kajabi',
    descEn: 'Website for Dickens Academy — corporate coaching on Kajabi.',
    descUk: 'Сайт для Dickens Academy — корпоративного коучингу на Kajabi.',
    img: 'images/dickensacademy.webp',
    link: 'https://www.dickensacademy.org/',
  },
  {
    title: 'MTC Rider',
    category: 'kajabi',
    descEn:
      'Website for MTC Rider Academy on Kajabi. Safe motorcycle riding courses.',
    descUk:
      'Сайт для MTC Rider Academy на Kajabi. Курси з безпечного водіння мотоциклів.',
    img: 'images/mtc.webp',
    link: 'https://ridingsmart.mykajabi.com/',
  },
  {
    title: 'Physioloops',
    category: 'kajabi',
    descEn:
      'Website for Physioloops on Kajabi. Medical practice treating TMJ disorders.',
    descUk: 'Сайт для Physioloops на Kajabi. Медична практика.',
    img: 'images/physioloops.webp',
    link: 'https://www.physioloops.com/',
  },
  {
    title: 'Train for Birth',
    category: 'kajabi',
    descEn: 'Website for Train for Birth on Kajabi. Home birth preparation.',
    descUk:
      'Сайт для Train for Birth на Kajabi. Підготовка до домашніх пологів.',
    img: 'images/train_for_birth.webp',
    link: 'https://www.trainforbirth.com/',
  },
  // UI/UX DESIGN
  {
    title: 'Barva',
    category: 'design',
    descEn:
      "Design of a premium women's clothing store with Ukrainian embroidery.",
    descUk: 'Дизайн преміум магазину жіночого одягу з українською вишивкою.',
    img: 'images/barva.webp',
    link: 'https://www.behance.net/gallery/248533281/BARVA-Premium-Ukrainian-Embroidery-Store',
  },
  {
    title: 'LUNA',
    category: 'design',
    descEn:
      "Conceptual design for a modern women's lingerie e-commerce website focused on elegance, clarity, and emotional connection.",
    descUk: 'Концептуальний дизайн сучасного сайту жіночої білизни.',
    img: 'images/luna.webp',
    link: 'https://www.behance.net/gallery/248752563/LUNA-Lingerie-E-commerce-Website-Design',
  },
  {
    title: 'TravelMate',
    category: 'design',
    descEn:
      'Travel booking platform design focused on conversion, optimized UX, and premium visual style.',
    descUk: 'Дизайн платформи бронювання подорожей з фокусом на конверсію.',
    img: 'images/travelmate.webp',
    link: 'https://www.behance.net/gallery/244190717/TravelMate-UXUI-Design-for-Travel-Marketplace',
  },
  {
    title: 'Family Law',
    category: 'design',
    descEn: 'Conceptual website design for a family law attorney.',
    descUk: 'Концептуальний дизайн сайту для адвоката з сімейного права.',
    img: 'images/family_law.webp',
    link: 'https://www.behance.net/gallery/248941511/Family-Law-Attorney-Website',
  },
  {
    title: 'EcoWave',
    category: 'design',
    descEn:
      'Premium environmental brand concept about protecting the environment and fighting plastic.',
    descUk: 'Преміальна екологічна концепція бренду про захист довкілля.',
    img: 'images/ecowave.webp',
    link: 'https://www.behance.net/gallery/242585795/EcoWave-UIUX-Design-for-Sustainable-Product-Brand',
  },
  {
    title: 'FitLife',
    category: 'design',
    descEn:
      'Modern landing page design for an online fitness platform focused on home workouts.',
    descUk: 'Дизайн сучасної лендінг-сторінки для онлайн-фітнес-платформи.',
    img: 'images/fitlife.webp',
    link: 'https://www.behance.net/gallery/247697517/FitLife-online-fitness-platform-landing-page-design',
  },
  {
    title: 'Vineyard Dream',
    category: 'design',
    descEn:
      'Website design for a small family winery nestled among hills and vineyards.',
    descUk: 'Дизайн сайту для невеликої сімейної виноробні.',
    img: 'images/vineyard_dream.webp',
    link: 'https://www.behance.net/gallery/226707087/Vineyard-Dream-A-Tasteful-UIUX-Story',
  },
];

// ФУНКЦІЯ РЕНДЕРУ КАРТОК
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  let filteredData = allProjectsData;
  if (currentFilter !== 'all') {
    filteredData = allProjectsData.filter(p => p.category === currentFilter);
  }

  const visibleData = filteredData.slice(0, visibleCount);

  grid.innerHTML = visibleData
    .map(
      p => `
          <div class="project-item" data-category="${p.category}">
            <div class="project-img"><img src="${p.img}" alt="${p.title}"></div>
            <div class="project-info">
              <div class="project-category">${p.category.toUpperCase()}</div>
              <h3>${p.title}</h3>
              <p data-en="${p.descEn.replace(/"/g, '&quot;')}" data-uk="${p.descUk.replace(/"/g, '&quot;')}">${currentLang === 'en' ? p.descEn : p.descUk}</p>
              <a href="${p.link}" target="_blank" class="project-link" data-en="Visit website →" data-uk="Відвідати сайт →">Visit website →</a>
            </div>
          </div>
        `,
    )
    .join('');

  const remaining = filteredData.length - visibleCount;
  if (remaining <= 0) {
    showMoreBtn.style.display = 'inline-block';
    showMoreBtn.textContent = currentLang === 'en' ? 'SHOW LESS' : 'ПРИХОВАТИ';
  } else {
    showMoreBtn.style.display = 'inline-block';
    showMoreBtn.textContent = `${currentLang === 'en' ? 'SHOW MORE' : 'ПОКАЗАТИ БІЛЬШЕ'} (${remaining})`;
  }
}

// ФІЛЬТРАЦІЯ ТА ПАГІНАЦІЯ
let currentFilter = 'all';
let visibleCount = 6; // ПОЧАТКОВА КІЛЬКІСТЬ КАРТОК — 6
let currentLang = 'en';

const filterBtns = document.querySelectorAll('.filter-btn');
const showMoreBtn = document.getElementById('showMoreBtn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    visibleCount = 6; // СКИДАЄМО ДО 6 ПРИ ЗМІНІ ФІЛЬТРУ
    renderProjects();
  });
});

showMoreBtn.addEventListener('click', () => {
  let filteredData = allProjectsData;
  if (currentFilter !== 'all') {
    filteredData = allProjectsData.filter(p => p.category === currentFilter);
  }
  const isAllVisible = visibleCount >= filteredData.length;
  if (isAllVisible) {
    visibleCount = 6; // ПОВЕРТАЄМОСЯ ДО 6 КАРТОК
  } else {
    visibleCount += 6; // ДОДАЄМО ЩЕ 6 КАРТОК
    if (visibleCount > filteredData.length) visibleCount = filteredData.length;
  }
  renderProjects();
});

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
  const allElements = document.querySelectorAll('[data-en], [data-uk]');
  allElements.forEach(el => {
    const originalText = el.getAttribute(`data-${lang}`);
    if (originalText && el.tagName !== 'BUTTON') {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')
        el.placeholder = originalText;
      else el.innerHTML = originalText;
    }
  });
  const sectionLabels = document.querySelectorAll('.section-label');
  sectionLabels.forEach(label => {
    const text = label.getAttribute(`data-text-${lang}`);
    if (text) {
      label.setAttribute('data-text', text);
      label.innerHTML = text;
    }
  });
  renderProjects();
  document.getElementById('langToggle').innerText = lang === 'en' ? 'UA' : 'EN';
  document.documentElement.lang = lang === 'en' ? 'en' : 'uk';
}
document.getElementById('langToggle').addEventListener('click', () => {
  const newLang = currentLang === 'en' ? 'uk' : 'en';
  updateLanguage(newLang);
});

renderProjects();
updateLanguage('en');

// ЗАКРИТТЯ МЕНЮ КНОПКОЮ ХРЕСТИК
const closeMenuBtn = document.getElementById('closeMenuBtn');
if (closeMenuBtn) {
  closeMenuBtn.addEventListener('click', closeMobileMenu);
}
