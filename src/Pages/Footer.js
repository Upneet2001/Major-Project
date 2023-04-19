import React from 'react'
import { FaAddressCard, FaCircle, FaDotCircle, FaEnvelope, FaGlobe, FaPhone } from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function(){
  return (
    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  foot'>
             
        <br/>
        <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12">
        <center><img src="logoji.png" className="img-responsive footpic1 " />
        <br/>
              <img src="gnelogo.png" className="img-responsive footpic" /></center>
            </div>

          <div className="col-lg-5 col-md-5 col-sm-4 col-xs-8">
          <h3><b>Contact:</b></h3>
          <br/>
           <h4><FaGlobe/> <a className="webs" href="https://www.gndec.ac.in/"> GNDEC Website</a></h4>
            <h4><FaPhone/> 0161-2502700, 0161-5064501</h4>
            <h4><FaEnvelope/> principal@gndec.ac.in</h4>
            <h4><FaAddressCard/> Guru Nanak Dev Engineering College Gill Park, Gill Road, Ludhiana 141006, Punjab(India).</h4>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-4">
              <h3><b>Quick Links:</b></h3>
              <br/>
                <h4><Link to="/StudHome" className='webs'> Home</Link></h4>
        
                <h4><Link to="/Infoupdate" className='webs'>Update Profile</Link></h4>
              
                <h4><Link to='/Dashboardstudent' className='webs'>Chat Access</Link></h4>
              
                <h4><Link to="/Applysoc" className='webs'>Apply For Society</Link></h4>
             
                <h4><Link to="/Studsoc" className='webs'>Societies</Link></h4>
              
                <h4><Link to="/Studevent" className='webs'>Events</Link></h4>
                <br/>
              
            </div>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 pow'><h4><center>Powered by Genconians</center></h4></div>
     </div>
  )
}
