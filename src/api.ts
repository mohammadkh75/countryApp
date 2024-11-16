import { Country } from "./types/types";

export async function fetchCountries() : Promise<Country[]> {

    try {
    
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error('Failed to fetch countries');
      }
      const data = await response.json();
      return data.map((country : any) : Country =>({
        name : country.name.common,
        capital: country.capital ,
        population: country.population,
        region: country.region,
        flag: country.flags.png,
      })
    )
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  