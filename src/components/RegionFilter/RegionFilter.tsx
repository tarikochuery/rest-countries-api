import React from "react"
import { Region } from "../CountriesList/CountriesList"
import Select from "./style"

interface Props {
  filterCountries: (region: Region) => void
}

const RegionFilter: React.FC<Props> = ({ filterCountries }) => {
  const handleChange = (e: React.ChangeEvent) => {
    const input = e.target as HTMLSelectElement
    const searchValue = input.value as Region
    console.log(searchValue)
    filterCountries(searchValue)
  }

  return (
    <Select onChange={handleChange}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </Select>
  )
}

export default RegionFilter