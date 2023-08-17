export let newDiv;
export let home;
export let menu;
export let about;
export let description;

export function initializePage() {
  const body = selectElement('.body');
  const content = selectElement('#content');

  newDiv = createElement('div');
  newDiv.classList.add('mainContainer');

  /* const headLine = createElement('h1');
  headLine.textContent = 'Restaurant'; */

  description = createElement('h1');
  description.textContent = 'Experience Contemporary Japanese';
  description.classList.add('description');

  /* const image = createElement('img');
  image.src =
    '/home/oscar/repos/restaurant-page/img/victoria-shes-UC0HZdUitWY-unsplash.jpg';
  image.alt = 'Food Picture';
  image.classList.add('img1'); */

  const overlay = createElement('div');
  overlay.classList.add('overlay');

  const navBar = createElement('div');
  navBar.classList.add('nav');

  const logo = navBar.appendChild(createElement('div'));
  logo.classList.add('logo');

  const logoText = createElement('h1');
  logoText.classList.add('logoText');
  logoText.textContent = 'Yummy飯Sushi';

  const linksContainer = createElement('div');
  linksContainer.classList.add('linksContainer');
  navBar.appendChild(linksContainer);

  home = linksContainer.appendChild(createElement('a'));
  home.classList.add('home');
  home.textContent = 'Home';
  home.href = '#';
  menu = linksContainer.appendChild(createElement('a'));
  menu.classList.add('menu');
  menu.textContent = 'Menu';
  menu.href = '#';
  about = linksContainer.appendChild(createElement('a'));
  about.classList.add('about');
  about.textContent = 'About';
  about.href = '#';

  content.appendChild(newDiv);
  /* newDiv.appendChild(headLine); */
  newDiv.appendChild(description);
  /* newDiv.appendChild(image); */
  body.appendChild(overlay);
  overlay.appendChild(content);
  content.insertBefore(navBar, newDiv);
  logo.appendChild(logoText);

  const footer = overlay.appendChild(createElement('div'));
  footer.classList.add('footer');

  const gitHub = footer.appendChild(createElement('div'));
  gitHub.classList.add('gitHubContainer');

  const gitHubText = gitHub.appendChild(createElement('p'));
  gitHubText.classList.add('gitHubText');
  gitHubText.textContent = 'Made by';
  const gitHubLogo = gitHub.appendChild(createElement('img'));
  gitHubLogo.classList.add('gitHubLogo');
  gitHubLogo.src = '/home/oscar/repos/restaurant-page/img/GitHub-Mark-32px.png';
  const gitHubLink = gitHub.appendChild(createElement('a'));
  gitHubLink.classList.add('gitHubLink');
  gitHubLink.textContent = 'osportll';
  gitHubLink.href = 'https://github.com/osportll';

  const imgCredit = footer.appendChild(createElement('div'));
  imgCredit.classList.add('imgCredit');

  const imgCreditP = imgCredit.appendChild(createElement('p'));
  imgCreditP.classList.add('imgCreditP');
  imgCreditP.textContent = 'Background image courtesy of';

  const imgCreditLink = imgCreditP.appendChild(createElement('a'));
  imgCreditLink.classList.add('imgCreditLink');
  imgCreditLink.href = 'https://unsplash.com/photos/EqoCUzG9200';
  imgCreditLink.textContent = 'Mahmoud Fawzy';
}

export function selectElement(element) {
  return document.querySelector(element);
}

export function createElement(element) {
  return document.createElement(element);
}
