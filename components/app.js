import { Navbar } from './navbar.js';
import { Hero } from './hero.js';
import { Actions } from './actions.js';
import { Offers } from './offers.js';
import { Services } from './services.js';
import { AppSection } from './app-promo.js';
import { Footer } from './footer.js';

const app = document.querySelector('#app');

app.innerHTML = `
  ${Navbar()}
  <main class="pb-16 sm:pb-24">
    ${Hero()}
    ${Actions()}
    ${Offers()}
    ${Services()}
    ${AppSection()}
    ${Footer()}
  </main>
`;

const header = document.querySelector('#site-header');
const navToggle = document.querySelector('#nav-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileLinks = mobileMenu?.querySelectorAll('a') ?? [];

function syncHeader() {
  const isScrolled = window.scrollY > 24;
  header?.classList.toggle('is-scrolled', isScrolled);
}

function closeMobileMenu() {
  document.body.classList.remove('menu-open');
  navToggle?.setAttribute('aria-expanded', 'false');
  mobileMenu?.classList.add('hidden');
}

navToggle?.addEventListener('click', () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  document.body.classList.toggle('menu-open', !isExpanded);
  navToggle.setAttribute('aria-expanded', String(!isExpanded));
  mobileMenu?.classList.toggle('hidden', isExpanded);
});

mobileLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));
window.addEventListener('scroll', syncHeader, { passive: true });
window.addEventListener('resize', closeMobileMenu);

syncHeader();
