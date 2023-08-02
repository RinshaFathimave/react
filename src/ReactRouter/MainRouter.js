import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Service from "./Pages/Services";
import { Route, Routes,Link } from "react-router-dom";




function MainRouter(){
    return(
<div>
    <ul>
        <li>
           <Link to="/">Home</Link>
           
           </li>
           <li>
           <Link to="About">About</Link>
           </li>
           <li>
            <Link to="Contact">Contact</Link>
           </li>
           <li>
            <Link to="Service">Service</Link>
           </li>
        
    </ul>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Service" element={<Service />} />
    
        
    </Routes>
    </div>
    )
    
}
export  default MainRouter;