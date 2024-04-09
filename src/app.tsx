import { CoordinatesContextProvider } from './context/coordinates-context'
import { Home } from './pages/home'

export function App() {
  return (
    <CoordinatesContextProvider>
      <Home />
    </CoordinatesContextProvider>
  )
}
