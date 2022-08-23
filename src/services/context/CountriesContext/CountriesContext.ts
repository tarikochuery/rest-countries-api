import { createContext } from 'react'
import { ICountry } from '../../api/countries'

const CountriesContext = createContext<ICountry[]>([])

export default CountriesContext