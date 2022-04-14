import { Router, Routes, Route } from "react-router-dom"
import './App.css';
import Menu from './Menu.js';
import Home from './Home.js';
import Contact from './Contact.js';
import Heroslider from './Home/Heroslider.js'

function App() {
  return (
    <div>
          <Menu/>
      <Router basename="/videoa">
         <Routes>
            <Route path="/" exact element={ <Home/> } />
            <Route path="/contact" element={ <Contact/> } />
         </Routes>
      </Router>

    </div>
  );
}

export default App;
