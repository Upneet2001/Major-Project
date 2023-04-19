import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Mainnavbar() {
  return (


    // <div className="navbar navbar-default  homenav">
    //   <div className="container-fluid">
    //     <div className="navbar-header">
    //     
    //     </div>
    //     <ul className="nav navbar-nav">
    //       <li>
    //         <Link to="/Login">Student Login</Link>
    //       </li>
    //       <li>
    //         <Link to="/Soclogin">Society Login</Link>
    //       </li>
    //       <li>
    //         <Link to="/Loginadmin">Admin Login</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>

    <nav className="navbar navbar-inverse homenav" >
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle navbtn" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
    <ul className="nav navbar-nav">
      <li className="lo">
      <Link to="/"> <span className="faiconsize"><FaHome/></span></Link>
      </li>
        <li className="lo">
          <Link to="/Login">Student Login</Link>
        </li>
        <li className="lo">
          <Link to="/Soclogin">Society Login</Link>
        </li>
        <li className="lo">
          <Link to="/Loginadmin">Admin Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}