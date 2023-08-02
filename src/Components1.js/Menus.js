
import React, { useState, useEffect } from "react";
import Menuitems from "./Menuitem";
import Recipeindex from "./Recipeinde";
const Menus=()=> {
    const [url,setUrl]=useState("https:/themealdb.com/api/json/v1/1/search.php?f=a");
    useEffect(()=>{
   fetch(url).then(res=>res.json()).then(data=>{
    console.log(data.Menus);
   })
    },[url])
   return(
<>
    <div className="main">
        <div className="heading">
            <h1>search your food recipe</h1>
            <h4>mxdgydydgydggdgygyg</h4>
    </div>
    <div className="search box">
        <input type="search" className="search-bar" />
    </div>
    <div className="container">
    
      <Menuitems/>
      <Menuitems/>
      <Menuitems/>
      <Menuitems/>
      <Menuitems/>
      <Menuitems/>
    </div>
    <div className="indexContainer">
        <Recipeindex/>

    </div>
    </div>
    </>
   ) 
}
export default Menus;