import { useContext, useEffect, useState } from "react"
import { ICountry } from "../../services/api/countries"
import CountriesContext from "../../services/context/CountriesContext/CountriesContext"
import CountryCard from "../CountryCard/CountryCard"
import RegionFilter from "../RegionFilter/RegionFilter"
import SearchBar from "../SearchBar/SearchBar"
import ListContainer from "./styles"

export type Region = 'Africa' | 'America' | 'Asia' | 'Oceania' | 'Europe' | undefined

const CountriesList = () => {
  const countries = useContext(CountriesContext)
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>(countries)

  const filterCountriesByName = (filterText: string) => {
    if(!filterText) {
      setFilteredCountries(countries)
      return
    }
    
    const newCountries = countries.filter(country => {
      return country.name.common.includes(filterText)
    })

    setFilteredCountries(newCountries)
  }

  const filterCountriesByRegion = (region: Region) => {
    if(!region) {
      setFilteredCountries(countries)
      return
    }
    const newFilteredCountries = countries.filter(country => {
      return country.region === region
    })

    setFilteredCountries(newFilteredCountries)
  }

  useEffect(() => {
    setFilteredCountries(countries)
  }, [countries])

  return (
    <>
      <div style={{
          marginBottom: '50px',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <SearchBar filterCountries={filterCountriesByName}/>
        <RegionFilter filterCountries={filterCountriesByRegion}/>
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