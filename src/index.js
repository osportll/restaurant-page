console.log('test');

import {
  initializePage,
  newDiv,
  home,
  menu,
  about,
  description,
} from './pageLoad';

import { initializeMenu, menuDiv, menuIsActive } from './menu';
import { initializeAbout, aboutDiv } from './about';

initializePage();

home.addEventListener('click', () => {
  newDiv.appendChild(description);

  if (newDiv.contains(menuDiv)) {
    newDiv.removeChild(menuDiv);
  } else if (newDiv.contains(aboutDiv)) {
    newDiv.removeChild(aboutDiv);
  }
});

menu.addEventListener('click', () => {
  newDiv.textContent = '';
  initializeMenu();
});

about.addEventListener('click', () => {
  newDiv.textContent = '';
  initializeAbout();
});
