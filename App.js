import './App.css';
import Navbar from "./Header/Navbar"
import Menu from "./pages/Menu"
import  Contact from "./pages/Contact"
import  Location from "./pages/Location"
import About from "./pages/About"
import { BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Navbar/>}>
    <Route index element = {<Menu/>}/>
    <Route path = "location" element = {<Location/>}/>
    <Route path = "about" element = {<About/>}/>
    <Route path = "Contact" element = {<Contact/>}/>
    </Route>
  
    </Routes>
    </BrowserRouter>
    
    
  
  );
}

export default App;
