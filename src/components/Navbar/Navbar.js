import React, { useState ,useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder'
function Navbar() {
    const [expandNavbar,setexpandNavbar]=useState(false)
    const location=useLocation()
    useEffect(() => {
        setexpandNavbar(false)
        },
     [location]);
  return (
    <div className="navbar" id={expandNavbar ? "open":"close"}>
      <div className="toggleButton">
        <button onClick={()=>{
            setexpandNavbar(!expandNavbar)
        }}><ReorderIcon /></button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
