import { Hero } from './hero.js';
import { Actions } from './actions.js';
import { Offers } from './offers.js';
import { Services } from './services.js';
import { AppSection } from './app-promo.js';
import { Footer } from './footer.js';

const app = document.querySelector('#app');

app.innerHTML = `
  <main class="pb-10">
    ${Hero()}
    ${Actions()}
    ${Offers()}
    ${Services()}
    ${AppSection()}
    ${Footer()}
  </main>
`;
