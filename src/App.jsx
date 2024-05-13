import { BrowserRouter, Route, Routes } from "react-router-dom"
import FetchData from "./components/FetchData"
import NavBar from "./components/NavBar"
import Services from "./routes/Services"


function App() {
  return (
    <div>
     <NavBar/>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
     </Routes>
     
     </BrowserRouter>
    
    </div>
  )
}

export default App;