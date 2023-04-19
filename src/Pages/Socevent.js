
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocDashboard from './SocDashboard';
import Currentnav from "./Currentnav";
import Footer from './Footer';

export default function () {
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
    function getdata1() {
        if(soc){
      axios.post(uri + "getsocevent",{Soc:soc, Dep:dep}).then((succ) => {
        setdata1(succ.data);
        console.log(succ.data);
      });
    }
}
    useEffect(() => {
        getdata1();},[soc]);
        function view(x) {
          var path = '/Currentevent?q='+x;
          navi(path);
        }
        const [query, setQuery] = useState("") 
  return (
    <div className="Studevent">
        <Currentnav/>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 marge">
        <center><img src="Eventss.jpg" className="img-responsive" /></center>
        <div className="navbar-form navbar nav3">
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Search" onChange={event => setQuery(event.target.value)}/>
					<div className="input-group-btn">
						<button className="btn">
							<span className="glyphicon glyphicon-search"></span>
						</button>
					</div>
				</div>
                </div>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 social'>
            </div>
        {data1.filter(row => {
                    if (query === '') {
                        return row;
                    } else if (row.EventName.toLowerCase().includes(query.toLowerCase())) {
                        return row;
                    }
                  }).map((row) => (
                        <div className="col-lg-3 col-md-3 col-sm-5 col-xs-11 pane" key={row._id}>
                            <center>
                            <span className="panetop"><p className='fontt'><span className='details'><b>{row.EventName}</b></span></p></span>
                            <div className="panebody"><img src={row.URL} className='img-responsive stupic'/></div><br/>
                            <button className="btn btn-info view" onClick={() => view(row._id)}>View and Register</button>
                            <br/>
                <marquee><span style={{color: "red",fontWeight:"bold"}}>Register Before:{row.RegDate}</span></marquee>
                            </center>
                        </div>
                         ))}
                        </div>
                        <Footer/>
    </div>
  )
}
