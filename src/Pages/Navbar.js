import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebaradmin from "./Sidebaradmin";

export default function Navbar() {
  return (
    <div className="pad-0"> 
    <div className="col-lg-10 right_col">
    {/* <!-- top navigation --> */}
    <div className="navbar navbar-default navi">
    <div className="navbar-header">
    </div>
    <ul className="nav navbar-nav navbar-right">
    <li className="dropdown"><a className="dropdown-toggle list" data-toggle="dropdown">Society<span className="caret"></span></a>
        <ul className="dropdown-menu">
        <li className="list"><Link to="/Soclogin">Society Login</Link></li>
        <li  className="list"><Link to="/Societypanel">Society Panel</Link></li>
        </ul>
    </li>
    <li className="dropdown"><a className="dropdown-toggle list" data-toggle="dropdown">Students<span className="caret"></span></a>
        <ul className="dropdown-menu">
        <li  className="list"><Link to="/Login">Student's Login</Link></li>
        <li  className="list"><Link to="/Register">Student's Registeration</Link></li>
        </ul>
    </li>
    </ul>

</div>
    
</div></div>
  )
}
