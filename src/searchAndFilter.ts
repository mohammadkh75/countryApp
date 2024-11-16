export function createSearchAndFilter() {
    const container = document.createElement('div');
    container.className = 'flex flex-col md:flex-row justify-between items-center gap-4 p-6 bg-white shadow-md';
  
    // Search Box
    const searchBox = document.createElement('div');
    searchBox.className = 'relative w-full md:w-1/3';
  
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search for a country...';
    searchInput.className =
      'w-full p-3 pl-10 text-gray-900 bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-500';
  
    const searchIcon = document.createElement('span');
    searchIcon.className =
      'material-icons absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400';
    searchIcon.textContent = 'search';
  
    searchBox.appendChild(searchIcon);
    searchBox.appendChild(searchInput);
  
    // Filter Box
    const filterBox = document.createElement('div');
    filterBox.className = 'relative w-full md:w-1/4';
  
    const filterSelect = document.createElement('select');
    filterSelect.className =
      'w-full p-3 text-gray-900 bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-500';
    filterSelect.id = 'regionFilter';
  
    const filterOptions = ['Filter by Region', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];
    filterOptions.forEach((option) => {
      const opt = document.createElement('option');
      opt.value = option.toLowerCase();
      opt.textContent = option;
      filterSelect.appendChild(opt);
    });
  
    filterBox.appendChild(filterSelect);
  
    
    container.appendChild(searchBox);
    container.appendChild(filterBox);
  
    
    const parentElement = document.getElementById('searchAndFilter'); // یا یک محل مناسب دیگر
    if (parentElement) {
      parentElement.appendChild(container);
    }
  }
  