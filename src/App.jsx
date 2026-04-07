import { Navbar } from "./Components/Navbar"
import { BrowserRouter } from "react-router-dom";
import { Routes , Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Vedio } from "./Pages/Vedio";
import { useState } from "react";



function App() {
  
  const[ sidebar , setSidebar] = useState(true);

  return (
    <>
    <Navbar setSidebar={setSidebar}/>
    <Routes>
      <Route path="/" element={ <Home  sidebar={sidebar}/>}/>
      <Route path="/video/:categoryId/:videoId" element={<Vedio />}/>
    </Routes>
    </>
  )
}

export default App
