import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebaradmin from "./Sidebaradmin";

export default function Dashboardadmin() {

    const [show, setshow] = useState(false);

    var navi = useNavigate();

    useEffect(() => {
    //   localStorage.setItem('AdminLogin', succ.data._id);
        var id = localStorage.getItem('AdminLogin')
        if(!id){
            navi('/Loginadmin');
        }
    })


    // console.log();
    useEffect(() => {
        if(window.innerWidth > 768){
            setshow(true);
        }
    }, [])


    return (
        <div>
          
           <Sidebaradmin/>
           <Navbar/>
           
        </div>
    )
}