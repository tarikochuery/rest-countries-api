import { useEffect, useState } from "react"
import getCountries, { ICountry } from "../../services/api/countries"
import CountryCard from "../CountryCard/CountryCard"
import ListContainer from "./styles"

const CountriesList = () => {
  const [countries, setCountries] = useState<ICountry[] | undefined>([])

  useEffect(() => {
    const getCountriesList = async () => {
      const countriesData = await getCountries()
      setCountries(countriesData)
    }

    getCountriesList()
  }, [])
  
  return (
    <ListContainer>
      {countries ? 
        countries.map((country, idx) => (
          <CountryCard key={idx} country={country} />
        ))
        :
        <div> Loading... </div>
      }
    </ListContainer>
  )
}

export default CountriesList