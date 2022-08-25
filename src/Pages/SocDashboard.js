import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocNavbar from "./SocNavbar";
import SocSidebar from "./SocSidebar";

export default function SocDashboard() {

    const [show, setshow] = useState(false);

    var navi = useNavigate();


    // console.log();
    useEffect(() => {
        if(window.innerWidth > 768){
            setshow(true);
        }
    }, [])


    return (
        <div >
          <SocSidebar/>
           <SocNavbar/>
           
           
        </div>
    )
}