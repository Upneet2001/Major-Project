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
  
    const[about, setabout]= useState("");
    const[url, seturl]= useState("");
    const[vision, setvision]= useState("");
    const [data1, setdata1] = useState([]);
    const[email, setemail]= useState("");
    const[address, setaddress]= useState("");
    const[contact, setcontact]= useState("");
    const[facebook, setface ]= useState("");
    const[instagram, setinsta]= useState("");
    const[twitter, settweet]= useState("");
    const[faculty, setfaculty]= useState("");

    const [idd, setidd] = useState("");
    function getdata1() {
      axios.post(uri + "getabout", { Dep: dep }).then((succ) => {
        // console.log(succ.data);
        setidd(succ.data[0]._id);
        // console.log(succ.data[0].About);
        setabout(succ.data[0].About)
        setvision(succ.data[0].Vision)
        setemail(succ.data[0].Email)
        setaddress(succ.data[0].Address)
        setcontact(succ.data[0].Contact)
        setface(succ.data[0].Facebook)
        setinsta(succ.data[0].Instagram)
        settweet(succ.data[0].Twitter)
        seturl(succ.data[0].URL)
        setfaculty(succ.data[0].Faculty)
      });
    }
    useEffect(() => {
        getdata1();
    });

    function handleform(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
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
        // console.log(name);
        // console.log(facebook);
        // console.log(Vision);
    
        var ref = db.ref();
        const metadata={
          contentType: name.type
        }
        ref.child(name.name).put(name,metadata).then(snapshot =>
          snapshot.ref.getDownloadURL()).then(url=>{
            console.log(url)
            var obj={ 
              idd: idd,
            About: About,
            Vision: Vision,
            URL: url,
            Email: Email,
            Contact: Contact,
            Address: Address,
            Facebook: Facebook,
            Instagram: Instagram,
            Twitter: Twitter,
            Faculty:Faculty,
            }
            swal({
              title: "Confirmation",
              text: "Are you sure you want to update this?",
              icon: "info",
              buttons: true,
              defaulltMode: true,
            })
              .then((willAdd) => {
                if (willAdd) {
                  axios.post(uri+"updateabout",obj).then((succ)=>{
                    if (succ.data == "updated") {
                        swal("Data Updated", "", "success");
                        e.target.reset();
                        getdata1();
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
    <div className="col-lg-10 col-md-10 col-sm-9 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 marge1">
    <form className="" onSubmit={handleform} >
    <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-1 col-xs-12">
       <div className="text3">Regarding Society</div>
        <br/>
        <div className="form-group">
                  <label>About Society</label><br/>
                <textarea className="form-control" name="about" defaultValue={about} rows={"4"} cols={"100"} ></textarea>
                </div>
                <div className="form-group">
                  <label>Our Vision</label><br/>
                <textarea className="form-control" name="vision" defaultValue={vision} rows={"4"} cols={"100"} ></textarea>
                </div>

                <div className="form-group frms" >
                <label>Faculty Incharge</label><br/>
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-user"></i></span> 
           <input type={'text'} name="faculty" defaultValue={faculty} className="form-control" required/>
           </div>
            </div>
                
                <div className="form-group">
                  <label>Background Picture:</label><br/>
                  <img src={url} className="img-responsive imgg"/><br/>
                  <input type={"file"} name="name" className="filee" title="Select either a new picure or add previous one to update" required /><br/>
                  </div>

                  <div className="text3">Contact info</div>
           <br/>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-envelope"></i></span> 
           <input type={'email'} name="email" defaultValue={email} className="form-control" />
           </div>
            </div>

            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-map-marker"></i></span> 
           <input type={'text'} name="address" defaultValue={address} className="form-control" />
           </div>
            </div>

            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-earphone"></i></span>
             <input
                        type={'tel'}
                        name="contact"
                        defaultValue={contact} 
                        className="form-control" required 
                         pattern="[0-9][0-9]{9-10}"
                         title="Please Enter 10 digit phone number"
                        />
            </div>
            </div><br/>
            <label>Media Platforms:-</label>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol"><FaFacebook/></span> 
           <input type={'text'} name="facebook" defaultValue={facebook} className="form-control" />
           </div>
            </div>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol"><FaInstagram/></span> 
           <input type={'text'} name="instagram" defaultValue={instagram} className="form-control" />
           </div>
            </div>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol"><FaLinkedin/></span> 
           <input type={'text'} name="twitter" defaultValue={twitter} className="form-control" />
           </div>
            </div>
                  <div className="form-group">
                <input type={'submit'} value="Update" className="btn btnn btn-default subevent"/>
            </div>

            </div>
        </form>
            
        </div>
    </div>

    </div>
  )
}
