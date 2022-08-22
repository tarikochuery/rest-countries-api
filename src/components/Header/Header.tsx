import HeaderContainer from "./style"

interface Props {
  changeTheme: () => void
}

const Header: React.FC<Props> = ({ changeTheme }) => {

  return(
    <HeaderContainer>
      <p>Where in the world?</p>
    </HeaderContainer>
  )
}

export default Header