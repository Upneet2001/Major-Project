import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Studentnavbar from "./Studentnavbar";
import Studentsidebar  from "./Studentsidebar";

export default function Dashboardadmin() {

    const [show, setshow] = useState(false);

    var navi = useNavigate();

    useEffect(() => {
        var id = localStorage.getItem('Studentlogin')
        if(!id){
            navi('/Login');
        }
    })


    // console.log();
    useEffect(() => {
        if(window.innerWidth > 768){
            setshow(true);
        }
    }, [])


    return (
        <div >
          <Studentsidebar/>
           <Studentnavbar/>
          
           
        </div>
    )
}