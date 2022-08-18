import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


export default function Register() {


    var uri = "http://localhost:1200/";

    function handleform(e) {
        e.preventDefault();
        var dtes= new Date();
        var data = new FormData(e.currentTarget);
        var obj = {
            Name: data.get('name'),
            Email: data.get('email'),
            Password: data.get('password'),
            Contact: data.get('contact'),
            CRN: data.get('rollno'),
            Branch: data.get('departmentname'),
            Semester: data.get('sem'),
            Gender: data.get('gender'),
            Status: "0",
            Date: dtes.getDate()+'-'+(dtes.getMonth()+1)+'-'+(dtes.getFullYear()),
        }
        axios.post(uri+'AddUser', obj).then((succ) => {
            // console.log(succ.data);
            if(succ.data == "ok"){
                // alert('Data Added');
                swal("Data Added","","success")
                getdata();
                getdata1();
                e.target.reset();
                e.target.name.focus();
            }
        })
    }
        const [data1, setdata1]= useState([]);
    function getdata1(){
        axios.get(uri+'getDepart').then((succ) => {
            setdata1(succ.data);
            console.log(succ.data);
        })
    }

    useEffect(()=> {getdata1();}, [])

    

    const [data, setdata] = useState([]);
    function getdata(){
        axios.get(uri+'getUsers').then((succ) => {
            setdata(succ.data);
        })
    }
    useEffect(() => {
        getdata();
    }, [])

    function del(x) {
        // alert(x);
        axios.post(uri+'deleteonedata', {id:x}).then((succ) => {
            if(succ.data == "Deleted"){
                alert('Deleted');
                getdata();
            }
        })
    }
    const [show, setshow] = useState(true);
    return (
        <>
         <div className="main"> 
        <div className="container-fluid regi">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 register">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img2">
            <img src="img5new.png" className="img-responsive img2" />
            </div>
            
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 reg">
            <center>
            <form className=" col-lg-10 col-md-10 col-sm-12 col-xs-12 login" onSubmit={handleform}>
                <h3 className="text2">Registration for Society</h3>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-user"></i></span> 
             <input
                        type={'text'}
                        name="name"
                        placeholder="Name"
                        className="form-control"
                        pattern="[A-Z][a-zA-Z ]+"
                         title="Please fill alphabets only and First letter should be capital"
                        required
                        />
           </div>
            </div>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="	glyphicon glyphicon-education"></i></span>
             <input
                        type={'text'}
                        name="rollno"
                        placeholder="College Roll no."
                        className="form-control" 
                        pattern="[0-9]+"
                        title="Please Enter Digits Only"
                        required />
            </div>
            </div>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-envelope"></i></span> 
           <input type={'email'} name="email" placeholder="Email" className="form-control" required/>
           </div>
            </div>

            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="	glyphicon glyphicon-home"></i></span>
            
            <select name="departmentname" className="form-control" required>
            <option value="" disabled selected hidden>Select Department</option>
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
                        placeholder="Semester" min={1} max={8}
                        className="form-control" required />
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
            </div>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol"><i className="glyphicon glyphicon-user"></i></span>
             <select
                        name="gender" 
                        className="form-control" required>
                            <option value="" disabled selected hidden>Select Gender</option>
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
                        placeholder="Password"
                        className="form-control" required 
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
                <input type={'submit'} value="Register" className="btn btnn btn-info sub"/>
                
            </div>
            <h5 className="plz"><i>Already Registered?</i><Link to="/Login"> Login</Link></h5>
        </form>
      
        </center>
        </div>
</div>
</div>
</div>

        </>
    )
}