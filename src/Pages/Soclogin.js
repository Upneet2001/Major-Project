import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaUsers
} from "react-icons/fa";
import Mainnavbar from "./MainNavbar";

export default function Soclogin() {
  var uri = "http://localhost:1200/";
  var navi = useNavigate();

  function handleform(e) {
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var obj = {
      UserID: data.get("socuser"),
      Password: data.get("password"),
    };
    axios.post(uri + "Loginsoc", obj).then((succ) => {
      console.log(succ.data);
      if (succ.data._id) {
        console.log("yes");
        localStorage.setItem("SocietyLogin", succ.data._id);
        navi("/SocDashboard");
      } else {
        console.log("no");
        alert("Wrong CRN or Password");
      }
    });
  }
  
  const [data, setdata] = useState([]);
  function getdata() {
    axios.get(uri + "getSociety").then((succ) => {
      setdata(succ.data);
      console.log(succ.data);
    });
  }
  useEffect(() => {
    getdata();
  }, []);

  const [show, setshow] = useState(true);
  return (
    <div className="Home">
      <Mainnavbar />
        <div className="container-fluid log ">
          <div className="col-lg-4 col-md-4 col-sm-8 col-xs-12 frm">
            <div className="img">
              <img src="img1.jpg" className="img-responsive imgs" />
            </div>
            <center>
              <form
                className="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-10 col-md-10 col-sm-10 col-xs-10 login"
                onSubmit={handleform}
              >
                <h1 className="text">Society Login</h1>
                <div className="form-group frms">
                  <div className="input-group">
                    <span className="input-group-addon glycol">
                      <i className="glyphicon glyphicon-user "></i>
                    </span>
                    <input
                      type={"text"}
                      name="socuser"
                      placeholder="User ID"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                {/* <div className="form-group frms">
                  <div className="input-group">
                    <span className="input-group-addon glycol">
                      <i className="glyphicon glyphicon-home"></i>
                    </span>

                    <select name="department" className="form-control" required>
                      <option value="" disabled selected hidden>
                        Select Department
                      </option>
                      {data.map((row) => (
                        <option>{row.Department}</option>
                      ))}
                    </select>
                  </div>
                </div> */}
                {/* <div className="form-group frms">
                  <div className="input-group">
                    <span
                      className="input-group-addon glycol"
                      style={{ fontSize: 18 }}
                    >
                      <FaUsers />
                    </span>

                    <select name="society" className="form-control" required>
                      <option value="" disabled selected hidden>
                        Select Society
                      </option>
                      {data.map((row) => (
                        <option>{row.Society}</option>
                      ))}
                    </select>
                  </div>
                </div> */}

                <div className="form-group frms">
                  <div className="input-group">
                    <span className="input-group-addon glycol">
                      <i className="glyphicon glyphicon-lock"></i>
                    </span>
                    <input
                      type={show ? "password" : "text"}
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      required
                    />
                    <div className="input-group-btn">
                      {show ? (
                        <i
                          type={"button"}
                          onClick={() => setshow(false)}
                          className="glyphicon glyphicon-eye-open btn btn-default eye"
                        ></i>
                      ) : (
                        <i
                          type={"button"}
                          onClick={() => setshow(true)}
                          className="btn glyphicon glyphicon-eye-close  btn btn-default eye"
                        ></i>
                      )}
                      <div />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type={"submit"}
                    value="Login"
                    className="btn btnn btn-info sub"
                  />
                </div>
                <br />
              </form>
            </center>
          </div>
        </div>
    </div>
  );
}
