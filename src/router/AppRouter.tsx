import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../views/Home/Home"
import Detail from "../views/Detail/Detail"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter