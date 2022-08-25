import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BackButton } from "../../components/BackButton/BackButton"
import { CountryData } from "../../components/CountryData/CountryData"
import { ICountry } from "../../services/api/countries"
import { CountryContainer, ImgContainer } from "./style"

export const Country = () => {
  const navigate = useNavigate()
  const { countryCode } = useParams()
  const [country, setCountry] = useState<ICountry>()

  useEffect(() => {
    const getCountryData = async () => {
      
      const data = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      const json = await data.json()
      const [countryInfo] = json

      setCountry(countryInfo)
    }

    getCountryData()
  }, [countryCode])

  return (
    country 
    ? 
      <CountryContainer>
        <BackButton/>
        <div style={{
                    display: 'flex',
                    alignItems: 'center'
                    }}>
          <ImgContainer>
            <img 
              src={country?.flags.png} 
              alt={`${country?.name.common}`} 
              style={{width: '100%'}}
            />
          </ImgContainer>
          <CountryData country={country}/>
        </div>
      </CountryContainer>
    :
    <h1>LOADING...</h1>
  )
}