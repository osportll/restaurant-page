export function initializePage() {
  const body = selectElement('.body');
  const content = selectElement('#content');

  const newDiv = createElement('div');
  newDiv.classList.add('mainContainer');

  /* const headLine = createElement('h1');
  headLine.textContent = 'Restaurant'; */

  const description = createElement('h1');
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

  const home = linksContainer.appendChild(createElement('a'));
  home.classList.add('home');
  home.textContent = 'Home';
  home.href = '#';
  const menu = linksContainer.appendChild(createElement('a'));
  menu.classList.add('menu');
  menu.textContent = 'Menu';
  menu.href = '#';
  const about = linksContainer.appendChild(createElement('a'));
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
}

function selectElement(element) {
  return document.querySelector(element);
}

function createElement(element) {
  return document.createElement(element);
}
