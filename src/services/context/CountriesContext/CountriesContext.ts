import { createContext } from 'react'
import { ICountry } from '../../api/countries'
import { ICountriesActions } from './CountriesProvider'

export interface ICountriesContext {
  countries: ICountry[]
  countriesActions: ICountriesActions
}


const CountriesContext = createContext<ICountriesContext | null>(null)

export default CountriesContext