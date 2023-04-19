import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import Currentnav from "./Currentnav";
import Footer from "./Footer";
import emailjs from "@emailjs/browser"
import {useRef} from 'react'


const Feedback= () =>{
  const form = useRef()

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
  
const [data2, setdata2] = useState([]);
const [dep, setdep] = useState("");
const [soc, setsoc] = useState("");
const [logo, setlogo] = useState("");
function getdata2() {
    if(idd){
  axios.post(uri + "getcursoc",{ ID: idd}).then((succ) => {
    setdata2(succ.data);
    setdep(succ.data[0].Department);
    setsoc(succ.data[0].Society);
    setlogo(succ.data[0].URL);
    console.log(succ.data);
  });
}
}
useEffect(() => {
          getdata2();},[idd]);
          console.log(dep);
          console.log(soc);



         
          const [coord, setcoord] = useState("");
          function getdata() {
            if (soc) {
              axios.post(uri + "showmember", { Dep: dep, Soc: soc }).then((succ) => {
                console.log(succ.data);
                setcoord(succ.data[0].Coordinator);
              });
            }
          }
        
          useEffect(() => {
            getdata();
          }, [soc]);
        
          var a =  coord.split(' (');
          var b = a[0];
      
          
          const [eml, seteml] = useState("");
          const [datab, setdatab] = useState([]);
          function geteml() {
            if (b) {
              axios.post(uri + "getcoordeml", {Name1: b, cnn:  a[1].slice(0, 7)}).then((succ) => {
                setdatab(succ.data);
                console.log(succ.data);
                seteml(succ.data.Email);
              }); 
          }
        }
          
          useEffect(() => {
            geteml();
          }, [b]);

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
              });
            }
          }
          useEffect(() => {
            checkid();
          }, [id]);

          const sendEmail = (e) => {
      emailjs.sendForm('service_c0hxe9i', 'template_czrl7dq', form.current, '5xt65huVD1rbST7ra')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
       
    
        e.preventDefault();
        var dtes= new Date();
        var data = new FormData(e.currentTarget);
        var obj = {
            Society: soc,
            Department: dep,
            Name: name1,
            Email: email,
            CRN: crn,
            Branch: dept,
            Semester: semester,
            Feedback:data.get('subject'),
            Date: dtes.getDate()+'-'+(dtes.getMonth()+1)+'-'+(dtes.getFullYear()),
        }
        axios.post(uri+'Addfeedback', obj).then((succ) => {
            // console.log(succ.data);
            if(succ.data == "ok"){
                // alert('Data Added');
                swal("Data Added","","success")
                e.target.reset();
                e.target.name.focus();
            }
        })
    }
    

    return (
        <>
         <div className="main"> 
         <Currentnav/>
        <div className="container-fluid regi">
            <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12 register margefew">
            <div className="col-lg-6 col-md-6 col-sm-5 col-xs-12 img2"><br/><br/><br/><br/><br/>
            <img src="feedback.jfif" className="img-responsive img2" />
            </div>
            
            
            <div className="col-lg-6 col-md-6 col-sm-7 col-xs-12 reg">
            <center>
            <form  ref={form} className=" col-lg-10 col-md-10 col-sm-12 col-xs-12 login" onSubmit={sendEmail}>
                <h3 className="text2">Feedback</h3>
                <div className="form-group frms hide" >
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-user"></i></span> 
             <input
                        type={'text'}
                        defaultValue={coord}
                        className="form-control"
                        name='coord'
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
                        defaultValue={soc}
                        className="form-control"
                        name='user_society'
                        readOnly
                        required
                        />
           </div>
            </div>
            <div className="form-group frms hide">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-user"></i></span> 
             <input
                        type={'text'}
                        defaultValue={eml}
                        className="form-control"
                        name='user_coord'
                        readOnly
                        required
                        />
           </div>
            </div>
            
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-user"></i></span> 
             <input
                        type={'text'}
                        defaultValue={name1}
                        className="form-control"
                        name='user_name'
                        readOnly
                        required
                        />
           </div>
            </div>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="	glyphicon glyphicon-education"></i></span>
             <input
                        type={'text'}
                      defaultValue={crn}
                        name='user_crn'
                        className="form-control" 
                        readOnly
                        required 
                        />
            </div>
            </div>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-envelope"></i></span> 
             <input type={'email'} 
             defaultValue={email} 
             name='user_email'
              readOnly 
              className="form-control" 
              required
              />
           </div>
            </div>

            <div className="form-group frms" >
            <div className="input-group ">
           <textarea type={'text'} name="subject" placeholder="Give Your Feedback" rows={6} cols={40} className="form-control" required/>
           </div>
            </div>
            <div className="form-group">
                <input type={'submit'} value="Submit" className="btn btnn btn-info sub"/>
                
            </div>
        </form>
      
        </center>
        </div>
</div>
</div>
<Footer/>
</div>

        </>
    )
}
export default Feedback