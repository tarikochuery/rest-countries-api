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
      <h2>Where in the world?</h2>
      <div 
      style={{
        width: '8%',
        minWidth: '105px',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        cursor: 'pointer'
        }}
      onClick={changeTheme}
      >
        <FontAwesomeIcon color={text} icon={icon} style={{marginRight: '5px'}}/>
        <p style={{textTransform: 'capitalize'}}>{title === 'light' ? 'dark' : 'light'} mode</p>
      </div>
    </HeaderContainer>
  )
}

export default Header