import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Mainnavbar from "./MainNavbar";
// import swal from 'sweetalert';
import Swal from "sweetalert2";

export default function Login() {
  var uri = "http://localhost:1200/";
  var navi = useNavigate();

  function handleform(e) {
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var obj = {
      CRN: data.get("rollno"),
      Password: data.get("password"),
    };
    if(obj){
      axios.post(uri + "Loginstudent1", obj).then((succ) => {
        console.log(succ.data);
        if (succ.data._id) {
          // alert("You cannot Login as not approved by admin yet!");
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            titleText: 'Your Registration is underprocess. Try again Later!',
            showConfirmButton: false,
            timer: 4000
          })
        } else {
          axios.post(uri + "Loginstudent", obj).then((succ) => {
            console.log(succ.data);
            if (succ.data._id) {
              console.log("yes");
              localStorage.setItem("Studentlogin", succ.data._id);
              navi("/StudHome");
            } else {
              console.log("no");
              // alert("The CRN or password you entered did not match our records.             Please re-check or Register Yourself!" );
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                titleText: 'The CRN or Password you entered did not match our records. Please re-check or Register Yourself!',
                showConfirmButton: false,
                timer: 4000
              })
            }
          });
        }
      });
      
    }
  }
  
  const [show, setshow] = useState(true);
 


  return (
    <div className="Home">
      <Mainnavbar />
      <div className="main">
        <div className="container-fluid log">
          <div className="col-lg-4 col-md-4 col-sm-8 col-xs-12 frm">
            <div className="img">
              <img src="imge.jpeg" className="img-responsive imf" />
            </div>
            <center>
              <form
                className="col-lg-offset-1 col-md-offset-1 col-sm-offset-0 col-xs-offset-0 col-lg-10 col-md-10 col-sm-12 col-xs-12 login"
                onSubmit={handleform}>
                <p className="text">Login</p>
                <h4 className="plz">
                  Please Enter Your Roll no. and Password!
                </h4>

                <div className="form-group frms">
                  <div className="input-group ">
                    <span className="input-group-addon glycol ">
                      <i className="glyphicon glyphicon-user "></i>
                    </span>
                    <input
                      type={"text"}
                      name="rollno"
                      placeholder="College Roll no."
                      pattern="[0-9]{7}"
                      title="Please Enter Digits Only"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
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
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
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
                    className="btn btnn btn-default sub"
                  />
                </div>
                <h5 className="plz">
                  <i>Don't have an account?</i>
                  <Link to="/Register"> Register</Link>
                </h5>
              </form>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
