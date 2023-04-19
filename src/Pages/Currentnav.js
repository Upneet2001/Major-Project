import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowLeft } from 'react-icons/fa';

export default function Currentnav() {
    var uri = "http://localhost:1200/";
    var navi = useNavigate();
    var idd = new URLSearchParams(window.location.search).get("q");
  
    useEffect(() => {
      var id = localStorage.getItem("Studentlogin");
      if (!id) {
        navi("/Login");
      }
    });
  console.log(idd);

  const [name, setname] = useState("");
  const [rollno, setrollno] = useState("");
  var id = localStorage.getItem("Studentlogin");


  function checkid() {
    if (id) {
      axios.post(uri + "getoneuser", { Id: id }).then((succ) => {
        console.log(succ.data);
        setname(succ.data.Name);
        setrollno(succ.data.CRN);
        console.log(succ.data.CRN);
      });
    }
  }

  useEffect(() => {
    checkid();
  }, []);
  
    function view() {
        var path = '/Currentsoc?q='+idd;
        navi(path);
      }
    
      function view1() {
        var path1 = '/Curmembers?q='+idd;
        navi(path1);
      }
      function view2() {
        var path2 = '/Socevent?q='+idd;
        navi(path2);
      }
      function view3() {
        var path3 = '/Feedback?q='+idd;
        navi(path3);
      }
      function logout() {
        localStorage.removeItem("Studentlogin");
        navi("/Login");
      }
    return (
        <div className='pad-0 pad-n '>
             <div className="navbar navbar-default nv1">
		<div className="container">
			<ul className="nav navbar-nav">
      <li class="dropdown">
					<a data-toggle="dropdown" className="easy1">WELCOME GENCONIAN!</a></li>
			</ul>
			<ul className="nav navbar-nav navbar-right">
				
              <li className="dropdown">
                
              <a data-toggle="dropdown" className="nmey"
                  style={{ color: "white", textTransform: "capitalize" }}>
                  <b>{name}&nbsp;</b>
                  <span className="glyphicon glyphicon-user" style={{ color: "white" }}></span>
                  <span className="caret" style={{ color: "white" }}></span>
                </a>
                <ul className="dropdown-menu" >
                  <li>
                    <a onClick={logout} style={{ textAlign: "center", fontWeight: "bold" ,color:"black" , backgroundColor:"white"}}>
                     Logout
                    </a>
                  </li>
                </ul>
              </li>
          
			</ul>
		</div>
	</div>
  <nav className="navbar navbar-default nv">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">


          <div className="navbar-header ">
            <button type="button" className="navbar-toggle stunavbtn" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-header">
              <Link to='/Studhome'><img src="logo.png" className="navbar-brand" /></Link>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navhead ">
                        <button onClick={() => view()}>
                           About Us
                        </button> &nbsp; &nbsp;
                        <button onClick={() => view1()}>
                           Society Members
                        </button>&nbsp; &nbsp;
                        <button onClick={() => view2()}>
                           Events
                        </button>&nbsp; &nbsp;
                        <button onClick={() => view3()}>
                           Feedback
                        </button>
                        <button className='bhome'> <Link to='/Studhome'>
                         <FaArrowLeft/>  Back to Home
                           </Link>
                        </button>
                    </ul>
                </div>
            </div>
            </nav>
        </div>

    )
}
