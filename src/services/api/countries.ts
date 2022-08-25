const baseURL = 'https://restcountries.com/v3.1/all'

export interface ICountry {
  name: {
    common: string,
    official: string
  },
  capital: string[],
  region: string,
  flags: {
    png: string
  },
  population: number,
  cioc: string

}

const getCountries = async () => {
  const data: Response = await fetch(baseURL)
  const countries: Promise<ICountry[]> = data.json()
  return countries
}

export default getCountries