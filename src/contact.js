export default function createContactContent() {
  const container = document.createElement('div');
  const contactNumber = document.createElement('p');
  const address = document.createElement('p');
  const locationImage = document.createElement('img');
  contactNumber.textContent = '123456789';
  address.textContent = '317 Abbey Ln, Leicester LE4 5QJ, United Kingdom';
  container.appendChild(contactNumber);
  container.appendChild(address);
  container.appendChild(locationImage);
  return container;
}
