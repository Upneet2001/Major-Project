import React, { useEffect, useState } from "react";
import { FaUsers, FaComments, FaCalendarCheck, FaListOl, FaList, FaThList, FaRegListAlt, FaAddressBook, FaAddressCard, FaAudioDescription, FaEdit, FaParagraph, FaParachuteBox, FaBook} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import SocDashboard from "./SocDashboard";
import Chat from "./Chat";
import SocSidebar from "./SocSidebar";
import SocNavbar from "./SocNavbar";


export default function Societypanel() {
  var navi = useNavigate();
  useEffect(() => {
      var id = localStorage.getItem('SocietyLogin')
      if(!id){
          navi('/Soclogin');
      }
  })
  return (
    <div>
       <SocSidebar />
      <SocNavbar />
      
        <div className='col-lg-10 col-md-10 col-sm-9 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 social marge1'>
                        
                        <div className="col-lg-3 col-md-3 col-sm-5 col-xs-11 panell">
                            <center>
                            <span className="paneltop"><FaAddressCard/></span>
                            <div className="panelbody">Society Applicants</div><br/>
                            <button className="btn btn-info view"><Link to="/Registeredlist" className="update">View</Link></button>
                            </center>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-5 col-xs-11 panell">
                            <center>
                            <span className="paneltop"><FaUsers/></span>
                            <div className="panelbody">Update Members</div><br/>
                            <button className="btn btn-info view "><Link to="/Updateprofile" className="update">Update</Link></button>&nbsp;
                            <button className="btn btn-info view"><Link to="/Socviewmem" className="update">View</Link></button>
                            </center>
                        </div>
                        
                        <div className="col-lg-3 col-md-3 col-sm-5 col-xs-11 panell">
                            <center>
                            <span className="paneltop"><FaCalendarCheck/></span>
                            <div className="panelbody">Launch an Event</div><br/>
                            <button className="btn btn-info view"><Link to="/LaunchEvent" className="update">Event</Link></button>
                            </center>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-5 col-xs-11 panell">
                            <center>
                            <span className="paneltop"><FaRegListAlt/></span>
                            <div className="panelbody">Event List</div><br/>
                            <button className="btn btn-info view"><Link to="/Viewevents" className="update">List</Link></button>
                            </center>
                        </div>
                       
                        <div className="col-lg-3 col-md-3 col-sm-5 col-xs-11 panell">
                            <center>
                            <span className="paneltop"><FaEdit/></span>
                            <div className="panelbody">About Society</div><br/>
                            <button className="btn btn-info view"><Link to="/Socabout" className="update">Add</Link></button> &nbsp;
                            <button className="btn btn-info view"><Link to="/Aboutupdate" className="update">Edit</Link></button>
                           
                            </center>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-5 col-xs-11 panell">
                            <center>
                            <span className="paneltop"><FaComments/></span>
                            <div className="panelbody">Chat Group</div><br/>
                            <button className="btn btn-info view"><Link to="/Chat" className="update">Chat</Link></button>
                            </center>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-5 col-xs-11 panell">
                            <center>
                            <span className="paneltop"><FaBook/></span>
                            <div className="panelbody">View Feedback</div><br/>
                            <button className="btn btn-info view"><Link to="/ViewFeedback" className="update">View</Link></button> &nbsp;
                            </center>
                        </div>
                        
                        
            </div>
</div>
  )
}
