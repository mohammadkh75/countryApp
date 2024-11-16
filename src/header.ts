export function createHeader() {
  const header = document.getElementById('header');
  const headerElement = document.createElement('header');
  headerElement.className = 'flex justify-between items-center p-6 bg-white dark:bg-gray-800 shadow-md';
  const title = document.createElement('h1');
  title.textContent = 'Where in the world?';
  title.className = 'text-2xl font-bold text-gray-900 dark:text-gray-100';
  const toggleButton = document.createElement('button');
  toggleButton.id = 'darkModeToggle';
  toggleButton.className =
    'text-sm font-semibold flex items-center space-x-2 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-md';
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
