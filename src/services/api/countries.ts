const baseURL = 'https://restcountries.com/v3.1/all'

export interface ICountry {
  name: {
    common: string,
    official: string,
    nativeName: Object
  },
  capital: string[],
  region: string,
  flags: {
    png: string
  },
  population: number,
  cca3: string,
  borders: string[],
  tld: string[],
  subregion: string,
  languages: Object,
  currencies: Object
}

const getCountries = async () => {
  const data: Response = await fetch(baseURL)
  const countries: Promise<ICountry[]> = data.json()
  return countries
}

export default getCountries