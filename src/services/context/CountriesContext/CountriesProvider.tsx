import { useEffect, useState } from "react"
import getCountries, { ICountry } from "../../api/countries"
import CountriesContext from "./CountriesContext"


interface Props {
  children: React.ReactNode
}

const CountriesProvider: React.FC<Props> = ({children}) => {
  const [countries, setCountries] = useState<ICountry[]>([])


  useEffect(() => {
    const getCountriesData = async () => {
      const countriesData = await getCountries()
      setCountries(countriesData)
    }

    getCountriesData()
  }, [])

  return (
    <CountriesContext.Provider value={countries}>
      {children}
    </CountriesContext.Provider>
  )
}

export default CountriesProvider