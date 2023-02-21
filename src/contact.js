import pizzaPalaceLocation from './pizza-palace-location.png';

export default function createContactContent() {
  const container = document.createElement('div');
  const contactNumber = document.createElement('p');
  const address = document.createElement('p');
  const locationImage = document.createElement('img');
  container.id = 'contact-content-container';
  container.classList.add('active-content');
  locationImage.src = pizzaPalaceLocation;
  locationImage.width = 300;
  locationImage.height = 300;
  contactNumber.textContent = 'Call us: 123456789';
  address.textContent = '317 Abbey Ln, Leicester LE4 5QJ, United Kingdom';
  container.appendChild(address);
  container.appendChild(locationImage);
  container.appendChild(contactNumber);
  return container;
}
