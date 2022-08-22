import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { DefaultTheme } from 'styled-components'

const light: DefaultTheme = {
  title: 'light',

  icon: faMoon,

  colors: {
    background: 'hsl(0, 0%, 98%)',
    elements: 'hsl(0, 0%, 100%)',
    input: 'hsl(0, 0%, 52%)',
    text: 'hsl(200, 15%, 8%)'
  }
}

export default light