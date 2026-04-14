import { Navbar } from "./Components/Navbar"
import { BrowserRouter } from "react-router-dom";
import { Routes , Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Vedio } from "./Pages/Vedio";
import { useState } from "react";
import { Layout } from "./Layout";
import { Search } from "./Pages/Search";
import { SearchVedio } from "./Pages/SearchVedio";



function App() {
  
  const[ sidebar , setSidebar] = useState(true);

  return (
    <>
    
    <Routes>
      <Route element={ <Layout />}>
      <Route path="/" element={ <Home  sidebar={sidebar}/>}/>
      <Route path="/search/:query" element={ <Search />}/>
      <Route path="/searchvedio/:query/:videoId" element={<SearchVedio />}/>
      <Route path="/video/:categoryId/:videoId" element={<Vedio />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
