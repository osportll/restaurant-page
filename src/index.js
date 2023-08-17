console.log('test');

import {
  initializePage,
  newDiv,
  home,
  menu,
  about,
  description,
} from './pageLoad';

import { initializeMenu, menuDiv } from './menu';

initializePage();

home.addEventListener('click', () => {
  newDiv.appendChild(description);
  newDiv.removeChild(menuDiv);
});

menu.addEventListener('click', () => {
  newDiv.textContent = '';
  initializeMenu();
});
