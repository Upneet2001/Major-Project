import { Link } from "react-router-dom";

export default function Mainnavbar() {
  return (
    <div className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="navbar-brand">GNE</div>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/Login">Student Login</Link>
          </li>
          <li>
            <Link to="/Soclogin">Society Login</Link>
          </li>
          <li>
            <Link to="/Loginadmin">Admin Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
