import createHomeContent from './home';
import createMenu from './menu';

function createNavigationBar() {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const homeTab = document.createElement('li');
  const menuTab = document.createElement('li');
  const contactTab = document.createElement('li');
  h1.textContent = 'Pizza Palace';
  homeTab.textContent = 'Home';
  menuTab.textContent = 'Menu';
  contactTab.textContent = 'Contact';
  ul.appendChild(homeTab);
  ul.appendChild(menuTab);
  ul.appendChild(contactTab);
  nav.appendChild(ul);
  header.appendChild(h1);
  header.appendChild(nav);
  return header;
}

function createFooter() {
  const footer = document.createElement('footer');
  const p = document.createElement('p');
  p.textContent = 'placeholder';
  footer.appendChild(p);
  return footer;
}

const content = document.getElementById('content');
content.appendChild(createNavigationBar());
// content.appendChild(createHomeContent());
content.appendChild(createMenu());
// content.appendChild(createFooter());
