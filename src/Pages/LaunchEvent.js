import React from "react";
import axios from 'axios';
import swal from 'sweetalert';
import SocDashboard from "./SocDashboard";
import { db } from "./Firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SocSidebar from "./SocSidebar";
import SocNavbar from "./SocNavbar";




export default function LaunchEvent() {
  var uri = "http://localhost:1200/";
  var navi = useNavigate();
  useEffect(() => {
      var id = localStorage.getItem('SocietyLogin')
      if(!id){
          navi('/Soclogin');
      }
  })
  var id = localStorage.getItem('SocietyLogin')
const [branch, setname] = useState("");
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


  function handleform(e) {
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var Society= dep;
    var Department = branch;
    var name= data.get('name');
   var EventName= data.get('eventname');
   var Datte= data.get('eventdate');
    var View= data.get('eventview');
   var  Time= data.get('eventtime');
   var Type= data.get('eventtype');
   var Reg= data.get('regdate');
    var Description= data.get('eventdescription');
    
    console.log(name);
    var dtes= new Date();

    var ref = db.ref();
    const metadata={
      contentType: name.type
    }
    ref.child(name.name).put(name,metadata).then(snapshot =>
      snapshot.ref.getDownloadURL()).then(url=>{
        console.log(url)
        var imgdata={ 
          Society: Society,
          Department: Department,
          EventName: EventName,
          Date: Datte,
          Venue: View,
          Time: Time,
          Type: Type,
          RegDate:Reg,
          Description: Description,
          URL: url,
          CurrentDate: dtes.getDate()+'-'+(dtes.getMonth()+1)+'-'+(dtes.getFullYear()),
        }
        axios.post(uri+"AddEventDetails",imgdata).then((succ)=>{
          console.log(succ.data)
          if(succ.data == "ok"){
                    swal("Data Added","","success")
                    e.target.reset();
                    e.target.name.focus();
                }
        })
      })
  }



    // var obj = {

    // }
    // axios.post(uri+'AddEventDetails', obj).then((succ) => {
    //     if(succ.data == "ok"){
    //         swal("Data Added","","success")
    //         e.target.reset();
    //         e.target.name.focus();
    //     }
    // })
  
  return (
    <div className="department socabout">
      
  <SocSidebar/>
      <SocNavbar />
        <div className="col-lg-10 col-md-10 col-sm-9 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 marge1">
          <form className=" login" onSubmit={handleform}>
           <center> <h2><b>Event Details</b></h2></center>
            <div className=" col-lg-offset-2 col-md-offset-2 col-sm-offset-0 col-xs-offset-0 col-lg-8 col-md-8 col-sm-12 col-xs-12 ">
                <div className="form-group">
                  <label>Name:</label>
                  <input type={"text"} name="eventname" placeholder="Event Name" className="form-control" required
                  />
                </div>
                <div className="form-group">
                  <label>Date:</label>
                  <input type={"date"} name="eventdate" placeholder="Event Date" className="form-control" required
                  />
                </div>
                <div className="form-group">
                  <label>Venue:</label>
                  <input type={"text"} name="eventview" placeholder="Event Venue" className="form-control" required
                  />
                </div>
                <div className="form-group">
                  <label>Time:</label>
                  <input type={"time"} name="eventtime" placeholder="Event Time" className="form-control" required
                  />
                </div>
                <div className="form-group">
                  <label>Type:</label>
                  <input type={"text"} name="eventtype" placeholder="Event Type" className="form-control" required
                  />
                </div>
                <div className="form-group">
                  <label>Registrations Before:</label>
                  <input type={"date"} name="regdate" placeholder="Registrations upto" className="form-control" required
                  />
                </div>
                <div className="form-group">
                  <label>Description:</label><br/>
                <textarea className="form-control" name="eventdescription" placeholder="Event Description" rows={"4"} cols={"100"} ></textarea>
                </div>
                <div className="form-group">
                  <label>Template:</label><br/>
                  <input type={"file"} name="name" placeholder="Event Time" className="filee"/>
                  </div>
                  <div className="form-group">
                <input type={'submit'} value="Submit" className="btn btnn btn-default subevent"/>
            </div>
            </div>
          </form>
        </div>
      </div>
  )
  
  }
