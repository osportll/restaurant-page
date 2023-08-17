import { menu, newDiv } from './pageLoad';
import { selectElement, createElement } from './pageLoad';

export let menuDiv;

export function initializeMenu() {
  menuDiv = newDiv.appendChild(createElement('div'));
  menuDiv.classList.add('menuDiv');

  const menuH1 = menuDiv.appendChild(createElement('h1'));
  menuH1.classList.add('menuH1');
  menuH1.textContent = 'Our Sushis';

  const menuItems = menuDiv.appendChild(createElement('div'));
  menuItems.classList.add('menuItems');

  const item1 = menuItems.appendChild(createElement('p'));
  item1.classList.add('item1');
  item1.textContent = 'Nigiri .......................................... 25 $';
  const item2 = menuItems.appendChild(createElement('p'));
  item2.classList.add('item2');
  item2.textContent = 'Sashimi ..................................... 25 $';
  const item3 = menuItems.appendChild(createElement('p'));
  item3.classList.add('item3');
  item3.textContent = 'Uramaki .................................... 15 $';
  const item4 = menuItems.appendChild(createElement('p'));
  item4.classList.add('item4');
  item4.textContent = 'Temaki ...................................... 20 $';
  const item5 = menuItems.appendChild(createElement('p'));
  item5.classList.add('item5');
  item5.textContent = 'Maki .......................................... 15 $';
}
