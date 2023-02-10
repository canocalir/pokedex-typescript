import Navbar from './components/Navbar/Navbar'
import AppRouter from './router/AppRouter'
import { GlobalStyles } from './styles/globalStyles'

function App() {

  return (
    <div>
      <GlobalStyles/>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

export default App
