import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { FaBeer, FaHome, FaCaretRight, FaChevronDown, FaDashcube, FaWpforms, } from 'react-icons/fa';

export default function Sidebaradmin() {
    const [show, setshow] = useState(false);

    // console.log();
    useEffect(() => {
        if(window.innerWidth > 768){
            setshow(true);
        }
    }, [])

  return (
  
    <div> <div className="col-md-2 col-xs-12 left_col" id="sidebar-menu" style={{display:show ? ('block') : ('none')}}>
    <br/>
    {window.innerWidth < 768 && (<button onClick={() => setshow(false)} className="btn pull-right clo">x</button>)}

            <div className="navbar navbar-brand white">
                <span className="easy">EVENT IT EASY</span>
            </div>
            {/* <!-- sidebar menu --> */}
            <div className="col-lg-12 col-xs-12 pad-0">
                <div className="">
                    <ul className="list-group">
                        <li className="list-group-item text-center">
                            <a data-toggle="collapse" data-target="#home">
                                <FaDashcube /> Dashboard <FaChevronDown />
                            </a>
                            <ul className="collapse pad-0" id="home">
                                <li className="list-group-item"><Link to="/Deptadmin">Add Department and society</Link></li>
                                <li className="list-group-item"><Link to="/Members">Members List</Link></li>
                            </ul>
                        </li>
                        <li className="list-group-item text-center">
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
                        </li>
                    </ul>
                </div>

            </div>
            {/* <!-- /sidebar menu --> */}
        </div>
        </div>
  )
}
