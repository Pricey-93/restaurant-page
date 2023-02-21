import legoPizzaBox from './lego-pizza-box.png';

function createMenuItem(title, description, imageUrl) {
  const container = document.createElement('div');
  const image = document.createElement('img');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  container.classList.add('menu-item');
  image.src = imageUrl;
  image.width = 100;
  image.height = 100;
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
  container.appendChild(createMenuItem('pepperoni pizza', 'This is a real good and tasty pepperoni pizza', legoPizzaBox));
  container.appendChild(createMenuItem('pineapple pizza', 'Only uncultured people disagree with this pizza', legoPizzaBox));
  container.appendChild(createMenuItem('lorem ipsum pizza', 'lorem ipsum pizza containing the finest lorum ipsums', legoPizzaBox));
  container.appendChild(createMenuItem('lorem ipsum pizza', 'lorem ipsum pizza containing the finest lorum ipsums', legoPizzaBox));
  container.appendChild(createMenuItem('lorem ipsum pizza', 'lorem ipsum pizza containing the finest lorum ipsums', legoPizzaBox));
  container.appendChild(createMenuItem('lorem ipsum pizza', 'lorem ipsum pizza containing the finest lorum ipsums', legoPizzaBox));
  container.appendChild(createMenuItem('lorem ipsum pizza', 'lorem ipsum pizza containing the finest lorum ipsums', legoPizzaBox));
  container.appendChild(createMenuItem('lorem ipsum pizza', 'lorem ipsum pizza containing the finest lorum ipsums', legoPizzaBox));
  container.appendChild(createMenuItem('lorem ipsum pizza', 'lorem ipsum pizza containing the finest lorum ipsums', legoPizzaBox));
  container.appendChild(createMenuItem('lorem ipsum pizza', 'lorem ipsum pizza containing the finest lorum ipsums', legoPizzaBox));
  return container;
}
