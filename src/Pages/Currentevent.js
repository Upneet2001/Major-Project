import Studentnavbar from "./Studentnavbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { FaUsers } from "react-icons/fa";
import Footer from "./Footer";
import emailjs from "@emailjs/browser"
import {useRef} from 'react'

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

  const [name, setname] = useState("");
  const [soc, setsoc] = useState("");
  const [dep, setdep] = useState("");
  const [time, settime] = useState("");
  const [date, setdate] = useState("");
  const [venue, setvenue] = useState("");
  const [pic, setpic] = useState("");
  const [des, setdes] = useState("");
  const [type, settype] = useState("");
  const [regdate, setregdate] = useState("");
  const [data1, setdata1] = useState([]);
  function getdata1() {
    axios.post(uri + "geteven", { ID: idd }).then((succ) => {
      setdata1(succ.data);
      setname(succ.data[0].EventName);
      setsoc(succ.data[0].Society);
      setdep(succ.data[0].Department);
      settime(succ.data[0].Time);
      setdate(succ.data[0].Date);
      setvenue(succ.data[0].Venue);
      setpic(succ.data[0].URL);
      setdes(succ.data[0].Description);
      settype(succ.data[0].Type);
      setregdate(succ.data[0].RegDate);
    });
  }
  useEffect(() => {
    getdata1();
  }, {});

  const [name1, setname1] = useState("");
  const [crn, setcrn] = useState("");
  const [dept, setdept] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [semester, setsem] = useState("");
  const [gender, setgen] = useState("");
  var id = localStorage.getItem("Studentlogin");
  function checkid() {
    if (id) {
      axios.post(uri + "getoneuser", { Id: id }).then((succ) => {
        console.log(succ.data);
        console.log(succ.data.Branch);
        setname1(succ.data.Name);
        setcrn(succ.data.CRN);
        setdept(succ.data.Branch);
        setcontact(succ.data.Contact);
        setsem(succ.data.Semester);
        setemail(succ.data.Email);
        setgen(succ.data.Gender);
        getdata1();
      });
    }
  }
  useEffect(() => {
    checkid();
  }, [id]);


  const form = useRef()
  const sendEmail = (e) => {
    emailjs.sendForm('service_kubhv6s', 'template_gnzb09o', form.current, 'rPjQAm5o3-TM9PF5R')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
     
    e.preventDefault();
    var dtes = new Date();
    var data = new FormData(e.currentTarget);
    var obj = {
      EventName: name,
      Society: soc,
      Name: data.get("name"),
      CRN: data.get("rollno"),
      Branch: data.get("departmentname"),
      Semester: data.get("semester"),
      Email: data.get("email"),
      Contact: data.get("contact"),
      Gender: data.get("gender"),
      Date:
        dtes.getDate() + "-" + (dtes.getMonth() + 1) + "-" + dtes.getFullYear(),
    };
    axios.post(uri + "Registerevent", obj).then((succ) => {
      if (succ.data == "ok") {
        swal("Registered Successfully", "", "success");
        getdata1();
      }
    });
  }

  var g1 = new Date();
  var g2 = new Date(regdate);
  // const [query, setQuery] = useState(true);
  var x = 0;

  if (g1.getTime() > g2.getTime()) {
    x = x + 1;
  }
  console.log(g1.getTime());
  console.log(g2.getTime());
  // console.log(x);

  const [getfile, setgetfile] = useState([]);
  const [data3, setdata3] = useState([]);
  function getdata3() {
    axios.post(uri + "getwinner", { eventname: name }).then((succ) => {
      setgetfile(succ.data[0].URL);
    });
  }
  useEffect(() => {
    if (name) {
      getdata3();
    }
  }, [name]);
  console.log(getfile);
  return (
    <div className="evie">
      <Studentnavbar />
      <div className="container social marge">
        {data1.map((row) => (
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 events">
            <b>
              <center>
                <h1 className="collsoc" style={{ color: "black" }}>
                  {name}
                </h1>
              </center>
            </b>
            <br />
            <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
              <img src={pic} className="img-responsive evi" />
            </div>
            {/* <p className='fontt'>Department name:<span className='details'>{dep}</span></p>
         <p className='fontt'>Society:<span className='details'>{soc}</span></p>
        <p className='fontt'>Event Name:<span className='details'>{name}</span></p>
         <p className='fontt'>Date:<span className='details'>{date}</span></p>
        <p className='fontt'>Time:<span className='details'>{time}</span></p>
        <p className='fontt'>Venue:<span className='details'>{venue}</span></p>
        <p className='fontt'>Type:<span className='details'>{type}</span></p>
        <p className='fontt'>Description:<span className='details'>{des}</span></p>
        <button className="btn btn-info view1">Register Now</button> */}
            <center>
              <table className="table-responsive ">
                <tr>
                  <th className="collsoc">Department name</th>
                  <td>{dep}</td>
                </tr>
                <tr>
                  <th>Society</th>
                  <td>{soc}</td>
                </tr>
                <tr>
                  <th>Event Name</th>
                  <td>{name}</td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>{date}</td>
                </tr>
                <tr>
                  <th>Time</th>
                  <td>{time}</td>
                </tr>
                <tr>
                  <th>Venue</th>
                  <td>{venue}</td>
                </tr>
                <tr>
                  <th>Type</th>
                  <td>{type}</td>
                </tr>
                <tr>
                  <th style={{ color: "red" }}>Register Upto</th>
                  <td style={{ color: "red" }}>{regdate}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{des}</td>
                </tr>
              </table>
            </center>
            <button
              className="btn btn-info view1"
              data-toggle="modal"
              disabled={x == 1 ? true : false}
              data-target="#mymodal1"
            >
              Register Now
            </button>
           
            <button
              className="btn btn-info view1"
              data-toggle="modal"
              data-target="#mymodal2"
              style={{float:"left"}}
            >
               Winners List
            </button>
            <div className="modal fade" id="mymodal2" role="dialog">
              <div className="modal-dialog modal-md ">
                <div className="modal-content">
                  <div className="modal-body deptfrm">
                    <button
                      type="button"
                      className="btn btn-danger closd cross"
                      data-dismiss="modal"
                    >
                      X
                    </button>

                    <h3> Winners List for {name}: </h3>
                    <br />
                    <object data={getfile} width="565" height="500"></object>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="modal fade" id="mymodal1" role="dialog">
        <div className="modal-dialog modal-md ">
          <div className="modal-content">
            <div className="modal-body deptfrm">
              <button
                type="button"
                className="btn btn-danger closd cross"
                data-dismiss="modal"
              >
                X
              </button>

              <form  ref={form} onSubmit={sendEmail}>
                <div className="form-group frms">
                  <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
                    Registration Form for {name}
                  </h3>
                  <br />
                  <div className="form-group frms hide" >
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-user"></i></span> 
             <input
                        type={'text'}
                        defaultValue={soc}
                        className="form-control"
                        name='user_society'
                        readOnly
                        required
                        />
           </div>
            </div>
                  <div className="form-group frms hide" >
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-user"></i></span> 
             <input
                        type={'text'}
                        defaultValue={name}
                        className="form-control"
                        name='user_event'
                        readOnly
                        required
                        />
           </div>
            </div>
                  <div className="input-group">
                    <span className="input-group-addon glycol">
                      <i className="glyphicon glyphicon-user"></i>
                    </span>
                    <input
                      type={"text"}
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      pattern="[A-Z][a-zA-Z ]+"
                      title="Please fill alphabets only and First letter should be capital"
                      value={name1}
                      required
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group frms">
                  <div className="input-group">
                    <span className="input-group-addon glycol">
                      <i className="	glyphicon glyphicon-education"></i>
                    </span>
                    <input
                      type={"text"}
                      name="rollno"
                      placeholder="College Roll no."
                      className="form-control"
                      pattern="[0-9]+"
                      title="Please Enter Digits Only"
                      value={crn}
                      required
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group frms">
                  <div className="input-group">
                    <span className="input-group-addon glycol">
                      <i className="	glyphicon glyphicon-home"></i>
                    </span>

                    <input
                      name="departmentname"
                      className="form-control"
                      value={dept}
                      required
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group frms">
                  <div className="input-group">
                    <span className="input-group-addon glycol">
                      <i className="	glyphicon glyphicon-list-alt"></i>
                    </span>

                    <input
                      name="semester"
                      className="form-control"
                      value={semester}
                      required
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group frms">
                  <div className="input-group">
                    <span className="input-group-addon glycol">
                      <i className="	glyphicon glyphicon-envelope"></i>
                    </span>

                    <input
                      name="email"
                      className="form-control"
                      value={email}
                      required
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group frms">
                  <div className="input-group">
                    <span className="input-group-addon glycol">
                      <i className="	glyphicon glyphicon-earphone"></i>
                    </span>

                    <input
                      name="contact"
                      className="form-control"
                      value={contact}
                      required
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group frms">
                  <div className="input-group">
                    <span className="input-group-addon glycol">
                      <i className="	glyphicon glyphicon-user"></i>
                    </span>

                    <input
                      name="gender"
                      className="form-control"
                      value={gender}
                      required
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type={"submit"}
                    value="Register"
                    className="btn btn-info view1"
                  />
                  <br />
                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}