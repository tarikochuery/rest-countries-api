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
  const [filters, setFilters] = useState<{filterText: string, filterRegion: Region}>({filterText: '', filterRegion: undefined})

  const filterCountriesByName = (filterText: string) => {
    if(!filterText) {
      setFilters({...filters, filterText: ''})
      return
    }
    setFilters({...filters, filterText})
  }

  const filterCountriesByRegion = (filterRegion: Region) => {
    if(!filterRegion) {
      setFilters({...filters, filterRegion: undefined})
      return
    }
    setFilters({...filters, filterRegion})
  }

  const filterCountries = () => {
    if (!filters.filterText && !filters.filterRegion) {
      setFilteredCountries(countries)
      return
    }

    const newFilteredCountries = countries.filter(country => {
      if (!filters.filterText) {
        return country.region === filters.filterRegion
      }

      if (!filters.filterRegion) {
        return country.name.common.toLowerCase().includes(filters.filterText.toLowerCase())
      }

      return country.name.common.toLocaleLowerCase().includes(filters.filterText.toLocaleLowerCase()) && country.region === filters.filterRegion

    })

    setFilteredCountries(newFilteredCountries)
  }

  useEffect(() => {
    filterCountries()
  }, [countries, filters])

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