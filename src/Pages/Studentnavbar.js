import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Studentnavbar() {
  var uri = "http://localhost:1200/";
  var navi = useNavigate();

  useEffect(() => {
    var id = localStorage.getItem("Studentlogin");
    if (!id) {
      navi("/Login");
    }
  });

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

  // var desg = name + " (" + rollno + ")";
  // console.log(desg);

  const [data3, setdata3] = useState([]);
  function getdata3() {
    if (id) {
      axios.post(uri + "getdesg").then((succ) => {
        setdata3(succ.data);
        console.log(succ.data);
      });
    }
  }
  useEffect(() => {
    getdata3();
  }, [id]);

  function logout() {
    localStorage.removeItem("Studentlogin");
    navi("/Login");
  }

  return (
    <div className="pad-0 stunavbar pad-n">
      {/* <div className="col-lg-10 col-xs-10 right_col pad-0">
       
        <div className="navbar navbar-default navisoc">
          <div className="container-fluid">
            <div className="navbar-header"></div>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a
                  data-toggle="dropdown"
                  style={{ color: "black", textTransform: "capitalize" }}
                >
                  {name}{" "}
                  <span
                    className="glyphicon glyphicon-user"
                    style={{ color: "black" }}
                  ></span>
                  <span className="caret" style={{ color: "black" }}></span>
                </a>
                <ul
                  className="dropdown-menu"
                  style={{ boxShadow: "-2px 2px gray" }}
                >
                  <li>
                    <a
                      onClick={logout}
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="navbar navbar-default nv1">
        <div className="container">
          <ul className="nav navbar-nav">
            <li class="dropdown">
              <a data-toggle="dropdown" className="easy1">
                WELCOME GENCONIAN!
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a
                data-toggle="dropdown"
                className="nmey"
                style={{ color: "white", textTransform: "capitalize" }}
              >
                <b>{name}&nbsp;</b>
                <span
                  className="glyphicon glyphicon-user"
                  style={{ color: "white" }}
                ></span>
                <span className="caret" style={{ color: "white" }}></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    onClick={logout}
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
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
            <button
              type="button"
              className="navbar-toggle stunavbtn"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-header">
              <Link to="/Studhome">
                <img src="logo.png" className="navbar-brand" />
              </Link>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav nav2">
              <li>
                <Link to="/StudHome">Home</Link>
              </li>
              <li>
                <Link to="/Infoupdate">Update Profile</Link>
              </li>

              <li>
                <Link to="/Studsoc">Societies</Link>
              </li>
              <li>
                <Link to="/Applysoc">Apply For Society</Link>
              </li>

              <li>
                <Link to="/Studevent">Events</Link>
              </li>
              <li>
                <Link to="/Dashboardstudent">Chat Access</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className="navbar navbar-default nv">
		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="navbar-header">
    <Link to='/Studhome'><img src="logo.png" className="navbar-brand" /></Link>
			</div>
			<ul className="nav navbar-nav nav2">
      <li>
                <Link to="/StudHome">Home</Link>
              </li>
      <li>
                <Link to="/Infoupdate">Update Profile</Link>
              </li>
      <li>
                <Link to='/Dashboardstudent'>Chat Access</Link>
              </li>
              <li>
                <Link to="/Applysoc">Apply For Society</Link>
              </li>
              
              <li>
                <Link to="/Studsoc">Societies</Link>
              </li>
              <li>
                <Link to="/Studevent">Events</Link>
              </li>
			</ul>
      </div>
	</div> */}
    </div>
  );
}
