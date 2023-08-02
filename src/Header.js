import "./style.css"
import React from "react";
import Headerleft from "./Headerleft";
import Headerright from "./Headerright";

function Header() {
    return (
        <div className="Header">
            <Headerleft/>
            <Headerright/>
        </div>
    )
}
export default Header
