import createNavigationBar from './navigation-bar';
import createContactContent from './contact';
import createHomeContent from './home';
import createMenu from './menu';
import createFooter from './footer';

const content = document.getElementById('content');
content.appendChild(createNavigationBar());
content.appendChild(createHomeContent());
content.appendChild(createFooter());

// event listeners
const homeTab = document.getElementById('home-tab');
homeTab.addEventListener('click', () => {
  console.log(document.querySelector('.active-content'));
  content.replaceChild(createHomeContent(), document.querySelector('.active-content'));
});

const menuTab = document.getElementById('menu-tab');
menuTab.addEventListener('click', () => {
  console.log(document.querySelector('.active-content'));
  content.replaceChild(createMenu(), document.querySelector('.active-content'));
});

const contactTab = document.getElementById('contact-tab');
contactTab.addEventListener('click', () => {
  console.log(document.querySelector('.active-content'));
  content.replaceChild(createContactContent(), document.querySelector('.active-content'));
});
