import React from "react";
import axios from 'axios';
import swal from 'sweetalert';
import SocDashboard from "./SocDashboard";


export default function LaunchEvent() {
  var uri = "http://localhost:1200/";

  function handleform(e) {
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var obj = {
        EventName: data.get('eventname'),
        Date: data.get('eventdate'),
        View: data.get('eventview'),
        Time: data.get('eventtime'),
        Type: data.get('eventtype'),
        Description: data.get('eventdescription'),
    }
    axios.post(uri+'AddEventDetails', obj).then((succ) => {
        if(succ.data == "ok"){
            swal("Data Added","","success")
            e.target.reset();
            e.target.name.focus();
        }
    })
  }

  return (
    <div className="department">
  <SocDashboard/>
      <div className="dept">
        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
          <form className=" col-lg-12 login" onSubmit={handleform}>
           <center> <h1 className="text3 container">Event Details</h1></center>
            <div className=" col-lg-offset-2 col-md-offset-2 col-sm-offset-1 col-xs-offset-1 col-lg-8 col-md-8 col-sm-12 col-xs-12 ">
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
                  <label>Description:</label><br/>
                <textarea className="form-control" name="eventdescription" placeholder="Event Description" rows={"4"} cols={"100"} ></textarea>
                </div>
                <div className="form-group">
                  <label>Template:</label><br/>
                  <input type={"file"} name="eventtime" placeholder="Event Time" className="filee"/>
                  </div>
                  <div className="form-group">
                <input type={'submit'} value="Submit" className="btn btnn btn-default subevent"/>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
  
  }
