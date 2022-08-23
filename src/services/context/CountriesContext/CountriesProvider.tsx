import { useEffect, useReducer, useState } from "react"
import getCountries, { ICountry } from "../../api/countries"
import CountriesContext from "./CountriesContext"
import countriesReducer from "./countriesReducer"

export interface ICountriesActions {
  setCountries: (countries: ICountry[]) => void
  filterCountries: (filterText: string) => void
}

interface Props {
  children: React.ReactNode
}

const CountriesProvider: React.FC<Props> = ({children}) => {
  const [countries, dispatcher] = useReducer(countriesReducer, [])

  const setCountries = (newCountries: ICountry[]) => {
    dispatcher({
      type: "SET",
      newCountries
    })
  }

  const countriesActions = {
    setCountries,
    filterCountries: (filterText: string) => {
      dispatcher({
        type: "FILTER_TEXT",
        filterText
      })
    }
  }

  useEffect(() => {
    const getCountriesData = async () => {
      const countriesData = await getCountries()
      setCountries(countriesData)
    }

    getCountriesData()
  }, [])

  return (
    <CountriesContext.Provider value={{countries, countriesActions}}>
      {children}
    </CountriesContext.Provider>
  )
}

export default CountriesProvider