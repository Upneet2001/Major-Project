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
    <div className="side pad-1">
      <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12 leftsoc " id="sidebar-menu">
        <br />

        <div className="navbar white">
          <span ><img src="logoji.png" className=" easy" /></span>
        </div><br />
        {/* <!-- sidebar menu --> */}
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pad-0">
          <div className="">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to='/SocDashboard'><FaDashcube />Add Logo</Link>
              </li>
              <li className="list-group-item">
                <Link to='/Societypanel'><FaBoxes />  Society Panel</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
