import { useContext } from "react"
import { ICountry } from "../../services/api/countries"
import CountriesContext from "../../services/context/CountriesContext/CountriesContext"
import { BorderButton } from "../BorderButton/BorderButton"
import { Container, DataContainer } from "./style"

interface Props {
  country: ICountry
}

export const CountryData:React.FC<Props> = ({ country }) => {
  const countries = useContext(CountriesContext)
  const {
    name: {
      common: name,
      nativeName: nativeNameObject
    },
    capital,
    population,
    region,
    subregion,
    tld,
    borders,
    languages: languagesObject,
    currencies: currenciesObject,
  } = country

  const bordersNames = (borders.length !== 0 && countries.length !== 0) && borders.map(border => {
    const borderData = countries.filter(country => country.cca3 === border)
    const borderName = borderData[0].name.common
    const borderCca3 = borderData[0].cca3
    return {name: borderName, cca3: borderCca3}
  })

  const languagesArrays = Object.entries(languagesObject)
  const languages = languagesArrays.map(array => array[1])

  const nativeNameArrays = Object.entries(nativeNameObject)
  const nativeName = nativeNameArrays[0][1].common

  const currenciesArrays = Object.entries(currenciesObject)
  const currency = currenciesArrays[0][1].name

  return (
    <Container>
      <h2>{name}</h2>
      <DataContainer>
        <p><strong>Native Name: </strong>{nativeName}</p>
        <p><strong>Population: </strong>{population.toLocaleString('en')}</p>
        <p><strong>Region: </strong>{region}</p>
        <p><strong>Sub Region: </strong>{subregion}</p>
        <p><strong>Capital: </strong>{capital}</p>
        <p><strong>Top Level Domain: </strong>{tld}</p>
        <p><strong>Currencies: </strong>{currency}</p>
        <p><strong>Languages: </strong>{languages.join(', ')}</p>
      </DataContainer>
      {bordersNames && 
        <div>
          <strong>Border Countries:</strong>
          {bordersNames.map((border, idx) => <BorderButton cca3={border.cca3} name={border.name} key={idx}/>)}
        </div>
      }
    </Container>
  )
}