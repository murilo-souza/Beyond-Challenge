import { AirportContextProvider } from './context/airport-context'
import { Home } from './pages/home'

export function App() {
  return (
    <AirportContextProvider>
      <Home />
    </AirportContextProvider>
  )
}
