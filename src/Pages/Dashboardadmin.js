import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebaradmin from "./Sidebaradmin";

export default function Dashboardadmin() {

    const [show, setshow] = useState(false);

    // console.log();
    useEffect(() => {
        if(window.innerWidth > 768){
            setshow(true);
        }
    }, [])


    return (
        <div >
          
           <Sidebaradmin/>
           <Navbar/>
           
        </div>
    )
}