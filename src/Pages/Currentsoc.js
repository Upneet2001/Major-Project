import React from 'react'
import { useEffect, useState } from "react";
import Currentnav from './Currentnav';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Footer from './Footer';


export default function Currentsoc() {
    var uri = "http://localhost:1200/";
    var navi = useNavigate();
    var idd = new URLSearchParams(window.location.search).get("q");
  
    useEffect(() => {
      var id = localStorage.getItem("Studentlogin");
      if (!id) {
        navi("/Login");
      }
    });
  console.log(idd);
  
const [data2, setdata2] = useState([]);
const [dep, setdep] = useState("");
const [soc, setsoc] = useState("");
const [logo, setlogo] = useState("");
function getdata2() {
    if(idd){
  axios.post(uri + "getcursoc",{ ID: idd}).then((succ) => {
    setdata2(succ.data);
    setdep(succ.data[0].Department);
    setsoc(succ.data[0].Society);
    setlogo(succ.data[0].URL);
    console.log(succ.data);
  });
}
}
useEffect(() => {
          getdata2();},[idd]);
          console.log(dep);
          console.log(soc);

          const [data1, setdata1] = useState([]);
          const [about, setabout] = useState("");
          const [vision, setvision] = useState("");
          const [URL, seturl] = useState("");
          const [email, setemail] = useState("");
          const [contact, setcontact] = useState("");
          const [address, setaddress] = useState("");
          const [facebook, setfacebook] = useState("");
          const [instagram, setinstagram] = useState("");
          const [twitter, settwitter] = useState("");
          const [faculty, setfaculty] = useState("");
          function getdata1() {
            if(dep){
            axios.post(uri + "getaboutsoc",{Soc:soc, Dep:dep}).then((succ) => {
              setdata1(succ.data);
              setabout(succ.data[0].About);
              setvision(succ.data[0].Vision);
              seturl(succ.data[0].URL);
              setemail(succ.data[0].Email);
              setcontact(succ.data[0].Contact);
              setaddress(succ.data[0].Address);
              setfacebook(succ.data[0].Facebook);
              setinstagram(succ.data[0].Instagram);
              settwitter(succ.data[0].Twitter);
              setfaculty(succ.data[0].Faculty);
              console.log(succ.data);
            });
          }
        }
          useEffect(() => {
              getdata1();},[dep]);
  return (
    <div className='currentsoc '>
        <Currentnav/>
        <div className='margefew'>
            <h1 className='sochead'>{soc}</h1>
            <h1 className='dephead' >({dep})</h1>
            <h3 className="container-fluid dephead1" style={{color:"black", textAlign:"center"}}><i>Faculty Incharge: {faculty}</i></h3>
            <br/>

           <center> <img className='img-responsive  logohead' src={logo}/></center>

            <div className="ak col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 className="container-fluid dephead1" style={{color:"black"}}><b>About Us</b></h1>
          <p className="container-fluid pabout">
          {about}
          </p>
        </div>

            <div className="container" style={{paddingTop:"20%",paddingBottom:"8%"}}>
        <div className="col-lg-6 col-md-6 col-sm-8 col-sm-offset-2 col-xs-offset-0 col-lg-offset-0 col-md-offset-0 col-xs-12 cater">
          <img src={URL} className="img-responsive imgs " />
        </div>
        <div className="ak col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <center>
           <h1 className='dephead1' style={{color:"black"}}><b>Our Vision</b></h1>
          </center>
          <p className="pabout">
            {vision}
          </p>
        </div>
        
      </div>
      
      
<div className='contact col-lg-12 '>
      <div className=' col-lg-7 col-lg-offset-1 '>
        <h2 className='dephead1'><b>Contact Details:</b></h2>
        <h3 className='dephead1'>Contact No.: {contact}</h3>
        <h3 className='dephead1'>Email: {email}</h3>
        <h3 className='dephead1'>Address: {address}</h3>
        <br/>
        </div>
        <div className='col-lg-4'>
        <h2 className='dephead1'><b>Social Media Links:</b></h2>
        <h3 className='links '><a href={facebook}>
    <FaFacebook />      
  </a> &nbsp;
  <a href={instagram}>
    <FaInstagram />      
  </a> &nbsp;
  <a href={twitter}>
    <FaLinkedin />      
  </a></h3>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
   

  )
}
