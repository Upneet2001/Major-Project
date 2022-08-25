import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function SocNavbar() {

var uri = "http://localhost:1200/";
var navi = useNavigate();

    useEffect(() => {
        var id = localStorage.getItem('Studentlogin')
        if(!id){
            navi('/Login');
        }
    })

    const [name, setname] = useState("");
      var id = localStorage.getItem('Studentlogin')
    function checkid() {
      if (id) {
        axios.post(uri + "getoneuser", { Id: id }).then((succ) => {
          console.log(succ.data);
          setname(succ.data.Name);
        });
      }
    }
    useEffect(() => {
      checkid();
    }, [id]);

function logout(){
      localStorage.removeItem('Studentlogin');
      navi('/Login');
}

  return (
    <div className="pad-0">
      <div className="col-lg-10 col-xs-10 right_col pad-0">
        {/* <!-- top navigation --> */}
        <div className="navbar navbar-default navisoc">
          <div className="container-fluid">
            <div className="navbar-header">
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a data-toggle="dropdown" style={{color:'black', textTransform:'capitalize'}}>
                    {name} <span className="glyphicon glyphicon-user" style={{color:"black"}}></span>
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
