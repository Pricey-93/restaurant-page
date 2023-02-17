export default function createFooter() {
  const footer = document.createElement('footer');
  const p = document.createElement('p');
  p.textContent = 'placeholder';
  footer.appendChild(p);
  return footer;
}
