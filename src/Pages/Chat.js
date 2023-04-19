import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser, FaComments, FaCalendarCheck } from "react-icons/fa";
import SocDashboard from "./SocDashboard";
import SocSidebar from "./SocSidebar";
import SocNavbar from "./SocNavbar";
import ScrollToBottom from 'react-scroll-to-bottom';

export default function Chat() {
  var uri = "http://localhost:1200/";
  var navi = useNavigate();

  useEffect(() => {
    var id = localStorage.getItem("SocietyLogin");
    if (!id) {
      navi("/SocLogin");
    }
  });
  var id = localStorage.getItem("SocietyLogin");
  const [name, setname] = useState("");
  const [dep, setdep] = useState("");
  function checkid() {
    if (id) {
      axios.post(uri + "getonesoc", { Id: id }).then((succ) => {
        console.log(succ.data);
        setname(succ.data.Department);
        setdep(succ.data.Society);
      });
    }
  }

  useEffect(() => {
    checkid();
  }, [id]);

  const [coord, setcoord] = useState("");
  function checkcoord() {
    if (dep) {
      axios.post(uri + "showmember", { Dep: name, Soc: dep }).then((succ) => {
        console.log(succ.data);
        setcoord(succ.data[0].Coordinator);
      });
    }
  }
  useEffect(() => {
    checkcoord();
  }, [dep]);

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
      Clubname: dep,
      Chatuser: coord,
      Message: data.get("message"),
      Date:
        dtes.getDate() + "-" + (dtes.getMonth() + 1) + "-" + dtes.getFullYear(),
      Time: hoursIST + ":" + minutesIST,
    };
    axios.post(uri + "chatsoc", obj).then((succ) => {
      // console.log(succ.data);
      if (succ.data == "ok") {
        // alert("Data Added");
        e.target.reset();
        chatobt();
      }
    });
  }
  const [data1, setdata1] = useState([]);
  function chatobt() {
    if (coord) {
      axios.post(uri + "getchat", { Dep: dep }).then((succ) => {
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
    }, [ coord]);
  // useEffect(() => {
  //   chatobt();
  // }, [coord]);



  return (
    <div className="DashboardStudent">
           <SocSidebar />
      <SocNavbar />
    
      <div className=" chatt col-lg-6 col-lg-offset-4 col-md-6 col-md-offset-4 col-sm-7 col-sm-offset-4 col-xs-12 col-xs-offset-0 marge1 ">
        <div className="headers">
          <div className="i1 ">
            <FaComments />
          </div>
          <div className="grp-info col-lg-12">
            <h3 className="grp-name naaam">{coord}</h3>
            <p className="grp-status naaam">
              {dep} ({name})
            </p>
          </div>
        </div>

        <ScrollToBottom className="containerchat">
          {data1.map((row) => (
            <div className="chatbox">
              <div className="chat">
               
                <p className="msg">
                  <span className="chatname"></span>
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
          <div className="policy" >
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
  );
}
