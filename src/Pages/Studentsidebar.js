import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaBeer,
  FaHome,
  FaCaretRight,
  FaChevronDown,
  FaDashcube,
  FaWpforms,
  FaUsers,
  FaList
} from "react-icons/fa";

export default function Sidebaradmin() {
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
        className="col-md-2 col-xs-2 left_col"
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
        <div className="col-lg-12 col-xs-12 pad-0">
          <div className="">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to='/Dashboardstudent'><FaDashcube /> Dashboard</Link>
              </li>
              <li className="list-group-item">
                <Link to="/Applysoc"><FaUsers/> Apply For Society</Link>
              </li>

           
            </ul>
          </div>
        </div>
        {/* <!-- /sidebar menu --> */}
      </div>
    </div>
  );
}
