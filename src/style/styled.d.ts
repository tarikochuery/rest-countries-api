import 'styled-components'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    icon: IconDefinition,

    colors: {
      elements: string,
      background: string,
      text: string, 
      input: string,
    }
  }
}