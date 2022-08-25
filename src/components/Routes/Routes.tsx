import { Route, Routes } from "react-router-dom"
import { Country } from "../../pages/Home/Country/Country"
import Home from "../../pages/Home/Home"

export const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:countryCode" element={<Country />}/>
  </Routes>
)