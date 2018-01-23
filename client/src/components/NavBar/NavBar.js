import React from "react";
import "./NavBar.css";

const Nav = () =>
    <nav className= "navbar navbar-inverse navbar-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <a href="/" className="center navbar-brand">| New York Times Article Search | </a>
                <a href="/saved" className="center navbar-brand">| Saved Articles |</a>
            </div>    
        </div>    
    </nav>



export default Nav;