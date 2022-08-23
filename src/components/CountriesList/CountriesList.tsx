import { useContext, useEffect, useState } from "react"
import { ICountry } from "../../services/api/countries"
import CountriesContext from "../../services/context/CountriesContext/CountriesContext"
import CountryCard from "../CountryCard/CountryCard"
import SearchBar from "../SearchBar/SearchBar"
import ListContainer from "./styles"

const CountriesList = () => {
  const countries = useContext(CountriesContext)
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>(countries)

  const filterCountries = (filterText: string) => {
    if(!filterText) {
      setFilteredCountries(countries)
      return
    }
    
    const newCountries = countries.filter(country => {
      return country.name.common.includes(filterText)
    })

    setFilteredCountries(newCountries)
  }

  useEffect(() => {
    setFilteredCountries(countries)
  }, [countries])

  return (
    <>
      <div style={{marginBottom: '50px'}}>
        <SearchBar filterCountries={filterCountries}/>
      </div>
      <ListContainer>
        {filteredCountries ? 
          filteredCountries.map((country, idx) => (
            <CountryCard key={idx} country={country} />
          ))
          :
          <p> Loading... </p>
        }
      </ListContainer>
    </>
  )
}

export default CountriesList