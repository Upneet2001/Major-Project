import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function SocNavbar() {

var uri = "http://localhost:1200/";
var navi = useNavigate();
  
useEffect(() => {
  var id = localStorage.getItem('SocietyLogin')
  if(!id){
      navi('/SocLogin');
  }
})


var id = localStorage.getItem('SocietyLogin')
const [name, setname] = useState("");
  const [dep, setdep] = useState("");
  function checkid() {
    if (id) {
      axios.post(uri + "getonesoc", { Id: id }).then((succ) => {
        console.log(succ.data);
        setname(succ.data.Department);
        setdep(succ.data.Society);
      });
    }
  }

  useEffect(() => {
    checkid();
  }, [id]);

  const[coord, setcoord]= useState("");
  function checkcoord(){
    if(dep){
      axios.post(uri+ "showmember", {Dep:name, Soc:dep}).then((succ) => {
        console.log(succ.data);
        setcoord(succ.data[0].Coordinator);
      });
    }
  }
  useEffect(() => {
    checkcoord();
  }, [dep]);


  function logout(){
    localStorage.removeItem('SocietyLogin');
    navi('/SocLogin');
  }
 

  return (
    <div className="pad-0 pad-2">
      <div className="col-lg-10 col-lg-md-10 col-sm-9 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 right_col pad-0">
        {/* <!-- top navigation --> */}
        <div className="navbar navbar-default navisoc">
          <div className="container-fluid">
            <div className="navbar-header"></div>
           <span className="namee" style={{color:"black", fontSize:"22px" ,padding:"3%"}}>{dep} ({name}) </span> 
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a data-toggle="dropdown" className="namee" style={{color:'black', textTransform:'capitalize', fontSize:"18px"}}>
                {coord}&nbsp;<span className="glyphicon glyphicon-user" style={{color:"black"}}></span>
                  <span className="caret" style={{color:"black"}}></span>
                </a>
                <ul className="dropdown-menu" style={{boxShadow:"-2px 2px gray"}}>
                  <li>
                    <a onClick={logout} style={{textAlign:"center", fontWeight:"bold" }}>Logout</a>
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
