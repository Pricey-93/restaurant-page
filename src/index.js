function createNavigationBar() {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const homeTab = document.createElement('li');
  const menuTab = document.createElement('li');
  const contactTab = document.createElement('li');
  h1.textContent = 'Pizza Palace';
  ul.appendChild(homeTab);
  ul.appendChild(menuTab);
  ul.appendChild(contactTab);
  nav.appendChild(ul);
  header.appendChild(h1);
  header.appendChild(nav);
  return header;
}

const content = document.getElementById('content');
const navigationBar = createNavigationBar();
content.appendChild(navigationBar);
