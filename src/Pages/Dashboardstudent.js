import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Studentnavbar from "./Studentnavbar";
import { FaUser, FaComments, FaCalendarCheck, FaFacebookMessenger, FaSnapchat } from "react-icons/fa";
import Studentsidebar from "./Studentsidebar";
import Footer from "./Footer";
import ScrollToBottom from 'react-scroll-to-bottom';


export default function Dashboardstudent() {

  const [show, setshow] = useState(false);
  var uri = "http://localhost:1200/";
  var navi = useNavigate();

  useEffect(() => {
    var id = localStorage.getItem("Studentlogin");
    // console.log(id);
    if (!id) {
      navi("/Login");
    }
  });

  var idd = localStorage.getItem("Studentlogin");

  const [name, setname] = useState("");
  const [crn, setcrn] = useState("");
  const [data, setdata] = useState([]);
  const [branch, setbranch] = useState("");
  function checkid() {
    if (idd) {
      axios.post(uri + "matchuser", { Idd: idd }).then((succ) => {
        setname(succ.data.Name);
        setcrn(succ.data.CRN);
        setdata(succ.data);
        setbranch(succ.data.Branch);
      });
    }
  }
  useEffect(() => {
    checkid();
  }, [idd]);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setshow(true);
    }
  }, []);

  var formname = name + " ("+ crn + ")";
  console.log(formname)
  
  const [soc, setsoc] = useState([]);
  const [dep, setdep] = useState("");
  function getdata2() {
    if (formname) {
      axios.post(uri + "getalldata", { Name : formname }).then((succ) => {
        console.log(succ.data);
        setsoc(succ.data);
      });
    }
  }
  useEffect(() => {
    getdata2();
  }, [formname]);

  function View(x) {
    navi("/Dashboardstudent?id=" + x);
  }

  var id = new URLSearchParams(window.location.search).get("id");
  // console.log(id)

  
  function handleform(e) {
    e.preventDefault();
    var dtes = new Date();
    var currentOffset = dtes.getTimezoneOffset();
    var ISTOffset = 330;
    var ISTTime = new Date(
      dtes.getTime() + (ISTOffset + currentOffset) * 60000
    );
    var hoursIST = ISTTime.getHours();
    var minutesIST = ISTTime.getMinutes();

    // document.write("<b>" + hoursIST + ":" + minutesIST + " " + "</b>");
    var data = new FormData(e.currentTarget);
    var obj = {
      Clubname: soc1,
      Chatuser: formname,
      Message: data.get("message"),
      Date:
        dtes.getDate() + "-" + (dtes.getMonth() + 1) + "-" + dtes.getFullYear(),
      Time: hoursIST + ":" + minutesIST,
    };
    axios.post(uri + "chatsoc", obj).then((succ) => {
      // console.log(succ.data);
      if (succ.data == "ok") {
        e.target.reset();
        chatobt();
      }
    });
  }
  const [soc1, setsoc1] = useState("");
  const [dept1, setdepart] = useState("");
  const [dat, setdat] = useState([]);
  function getdt() {
    if (id) {
      axios.post(uri + "getnaam", {ID : id }).then((succ) => {
        console.log(succ.data);
        setdat(succ.data);
        setsoc1(succ.data[0].Society);
        setdepart(succ.data[0].Branch)
        console.log(succ.data[0].Society);
      });
    }
  }
  useEffect(() => {
    getdt();
  }, [id]);

  const [data1, setdata1] = useState([]);
  function chatobt() {
    if (soc1) {
      axios.post(uri + "getchat", { Dep: soc1 }).then((succ) => {
        console.log(succ.data);
        setdata1(succ.data);
      });
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      chatobt();
      },1000);
      return () => clearInterval(interval);
    }, [ soc1]);
    
  // useEffect(() => {
  //   // if(soc1){
  //   // setTimeout(getdt, 2000);
  //   // setTimeout( chatobt, 2000);
  //   // }
  //   chatobt();
  // }, [soc1]);

// window.setInterval('refresh()', 1000);

// function refresh() {
// window . location. reload();
// }
  // const [show1, setshow1] = useState(true);
  // var x = 0;
  
  // data1.map((row) => (

  //     (formname==row.userr)?
  //       setshow1(false):setshow1(true)
      
  // ))
  return (
    <div className="Dashboardstudent">
      <Studentsidebar />
      <Studentnavbar />
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  marge">
        <div className="col-lg-4">
          <ul className="list-group">
           
            <div className="click"><center><img src="chat.png" className="img-responsive " /></center></div>
            {soc.map((row) => (
              <li onClick={() => View(row._id)} className="list-group-item cp">
                {row.Society}
              </li>
            ))}
          </ul>
        </div>

         <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12 ">
          {id ? (
            <div>
              <div className=" chatt  col-lg-8 col-lg-offset-2  col-md-8 col-md-offset-2  col-sm-10 col-sm-offset-2  col-xs-12  ">
                <div className="headers">
                  <div className="i1 ">
                    <FaComments />
                  </div>
                  <div className="grp-info col-lg-12">
                    <h3 className="grp-name"></h3>
                    <p className="grp-status">
                      {name}({crn})<br/> 
                      {soc1}({dept1})
                    </p>
                  </div>
                </div>
                <ScrollToBottom className="containerchat">
          {data1.map((row) => (
            // <div className= {` ${formname==row.userr ? "chatbox" : "chatboxme" }`}>
            <div className="chatbox">
              <div className="chat">
               
                <p className="msg">
                  <span className="chatname" ></span>
                  {row.userr}
                  {row.Message}
                <div>
                  <span className="tithi"> {row.Date}</span> 
                  <span className="tim">{row.Time}</span></div>
                </p>
                <div className="i2">
                  <FaUser />
                  <div className="timee">
                    {row.Chatuser}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>

                <form onSubmit={handleform}>
                  <div className="policy">
                    <div className="input-group col-lg-11 col-md-11 col-sm-11 col-xs-11">
                      <input
                        type="text"
                        name="message"
                        className="form-control"
                        placeholder="Type your message"
                      />
                    </div>
                    <div>
                      <button className="btn btnn">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className=" paneltopp"><img src ="message.png" className="img-responsive"/><i>
          **Only society members can access the chat.</i></div>
          )}
        </div>

        </div>
        <Footer/>
    </div>
  );
}