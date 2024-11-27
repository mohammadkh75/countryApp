export interface Country {
  countryName: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  altSpellings: string[];
  population: number;
  area: number;
  region: string;
  continents: string[];
  independent: boolean;
  unMember: boolean;
  status: string;

  cca2: string;
  cca3: string;
  ccn3: string;
  tld: string[];

  languages: { [key: string]: string };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
  };

  latlng: number[];
  landlocked: boolean;
  capital: string[];
  capitalInfo: {
    latlng: number[];
  };

  timezones: string[];
  startOfWeek: string;

  car: {
    signs: string[];
    side: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };

  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: object;

  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };

  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
}
