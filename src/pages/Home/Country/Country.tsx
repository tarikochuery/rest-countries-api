import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ICountry } from "../../../services/api/countries"

export const Country = () => {
  const { countryCode } = useParams()
  const [countryData, setCountryData] = useState<ICountry>()

  useEffect(() => {
    const getCountryData = async () => {
      
      const data = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      const json = await data.json()
      const [country] = json

      setCountryData(country)
    }

    getCountryData()
  }, [])

  return (
    <h1>{countryData ? countryData.name.common : 'loading...'}</h1>
  )
}