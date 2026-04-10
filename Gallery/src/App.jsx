import './App.css';
import {Route,Navigate,useNavigate,Routes, Link} from "react-router-dom";
import Gallery from './Gallery.jsx';
import Home from './Home.jsx';
import NewGallery from './NewGallery.jsx';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import homeTree from './assets/homeTree.png';

function App()
{
    const navigate = useNavigate();
    const location = useLocation();
    // const [active,useActive] = useState("home");
    //issue here when we refresh the page by default we get the color for home .

  return(
    <div className="parent-container">
      <header className="head-topper">
        <div className="topper-outer">
          <span  className="ini-name">My Gallery!</span>
          <nav className="navigatores">
            {/* link works as an anchor tag inside any button acts like a navigator but does not take new tab fast and reliable */}
            <Link to="/">
              {/* <button className={active==="home"?"navigate active":"navigate"} onClick={()=>setActive("home")}>Home</button> */}
              <button className={location.pathname==="/"?"navigate active":"navigate"}>Home</button>
            </Link>
            {/* <button onClick={()=>navigate("/")}>Home</button> */}
            <Link to="/gallery" >
              <button className={location.pathname==="/gallery"?"navigate active":"navigate"}>Gallery</button>
            </Link>
            <Link to="/newgallery" >
              <button className={location.pathname==="/newgallery"?"navigate active":"navigate"}>New Gallery</button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="middle-main">
          {/* Render the pages */}
          {/*render the home */} 
          <img src={homeTree} className="main-homeTree"/>
          <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/gallery' element={<Gallery/>} ></Route>
            <Route path='/newgallery' element={<NewGallery/>} ></Route>
          </Routes>
      </main>
      <footer className="end-footer">
        <div className="footer-container">
          <h1 className='footer-message'>Gallery!</h1>
          <p className='footer-copyrights'> &copy; Copyrigth 2026 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
export default App