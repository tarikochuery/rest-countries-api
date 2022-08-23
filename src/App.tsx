import { DefaultTheme, ThemeProvider } from "styled-components"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import CountriesProvider from "./services/context/CountriesContext/CountriesProvider"
import usePersistedState from "./services/hooks/usePersistedState"
import dark from "./style/themes/dark"
import light from "./style/themes/light"

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('key', light)
  const changeTheme = () => {
    theme.title === 'light' ? setTheme(dark) : setTheme(light)
  }

  return (
    <ThemeProvider theme={theme}>
      <CountriesProvider>
        <Header changeTheme={changeTheme}/> 
        <Home />
      </CountriesProvider>
    </ThemeProvider>
  )
}

export default App
