
import { fetchCountries } from './api';
import { Country } from './types/types';




export async function renderCountries() :Promise<void> {

  const countries : Country[] = await fetchCountries();
  const container = document.getElementById('countryContainer');
  if(container)
  {
    countries.forEach(country =>
    {
      const coutnryCard = document.createElement('figure');
      coutnryCard.className = 'bg-white  flex-col items-center';
      const img = document.createElement('img');
      img.src = country.flag;
      img.style.width = '200px';
      img.style.height = '100px';
      coutnryCard.append(img);
      const countryName = country.name;
      const countryCapital = country.capital;
      coutnryCard.append(countryName);
      coutnryCard.append(countryCapital);
      container.appendChild(coutnryCard);
    }
    )
  }
}

renderCountries();

