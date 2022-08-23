import { ICountry } from "../../api/countries";

export interface CountriesReducerActions {
  type: 'FILTER_TEXT' | 'SET'
  newCountries?: ICountry[]
  filterText?: string 
}

const countriesReducer = (countries: ICountry[], action: CountriesReducerActions) => {
  switch (action.type) {
    case "FILTER_TEXT":
      return countries.filter(country => {
        if(!action.filterText) return countries
        return country.name.common.includes(action.filterText)
      })
    case "SET":
      return action.newCountries!
    default:
      return countries
  }
}

export default countriesReducer