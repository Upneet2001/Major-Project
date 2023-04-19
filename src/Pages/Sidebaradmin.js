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
    <div className="pad-1">
      <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12 left_col" id="sidebar-menu1" style={{ display: show ? "block" : "none" }}>
        <br />
        <div className="navbar white">
          <span><img src="logoji.png" className=" easy" /></span>
        </div><br/> 
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pad-0">
          <div className="">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/Deptadmin"><FaUsers/> Department and Society</Link>
              </li>
              <li className="list-group-item">
                <Link to="/Studentlist"><FaList/> Students</Link>
              </li>

              {/* <li className="list-group-item text-center">
                            <a className="col" data-toggle="collapse" data-target="#form">
                                <FaWpforms />  Forms
                            </a>
                            <ul className="list-group collapse" id="form">
                                <li className="list-group-item"><a>General Form</a></li>
                                <li className="list-group-item"><a>Advanced Components</a></li>
                                <li className="list-group-item"><a>Form Validation</a></li>
                                <li className="list-group-item"><a>Form Wizard</a></li>
                                <li className="list-group-item"><a>Form Upload</a></li>
                                <li className="list-group-item"><a>Form Buttons</a></li>
                            </ul>
                        </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
