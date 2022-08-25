import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function SocNavbar() {

var uri = "http://localhost:1200/";
var navi = useNavigate();

function logout(){
}

  return (
    <div className="pad-0">
      <div className="col-lg-10 col-xs-10 right_col pad-0">
        {/* <!-- top navigation --> */}
        <div className="navbar navbar-default navisoc">
          <div className="container-fluid">
            <div className="navbar-header"></div>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a data-toggle="dropdown">
                  <span className="glyphicon glyphicon-user" style={{color:"black"}}></span>
                  <span className="caret" style={{color:"black"}}></span>
                </a>
                <ul className="dropdown-menu" style={{boxShadow:"-2px 2px gray"}}>
                  <li>
                    <a onClick={logout} style={{textAlign:"center", fontWeight:"bold"}}>Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
