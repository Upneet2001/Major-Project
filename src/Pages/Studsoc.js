import Studentnavbar from "./Studentnavbar";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocDashboard from './SocDashboard';
import Footer from "./Footer";

export default function () {
    var uri = "http://localhost:1200/";
    var navi = useNavigate();
  
    useEffect(() => {
      var id = localStorage.getItem("Studentlogin");
      if (!id) {
        navi("/Login");
      }
    });
    // const[dep, setdept]= useState("");
    // const[soc, setsoc]=useState("");
    //     const [data1, setdata1] = useState([]);
    // function getdata1() {
    //   axios.post(uri + "getstusociety").then((succ) => {
    //     setdata1(succ.data);
    //     setdept(succ.data[0].Department);
    //     setsoc(succ.data[0].Society);
    //     console.log(succ.data[0].Department);
    //     console.log(succ.data[0].Society);
    //     console.log(succ.data);
    //   });
    // }
    // useEffect(() => {
    //     getdata1()},{})

        const [data1, setdata1] = useState([]);
        function getdata1() {
          axios.post(uri + "gettlogo" ).then((succ) => {
            setdata1(succ.data);
            console.log(succ.data);
          });
        }
        useEffect(() => {
            getdata1()},{})

            function view(x) {
              var path = '/Currentsoc?q='+x;
              navi(path);
            }
    
            const [query, setQuery] = useState("")
  return (
    <div className="Studeventsoc">
        <Studentnavbar/>
        
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 marge">
        <center><img src="Socii.png" className="img-responsive" /></center>
        </div>
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
        {data1.filter(row => {
                    if (query === '') {
                        return row;
                    } else if (row.Department.toLowerCase().includes(query.toLowerCase())) {
                        return row;
                    }else if (row.Society.toLowerCase().includes(query.toLowerCase())) {
                        return row;
                    }
                  })
        .map((row) => (
                        <div className="col-lg-3 col-md-3 col-sm-5 col-xs-12 pain">
                            <center>
                            <span className="panetop"><p className='fontt'><span className='details'><b>{row.Department}</b></span></p></span>
                            <div className="panebody"><p className='fontt' style={{color:"maroon"}}><span className='details'><b>{row.Society}</b></span></p>
                            <div className="panebody"><img src={row.URL} className='img-responsive stusocpic'/></div><br/>
                            </div>

                            <button className="btn btn-info view" onClick={() => view(row._id)} > Explore </button><br/>
                            
                <marquee><span style={{color: "maroon", fontWeight:"bold"}}>A time to remember, a place to grow</span></marquee>
                
                            </center>
                        </div>
                        
                         ))}
                        </div>
<Footer/>
    </div>
  )
}
