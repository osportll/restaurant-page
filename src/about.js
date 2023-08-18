import { about, newDiv } from './pageLoad';
import { selectElement, createElement } from './pageLoad';

export let aboutDiv;

export function initializeAbout() {
  aboutDiv = newDiv.appendChild(createElement('div'));
  aboutDiv.classList.add('aboutDiv');

  const aboutH1 = aboutDiv.appendChild(createElement('h1'));
  aboutH1.classList.add('menuH1');
  aboutH1.textContent = 'Our Philosophy';

  const aboutText = aboutDiv.appendChild(createElement('p'));
  aboutText.classList.add('aboutText');
  aboutText.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, nulla! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis cupiditate nihil molestias labore eos atque consequuntur ea quam quia sapiente? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae autem aliquid saepe accusamus illum natus debitis hic, doloribus quae nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae porro culpa animi aperiam sapiente itaque consequatur quo inventore, eveniet eos?`;
}
