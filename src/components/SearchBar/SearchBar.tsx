import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon,  } from "@fortawesome/react-fontawesome"
import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import SearchBarStyle, { Input } from "./styles"

interface Props {
  filterCountries: (filterText: string) => void
}

const SearchBar: React.FC<Props> = ({ filterCountries }) => {
  const { colors: { input } } = useContext(ThemeContext)
  

  const handleInputChange = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement
    const searchValue = input.value
    filterCountries(searchValue)
  }

  return (
    <SearchBarStyle>
      <FontAwesomeIcon color={input} icon={faMagnifyingGlass}/>
      <Input onChange={handleInputChange} placeholder="Search for a country..." />
    </SearchBarStyle>
  )
}

export default SearchBar