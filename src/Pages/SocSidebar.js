import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBoxes,
  FaDashcube,

} from "react-icons/fa";

export default function SocSidebar() {
  const [show, setshow] = useState(false);

  // console.log();
  useEffect(() => {
    if (window.innerWidth > 768) {
      setshow(true);
    }
  }, []);

  return (
    <div>
      {" "}
      <div
        className="col-md-2 col-xs-2 leftsoc"
        id="sidebar-menu"
        style={{ display: show ? "block" : "none" }}
      >
        <br />
        {window.innerWidth < 768 && (
          <button onClick={() => setshow(false)} className="btn pull-right clo">
            x
          </button>
        )}

        <div className="navbar navbar-brand white">
          <span className="easy">EVENT IT EASY</span>
        </div>
        {/* <!-- sidebar menu --> */}
        <div className="col-lg-12 col-xs-12 pad-0">
          <div className="">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to='/SocDashboard'><FaDashcube /> Dashboard</Link>
              </li>
              <li className="list-group-item">
                <Link to='/Societypanel'><FaBoxes/>  Society Panel</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
