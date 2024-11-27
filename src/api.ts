import axios from 'axios';
import { Country } from './types/types';

export async function getInfoCountries(): Promise<Country[]> {
  try {
    
    const response = await axios.get('https://restcountries.com/v3.1/all');
    console.log(response);
    
    return response.data.map((country: any): Country => ({
      countryName: country.name,
      altSpellings: country.altSpellings,
      population: country.population,
      area: country.area,
      region: country.region,
      continents: country.continents,
      independent: country.independent,
      unMember: country.unMember,
      status: country.status,
      cca2: country.cca2,
      cca3: country.cca3,
      ccn3: country.ccn3,
      tld: country.tld,
      languages: country.languages,
      currencies: country.currencies,
      demonyms: country.demonyms,
      latlng: country.latlng,
      landlocked: country.landlocked,
      capital: country.capital,
      capitalInfo: country.capitalInfo,
      timezones: country.timezones,
      startOfWeek: country.startOfWeek,
      car: country.car,
      idd: country.idd,
      flag: country.flags.svg,
      flags: country.flags,
      coatOfArms: country.coatOfArms,
      maps: country.maps,
      translations: country.translations
    }));
  } catch (error) {
    console.error('Failed to fetch countries', error);
    return [];
  }
}
