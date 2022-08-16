import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { FaBeer, FaHome, FaCaretRight, FaChevronDown, FaDashcube, FaWpforms, } from 'react-icons/fa';
import Sidebaradmin from "./Sidebaradmin";

export default function Dashbaord1() {

    const [show, setshow] = useState(false);

    // console.log();
    useEffect(() => {
        if(window.innerWidth > 768){
            setshow(true);
        }
    }, [])


    return (
        <div className="pad-0">
           <Sidebaradmin/>
            <div className="col-lg-10 right_col">
                {/* <!-- top navigation --> */}
                <div className="navbar navbar-default top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" class="navbar-toggle" onClick={() => setshow(true)}>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                    </div>
                </div>
                

                
            </div>
        </div>
    )
}