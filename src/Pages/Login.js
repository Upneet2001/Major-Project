import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Login() {
    var uri = "http://localhost:1200/";

    function handleform(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var obj = {
            CRN: data.get('rollno'),
            Password: data.get('password'),
        } 
        axios.post(uri +'getoneUsers', obj).then((succ)=>{
            console.log('ok')
            e.target.reset();
            e.target.rollno.focus();
        })
      
    }
    const [show, setshow] = useState(true);

  return (
    <div >
    <div className="main"> 
        <div className="container-fluid log">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 frm">
            <div className="img">
            <img src="img1.jpg" className="img-responsive imgs" />
            </div>
            <center>
            <form className="col-lg-offset-1 col-md-offset-1 col-sm-offset-0 col-xs-offset-0 col-lg-10 col-md-10 col-sm-12 col-xs-12 login" onSubmit={handleform}>
                <h1 className="text">Login</h1>
                <h4 className="plz">Please Enter Your Roll no. and Password!</h4><br/>
            
            <div className="form-group frms" >
            <div className="input-group ">
             <span className="input-group-addon glycol "><i className="glyphicon glyphicon-user "></i></span> 
           <input type={'text'} name="rollno" placeholder="College Roll no." className="form-control" required/>
           </div>
            </div>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-lock"></i></span>
                        <input
                        type={show ? ('password'): ('text')} 
                        name="password"
                        placeholder="Password"
                        className="form-control" required 
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                        />
                        <div className="input-group-btn">
                       { show ? (
                        <i type={'button'} onClick={() => setshow(false)} className="glyphicon glyphicon-eye-open btn btn-default eye">
                        </i>
                        ) : (
                        <i type={'button'} onClick={() => setshow(true)} className="btn glyphicon glyphicon-eye-close  btn btn-default eye">
                        </i>
                        )
                       }
                        <div/>
                        </div>
                        </div>
            </div>
            <div className="form-group">
                <input type={'submit'} value="Login" className="btn btnn btn-default sub"/>
                
            </div>
            <h5 className="plz"><i>Don't have an account?</i><Link to="/Register"> Register</Link></h5>
        </form>
        </center>
</div>
</div>
</div>
</div>

  )
}

