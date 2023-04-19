import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
var uri = "http://localhost:1200/";

var navi = useNavigate();
    useEffect(() => {
    //   localStorage.setItem('AdminLogin', succ.data._id);
        var id = localStorage.getItem('AdminLogin')
        if(!id){
            navi('/Loginadmin');
        }
    })

function logout(){
  // axios.post(uri + 'LoginAdmin').then((succ) => {
      localStorage.removeItem('AdminLogin');
      navi('/Loginadmin');
      // console.log(succ.data);
  // })
}

  return (
    <div className="pad-0 pad-2 ">
      <div className="col-lg-10 col-lg-md-10 col-sm-9 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 right_col pad-0">
        {/* <!-- top navigation --> */}
        <div className="navbar navbar-default navi">
          <div className="container-fluid">
            <div className="navbar-header"></div>
            <ul className="nav navbar-nav navbar-right">
              {/* <li className="dropdown"><a className="dropdown-toggle list" data-toggle="dropdown">Society<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                  <li className="list"><Link to="/Soclogin">Society Login</Link></li>
                  <li  className="list"><Link to="/Societypanel">Society Panel</Link></li>
                  </ul>
              </li>
              <li className="dropdown"><a className="dropdown-toggle list" data-toggle="dropdown">Students<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                  <li  className="list"><Link to="/Login">Student's Login</Link></li>
                  <li  className="list"><Link to="/Register">Student's Registration</Link></li>
                  </ul>
              </li> */}
              <li className="dropdown">
                <a data-toggle="dropdown">
                  <span className="glyphicon glyphicon-user"></span>
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a onClick={logout}>Logout</a>
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
