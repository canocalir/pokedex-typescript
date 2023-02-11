import { useAppSelector } from './app/hooks'
import AppRouter from './router/AppRouter'
import { GlobalStyles } from './styles/globalStyles'

function App() {

  const {isDarkMode} = useAppSelector(state => state.themeChanger)

  return (
    <div>
      <GlobalStyles isDarkMode={isDarkMode}/>
      <AppRouter/>
    </div>
  )
}

export default App
