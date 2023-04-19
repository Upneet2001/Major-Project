import React from "react";
import axios from 'axios';
import swal from 'sweetalert';
import SocDashboard from "./SocDashboard";
import { db } from "./Firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SocSidebar from "./SocSidebar";
import SocNavbar from "./SocNavbar";

export default function () {
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
      var About= data.get('about');
      var Vision= data.get('vision');
      var Email= data.get('email');
      var Contact= data.get('contact');
      var Address= data.get('address');
      var Facebook= data.get('facebook');
      var Instagram= data.get('instagram');
      var Twitter= data.get('twitter');
      var Faculty= data.get('faculty');
      console.log(name);
  
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
            About: About,
            Vision: Vision,
            URL: url,
            Email: Email,
            Contact: Contact,
            Address: Address,
            Facebook: Facebook,
            Instagram: Instagram,
            Twitter: Twitter,
            Faculty: Faculty,
          }
          swal({
            title: "Confirmation",
            text: "Are you sure you want to add this?",
            icon: "info",
            buttons: true,
            defaulltMode: true,
          })
            .then((willAdd) => {
              if (willAdd) {
          axios.post(uri+"Addaboutus",imgdata).then((succ)=>{
            console.log(succ.data)
            if(succ.data == "ok"){
                      swal("Data Added","","success")
                      e.target.name.focus();
                      e.target.reset();
                    }
                  });
                    }
                    });
                  })
                }
              
              
  return (
    <div className="socabout">
    <SocSidebar />
      <SocNavbar />
    <div className='aboutsociety'>
    <div className="col-lg-10 col-md-10 col-sm-8 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 marge1">
    <form className="" onSubmit={handleform}>
    <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-1 col-xs-12">
       <div className="text3">Regarding Society</div>
        <br/>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
        <div className="form-group">
                  <label>About Society</label><br/>
                <textarea className="form-control" name="about" placeholder="About Society" rows={"4"} cols={"100"} required ></textarea>
                </div>
                <div className="form-group">
                  <label>Our Vision</label><br/>
                <textarea className="form-control" name="vision" placeholder="Our Vision" rows={"4"} cols={"100"} required ></textarea>
                </div>

                <div className="form-group frms" >
                <label>Faculty Incharge</label><br/>
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-user"></i></span> 
           <input type={'text'} name="faculty" placeholder="Faculty Incharge" className="form-control" required/>
           </div>
            </div>
                

                <div className="form-group">
                  <label>Background Picture:</label><br/>
                  <input type={"file"} name="name" className="filee" required/>
                  </div>
                  <br/>
                
            <div className="text3">Contact info</div>
           <br/>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-envelope"></i></span> 
           <input type={'email'} name="email" placeholder="Email" className="form-control" required/>
           </div>
            </div>

            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-map-marker"></i></span> 
           <input type={'text'} name="address" placeholder="Address" className="form-control" required/>
           </div>
            </div>

            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-earphone"></i></span>
             <input
                        type={'tel'}
                        name="contact"
                        placeholder="Contact" 
                        className="form-control" required 
                         pattern="[5-9][0-9]{9}"
                         title="Please Enter 10 digit phone number"
                        />
            </div>
            </div><br/>
            <label>Media Platforms:-</label>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol"><FaFacebook/></span> 
           <input type={'text'} name="facebook" placeholder="Facebook" className="form-control" />
           </div>
            </div>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol"><FaInstagram/></span> 
           <input type={'text'} name="instagram" placeholder="Instagram" className="form-control" />
           </div>
            </div>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol"><FaLinkedin/></span> 
           <input type={'text'} name="twitter" placeholder="LinkedIn" className="form-control" />
           </div>
            </div>

            <div className="form-group">
                <input type={'submit'} value="Submit" className="btn btnn btn-default subevent"/>
            </div>
</div>
                 
</div>
        </form>
            
        </div>
    </div>

    </div>
    
  )
}