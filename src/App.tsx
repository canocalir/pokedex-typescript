import { useAppSelector } from "./app/hooks";
import BackToTop from "./components/BackToTop/BackToTop";
import AppRouter from "./router/AppRouter";
import { GlobalStyles } from "./styles/globalStyles";

const App = () =>  {
  const { isDarkMode } = useAppSelector((state) => state.themeChanger);

  return (
    <>
      <GlobalStyles isDarkMode={isDarkMode} />
      <AppRouter />
      <BackToTop/>
    </>
  );
}

export default App;
