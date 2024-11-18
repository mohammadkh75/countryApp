export function createHeader() {
  const header = document.getElementById('header');
  const headerElement = document.createElement('header');
  headerElement.className = 'flex  justify-between items-center  p-6 bg-white  shadow-md';
  const title = document.createElement('span');
  title.textContent = 'Where in the world?';
  title.className = 'font-sans font-extrabold text-veryDarkBlueText';
  const toggleButton = document.createElement('button');
  toggleButton.id = 'darkModeToggle';
  toggleButton.className =
    ' font-semibold flex items-center space-x-2 text-veryDarkBlueText   px-4 py-2 rounded-md';
    const toggleIcon = document.createElement('span');
    toggleIcon.className = 'material-icons';
    toggleIcon.textContent = 'dark_mode';
  const toggleText = document.createElement('span');
  toggleText.textContent = 'Dark Mode';
  toggleButton.appendChild(toggleIcon);
  toggleButton.appendChild(toggleText);
  headerElement.appendChild(title);
  headerElement.appendChild(toggleButton);
  if (header) {
    header.appendChild(headerElement);
  }
}
