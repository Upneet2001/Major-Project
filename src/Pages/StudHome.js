import React from "react";
import Studentnavbar from "./Studentnavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function StudHome() {
  var uri = "http://localhost:1200/";
  var navi = useNavigate();

  useEffect(() => {
    var id = localStorage.getItem("Studentlogin");
    if (!id) {
      navi("/Login");
    }
  });

  const [data2, setdata2] = useState([]);
  function getdata2() {
    axios.post(uri + "getevet").then((succ) => {
      setdata2(succ.data);
      console.log(succ.data);
    });
  }
  useEffect(() => {
    getdata2();
  }, {});

  const [data1, setdata1] = useState([]);
  function getdata1() {
    axios.post(uri + "gettlogoo").then((succ) => {
      setdata1(succ.data);
      console.log(succ.data);
    });
  }
  useEffect(() => {
    getdata1();
  }, {});

  function view(x) {
    var path = '/Currentevent?q=' + x;
    navi(path);
  }

  function view1(x) {
    var path = '/Currentsoc?q=' + x;
    navi(path);
  }

  return (
    <div className="studhome">
      <Studentnavbar />
      <div className="carousel slide" id="mycaro" data-ride="carousel">
        <ul className="carousel-indicators">
          <li className="active" data-slide-to="0" data-target="#mycaro"></li>
          <li data-slide-to="1" data-target="#mycaro"></li>
        </ul>
        <div className="carousel-inner">
          <div className="item active">
            <img src="apex3.jpg" className="img-responsive apexx" />
          </div>
          <div className="item">
            <img src="apex2 3.png" className="img-responsive apexx" />
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingTop: "5%", paddingBottom: "5%" }}>
        <div className="col-lg-6 col-md-6 col-lg-offset-0 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 cater">
          <img src="pic.jpg" className="img-responsive imgs" />
        </div>
        <div className="ak col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <center>
            <h1 style={{ color: "black" }}>Benefits of Societies</h1>
          </center>
          <p className="pp">
            In our college all the societies have a crucial role. Some societies
            are technical while some are creative skill based, each organizing
            events on a regular basis and also arranging webinars with highly
            qualified speakers. The concept of this program is to utilize all
            the capabilities of the students to negotiate and clinch top-quality
            communication skills, problem-solving skills, and develop
            distinctive personalities. This absolutely helps students to
            identify their fields of interest. A lot of activities under this
            updated society surely help the students to explore and have a
            broader view of their selective fields. In addition to this center
            also encourage students for enrolling in MOOCs and get involved in
            self-learning which will lead to incremental knowledge and
            development of interest in different fields. Being a part of this
            club an individual can primarily build not only his/her personal
            individualization but also enrich their mindset with optimistic
            thoughts, constructive behavior, and confidence.
          </p>
        </div>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 " style={{ backgroundColor: "#095c5b", color: "white" }}><p className="collsoc" style={{ textAlign: "center", fontSize: "25px", padding: "1.5%" }}><b>
        "Societies are the keys to unlock the opportunities, a passport to growth!"</b></p></div>
      <div className="socie" style={{ paddingTop: "7%" }}>
        <div className="container socie1">
          <h1 className="collsoc" style={{ color: "black", paddingTop: "2%" }}>
            <center><b>College Societies</b>&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn btn-info view "><Link to="/Studsoc" className="update"> View All</Link></button>
            </center>
          </h1>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 social">
          {data1.map((row) => (
            <div className="col-lg-3 col-md-3 col-sm-5 col-xs-11 pain">
              <center>
                <span className="panetop"><p className="fontt"> <span className="details"><b>{row.Department}</b></span></p></span>
                <p className="fontt" style={{ color: "maroon" }}>
                  <span className="details">
                    <b>{row.Society}</b>
                  </span>
                </p>
                <br />
                <img src={row.URL} className="img-responsive stusocpic" />
                <br />
                <button className="btn btn-info view" onClick={() => view1(row._id)}>
                  Explore
                </button>
                <br/>
                <marquee><span style={{color: "maroon", fontWeight:"bold"}}>A time to remember, a place to grow</span></marquee>
                
              </center>
            </div>
          ))}
        </div>
      </div>


      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ backgroundColor: "#095c5b", color: "white", marginTop: "1%", marginBottom: "3%" }}><p className="collsoc" style={{ textAlign: "center", fontSize: "25px", padding: "1.5%" }}><b>
        "Exclusive events, priceless memories!"</b></p></div>
      <div className="eveie">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <center></center>
        </div>

        <div className="container socie1">
          <h1 className="collsoc" style={{ color: "black" }}>
            <center>

              <b>Upcoming Events</b>&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn btn-info view">
                <Link to="/Studevent" className="update">
                  View All
                </Link>
              </button>
            </center>
          </h1>
        </div>


        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 social'>

          {data2.map((row) => (
            <div className="col-lg-3 col-md-3 col-sm-5 col-xs-11 pane">
              <center>
                <span className="panetop">
                  <p className="fontt">
                    <span className="details">
                      <b>{row.EventName}</b>
                    </span>
                  </p>
                </span>
                <img src={row.URL} className="img-responsive stupic" />
                <br />
                <button className="btn btn-info view"
                  onClick={() => view(row._id)}>
                  View and Register
                </button><br/>
                <marquee><span style={{color: "red", fontWeight: "bold"}}>Register Before:{row.RegDate}</span></marquee>
              </center>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
