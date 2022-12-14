import { Link } from "react-router-dom"
import { ICountry } from "../../services/api/countries"
import CardContainer from "./styles"

interface Props {
  country: ICountry
}

const CountryCard: React.FC<Props> = ({ country }) => {
  const { capital, 
          population, 
          region, 
          name: {  
                  common: commonName 
                }, 
          flags: {
                  png: flagImg
                 },
          cca3
        } = country
  
  return (
      <CardContainer>
        <Link to={`/${cca3}`} style={{color: 'inherit'}}>
          <div>
          <img 
            src={flagImg} 
            alt={`${commonName} flag`} 
            style={{
              width: '100%',
              height: '160px'
            }}
          />
        </div>
        <div
          style={{
            height: '50%',
            padding: '10px 20px 30px 20px',
            flexShrink: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <h2 style={{marginBottom: '10px'}}>{commonName}</h2>
          <p><strong>Population: </strong>{population.toLocaleString('en')}</p>
          <p><strong>Region: </strong>{region}</p>
          <p><strong>Capital: </strong>{capital}</p>
        </div>
        </Link>
      </CardContainer>
  )
}

export default CountryCard