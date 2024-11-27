import { getInfoCountries } from './api';
import { Country } from './types/types';

export async function renderCountries() :Promise<void> {
  try {
    const countries : Country[] = await getInfoCountries();
    const container = document.getElementById('countryContainer');
    if (container) {
      container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6'; 

      countries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.className = 'bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105'; // استایل کارت و انیمیشن hover

        const img = document.createElement('img');
        img.src = country.flag;
        img.className = 'w-full h-40 object-cover'; 
        const info = document.createElement('div');
        info.className = 'p-4 text-gray-800 text-center'; 

        info.innerHTML = `
          <h2 class="text-lg font-extrabold mb-2">${country.countryName.common}</h2>
          <p class="text-sm"><strong>Population:</strong> ${country.population.toLocaleString()}</p>
          <p class="text-sm"><strong>Region:</strong> ${country.region}</p>
          ${country.capital ? `<p class="text-sm"><strong>Capital:</strong> ${country.capital[0]}</p>` : ''}
        `;

        countryCard.appendChild(img);
        countryCard.appendChild(info);
        container.appendChild(countryCard);
      });
    }
  } catch (error) {
    console.error('Error rendering countries:', error);
  }
}

renderCountries();
