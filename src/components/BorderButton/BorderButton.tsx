import { Link } from "react-router-dom"
import { BorderButtonStyle } from "./style"

interface Props {
  name: string,
  cca3: string
}

export const BorderButton: React.FC<Props> = ({ cca3, name }) => {
  return (
    <Link to={`/${cca3}`}>
      <BorderButtonStyle>
        {name}
      </BorderButtonStyle>
    </Link>
  )
}