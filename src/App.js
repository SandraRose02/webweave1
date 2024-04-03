
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
//import axios from 'axios';

function App() {
  return (
    <BrowserRouter>



    <Routes>
          <Route path="/Home" exact element={<Home/>}/>

    
    
      <Route path="/LoginPage" exact element={<LoginPage/>}/>
      <Route path="/SignUp" exact element={<SignUp/>}/>
      <Route path="/About" exact element={<About/>}/>
      <Route path="/Contact" exact element={<Contact/>}/>
    </Routes>
   

    </BrowserRouter>
    
  );
}

export default App;
