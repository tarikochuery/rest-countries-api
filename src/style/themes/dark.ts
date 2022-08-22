import { faSun } from '@fortawesome/free-regular-svg-icons'
import { DefaultTheme } from 'styled-components'

const dark: DefaultTheme = {
  title: 'dark',

  icon: faSun,

  colors: {
    background: 'hsl(207, 26%, 17%)',
    elements: 'hsl(209, 23%, 22%)',
    input: 'hsl(0, 0%, 100%)',
    text: 'hsl(0, 0%, 100%)'
  }
}

export default dark