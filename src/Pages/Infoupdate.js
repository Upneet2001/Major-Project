import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import Studentnavbar from "./Studentnavbar";
import Footer from "./Footer";




export default function Infoupdate() {
    var uri = "http://localhost:1200/";
    var navi = useNavigate();
  
    useEffect(() => {
      var id = localStorage.getItem("Studentlogin");
      if (!id) {
        navi("/Login");
      }
    });
  const [name, setname] = useState("");
  const [rollno, setrollno] = useState("");
  const [branch, setbranch] = useState("");
  const [gender, setgender] = useState("");
  const [semester, setsemester] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [password, setpassword] = useState("");
  const [idd, setidd] = useState("");
  var id = localStorage.getItem("Studentlogin");


  function checkid() {
    if (id) {
      axios.post(uri + "getoneuser", { Id: id }).then((succ) => {
        console.log(succ.data);
        setname(succ.data.Name);
        setrollno(succ.data.CRN);
        setbranch(succ.data.Branch);
        setgender(succ.data.Gender);
        setsemester(succ.data.Semester);
        setemail(succ.data.Email);
        setcontact(succ.data.Contact);
        setpassword(succ.data.Password);
        setidd(succ.data._id);
        console.log(succ.data.CRN);
      });
    }
  }

  useEffect(() => {
    checkid();
  }, []);
console.log(idd);
    function handleform(e) {
        e.preventDefault();
        var dtes= new Date();
        var data = new FormData(e.currentTarget);
        var obj = {
            idd: idd,
            Name: data.get('name'),
            Email: data.get('email'),
            Password: data.get('password'),
            Contact: data.get('contact'),
            CRN: data.get('rollno'),
            Branch: data.get('departmentname'),
            Semester: data.get('sem'),
            Gender: data.get('gender'),
            Date: dtes.getDate()+'-'+(dtes.getMonth()+1)+'-'+(dtes.getFullYear()),
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
                  axios.post(uri+"updateinfo",obj).then((succ)=>{
                    if (succ.data == "updated") {
                        swal("Data Updated", "", "success");
                        e.target.reset();
                        checkid();
                      }
                    });
                      }
                      });
                    }
    
    const [data, setdata]= useState([]);
    function getdata(){
        axios.get(uri+'getsociety').then((succ) => {
            setdata1(succ.data);
            console.log(succ.data);
        })
    }

    useEffect(()=> {getdata1();}, [])
    
        const [data1, setdata1]= useState([]);
    function getdata1(){
        axios.get(uri+'getsociety').then((succ) => {
            setdata1(succ.data);
            console.log(succ.data);
        })
    }

    useEffect(()=> {getdata1();}, [])
    const [show, setshow] = useState(true);
    return (
        <div className="maininfo">
        <Studentnavbar/>
       <center> <div className="main"> 
            
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 reg marge">
            <center><img src="update.png" className="img-responsive" /></center>
            <center>
            <form className=" col-lg-6 col-md-6 col-lg-offset-3 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 login" onSubmit={handleform}>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-user"></i></span> 
             <input
                        type={'text'}
                        name="name"
                       defaultValue={name}
                        className="form-control"
                        pattern="[A-Z][a-zA-Z ]+"
                         title="Please fill alphabets only and First letter should be capital" />
           </div>
            </div>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="	glyphicon glyphicon-education"></i></span>
             <input
                        type={'text'}
                        name="rollno"
                        defaultValue={rollno}
                        className="form-control" 
                        pattern="[0-9]+"
                        title="Please Enter Digits Only"
                         />
            </div>
            </div>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-envelope"></i></span> 
           <input type={'email'} name="email" defaultValue={email} className="form-control" />
           </div>
            </div>

            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="	glyphicon glyphicon-home"></i></span>
            
            <select name="departmentname" className="form-control" >
            <option>{branch}</option>
            {data1.map((row)=> (
            <option>{row.Department}</option>
             ))}
               </select>
             </div>                                    
            </div>
            
            
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-list-alt"></i></span>
             <input
                        type={'number'}
                        name="sem"
                        defaultValue={semester} min={1} max={8}
                        className="form-control"  />
            </div>
            </div>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-earphone"></i></span>
             <input
                        type={'tel'}
                        name="contact"
                        defaultValue={contact}
                        className="form-control"  
                         pattern="[5-9][0-9]{9}"
                         title="Please Enter 10 digit phone number"
                        />
            </div>
            </div>
           
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-user"></i></span>
             <select
                        name="gender" 
                        className="form-control" >
                            <option>{gender}</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    </div>
            </div>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-lock"></i></span>
                        <input
                        type={show ? ('password'): ('text')} 
                        name="password"
                        defaultValue={password}
                        className="form-control"  
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                        />
                        <div className="input-group-btn">
                       { show ? (
                        <i type={'button'} onClick={() => setshow(false)} className="glyphicon glyphicon-eye-open btn btn-default eye">
                        </i>
                        ) : (
                        <i type={'button'} onClick={() => setshow(true)} className="btn glyphicon glyphicon-eye-close  btn btn-default eye">
                        </i>
                        )
                       }
                        <div/>
                        </div>
                        </div>
            </div>
            
            <div className="form-group">
                <input type={'submit'} value="Update" className="btn btnn btn-info sub"/>
                
            </div>
        </form>
        
        </center>
        </div>
        
</div></center> 
<Footer/>
        </div>
        
    )
}