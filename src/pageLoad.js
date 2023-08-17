export function initializePage() {
  const content = document.querySelector('#content');

  const newDiv = document.createElement('div');

  const headLine = document.createElement('h1');
  headLine.textContent = 'Restaurant';

  const description = document.createElement('p');
  description.textContent = 'Dummy text';

  const image = document.createElement('img');
  image.src =
    '/home/oscar/repos/restaurant-page/img/victoria-shes-UC0HZdUitWY-unsplash.jpg';
  image.alt = 'Food Picture';

  content.appendChild(newDiv);
  newDiv.appendChild(headLine);
  newDiv.appendChild(description);
  newDiv.appendChild(image);
}
