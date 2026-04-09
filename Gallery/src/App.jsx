import './App.css';
import {Route,Navigate,useNavigate,Routes, Link} from "react-router-dom";
import Gallery from './Gallery.jsx';
import Home from './Home.jsx';
import NewGallery from './NewGallery.jsx';
import { useState } from 'react';

function App()
{
    const navigate = useNavigate();
    const [active,setActive] = useState("home");

  return(
    <div className="parent-container">
      <header className="head-topper">
        <div className="topper-outer">
          <span  className="ini-name">My Gallery!</span>
          <nav className="navigatores">
            <Link to="/">
              <button className={active==="home"?"navigate active":"navigate"} onClick={()=>setActive("home")}>Home</button>
            </Link>
            {/* <button onClick={()=>navigate("/")}>Home</button> */}
            <Link to="/gallery" >
              <button className={active==="gallery"?"navigate active":"navigate"} onClick={()=>setActive("gallery")}>Gallery</button>
            </Link>
            <Link to="/newgallery" >
              <button className={active==="new"?"navigate active":"navigate"} onClick={()=>setActive("new")}>New Gallery</button>
            </Link>
          </nav>
        </div>
      </header>
      <main>
          {/* Render the pages */}
          {/*render the home */}
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