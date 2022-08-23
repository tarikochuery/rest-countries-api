import React, { useContext, useState } from "react"
import { ICountry } from "../../services/api/countries"
import CountriesContext, { ICountriesContext } from "../../services/context/CountriesContext/CountriesContext"
import CountryCard from "../CountryCard/CountryCard"
import SearchBar from "../SearchBar/SearchBar"
import ListContainer from "./styles"

const CountriesList = () => {
  const { countries } = useContext(CountriesContext) as ICountriesContext
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

  return (
    <>
      <div style={{marginBottom: '50px'}}>
        <SearchBar filterCountries={filterCountries}/>
      </div>
      <ListContainer>
        {countries ? 
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