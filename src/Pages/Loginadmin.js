import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FaBeer, FaHome, FaCaretRight, FaChevronDown, FaDashcube, FaWpforms, FaUsers } from 'react-icons/fa';

export default function Login() {
    var uri = "http://localhost:1200/";

    function handleform(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var obj = {
            Email: data.get('emailadmin'),
            Password: data.get('passwordadmin'),
        }
      
    }
    

  return (
    <div>
    <div className="main"> 
        <div className="container-fluid log">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 frm">
            <div className="img">
            <img src="img1.jpg" className="img-responsive imgs" />
            </div>
            <center>
            <form className="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-10 col-md-10 col-sm-10 col-xs-10 login" onSubmit={handleform}>
                <h1 className="text">Admin Login</h1>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-user "></i></span> 
           <input type={'text'} name="useradmin" placeholder="User ID" className="form-control" required/>
           </div>
            </div>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-home"></i></span> 
           <input type={'text'} name="department" placeholder="Department" className="form-control" required/>
           </div>
            </div>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol" style={{fontSize:20}}><FaUsers/></span> 
           <input type={'text'} name="society" placeholder="Society" className="form-control" required/>
           </div>
            </div>
            
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-lock "></i></span>
            <input type={'password'} name="passwordadmin" placeholder="Admin Password" className="form-control" required />
            </div>
            </div>
            <div className="form-group">
                <input type={'submit'} value="Login" className="btn btnn btn-info sub"/>
            </div><br/>
        </form>
        </center>
</div>
</div>
</div>
</div>

  )
}

