export default function createHomeContent() {
  const container = document.createElement('div');
  const topParagraph = document.createElement('p');
  const image = document.createElement('img');
  const bottomParagraph = document.createElement('p');
  container.id = 'home-content-container';
  container.classList.add('active-content');
  topParagraph.textContent = 'we\'ve been making the sickest pizzas since 1905!';
  bottomParagraph.textContent = 'Order online or visit us in store!';
  container.appendChild(topParagraph);
  container.appendChild(image);
  container.appendChild(bottomParagraph);
  return container;
}
