import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { ButtonContainer } from "./style"

export const BackButton = () => {
  return(
    <Link to='/' style={{width: '120px'}}>
      <ButtonContainer>
        <FontAwesomeIcon icon={faArrowLeft} />
        <p style={{marginLeft: '10px'}} >Back</p>
      </ButtonContainer>
    </Link>
  )
}