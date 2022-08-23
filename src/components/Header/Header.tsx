import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import HeaderContainer from "./style"

interface Props {
  changeTheme: () => void
}

const Header: React.FC<Props> = ({ changeTheme }) => {
  const {title ,icon, colors: { text } } = useContext(ThemeContext)

  return(
    <HeaderContainer>
      <p>Where in the world?</p>
      <div 
      style={{
        width: '7%',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        cursor: 'pointer'
        }}
      onClick={changeTheme}
      >
        <FontAwesomeIcon color={text} icon={icon}/>
        <p style={{textTransform: 'capitalize'}}>{title} mode</p>
      </div>
    </HeaderContainer>
  )
}

export default Header