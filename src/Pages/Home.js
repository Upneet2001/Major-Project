import { Link } from "react-router-dom";
import React from "react";
import { FaUsers, FaComments, FaCalendarCheck, FaHome, FaUser, FaUserAlt, FaUserCircle, FaUserAstronaut, FaUserCheck, FaUserFriends, FaUserGraduate, FaUserTie} from 'react-icons/fa';
export default function Home() {
  return (
    <div className="Home">
        <div className=" col-lg-offset-3 col-lg-6">
        <img src="Logo.png" className="img-responsive im" />
        </div>
        <div className='col-lg-12 social'>
                        <div className="col-lg-3 col-md-3 col-sm-5 col-xs-11 panell1">
                            <center>
                            <span className="paneltop"><FaUserGraduate/></span>
                            <div className="panelbody">Student Panel</div><br/>
                            <button className="btn btn-info view"> <Link to="/Login" className="naam">Student Login</Link></button>
                            </center>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-5 col-xs-11 panell1">
                            <center>
                            <span className="paneltop"><FaUsers/></span>
                            <div className="panelbody">Society Panel</div><br/>
                            <button className="btn btn-info view "><Link to="/Soclogin" className="naam">Society Login</Link></button>
                            </center>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-5 col-xs-11 panell1">
                            <center>
                            <span className="paneltop"><FaUserTie/></span>
                            <div className="panelbody">Admin Panel</div><br/>
                            <button className="btn btn-info view"><Link to="/Loginadmin" className="naam">Admin Login</Link></button>
                            </center>
                        </div>
                        
      </div>
    </div>
  );
}
