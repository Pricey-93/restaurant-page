function createMenuItem(title, description) {
  const container = document.createElement('div');
  const image = document.createElement('img');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  container.classList.add('menu-item');
  h2.textContent = title;
  p.textContent = description;
  container.appendChild(image);
  container.appendChild(h2);
  container.appendChild(p);
  return container;
}

export default function createMenu() {
  const container = document.createElement('div');
  container.id = 'menu-content-container';
  container.classList.add('active-content');
  container.appendChild(createMenuItem('pepperoni pizza', 'This is a real good pizza'));
  container.appendChild(createMenuItem('pinapple pizza', 'Only uncultured people disagree with this pizza'));
  return container;
}
