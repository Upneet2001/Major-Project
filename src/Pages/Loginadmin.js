import axios from "axios";
import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Mainnavbar from "./MainNavbar";
export default function Loginadmin() {
  const [show, setshow] = useState(true);

  var uri = "http://localhost:1200/";

  var navi = useNavigate();

  function submitdata(e) {
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var datas = {
      Name: data.get('userid'),
      Password: data.get('password')
    }

    axios.post(uri+'LoginAdmin', datas).then((succ) => {
     console.log(succ.data);
     if(succ.data._id){
      console.log('yes');
      localStorage.setItem('AdminLogin', succ.data._id);
      navi('/Dashboardadmin');
     }
     else{
      console.log('no');
      alert("Wrong Id or Password");
     }
      
    })
  }


  return (
    <div>
      <Mainnavbar/>
      <div className="main ">
        <div className="container-fluid log">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 frm">
            <div className="img">
              <img src="admin.jpg" className="img-responsive im" />
            </div>
            <br />
            <center>
              <form onSubmit={submitdata} className=" col-lg-offset-1 col-md-offset-1 col-sm-offset-0 col-xs-offset-0 col-lg-10 col-md-10 col-sm-12 col-xs-12 login">
                <h4 className="please">Please Enter Login ID and Password!</h4>

                <div className="form-group frms">
                  <div className="input-group ">
                    <span className="input-group-addon glycol1 ">
                      <i className="glyphicon glyphicon-user "></i>
                    </span>
                    <input
                      type={"text"}
                      name="userid"
                      placeholder="Login ID"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="form-group frms">
                  <div className="input-group">
                    <span className="input-group-addon glycol1">
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
                    className="btn btnn btn-default sub1"
                  />
                  <br />
                  <br />
                </div>
              </form>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
