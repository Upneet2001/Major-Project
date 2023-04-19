import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { FaUsers } from "react-icons/fa";
import Studentnavbar from "./Studentnavbar";
import Studentsidebar from "./Studentsidebar";
import Footer from "./Footer";
export default function Loginadmin() {
  const [show, setshow] = useState(true);

  var uri = "http://localhost:1200/";

  var navi = useNavigate();

  useEffect(() => {
    var id = localStorage.getItem("Studentlogin");
    if (!id) {
      navi("/Login");
    }
  });

  const [name, setname] = useState("");
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
        setname(succ.data.Name);
        setcrn(succ.data.CRN);
        setdept(succ.data.Branch);
        setcontact(succ.data.Contact);
        setsem(succ.data.Semester);
        setemail(succ.data.Email);
        setgen(succ.data.Gender);
        getdata1();
      });
    }
  }
  useEffect(() => {
    checkid();
  }, [id]);

  function submitdata(e) {
    var dtes= new Date();
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var obj = {
      Name: data.get("name"),
      CRN: data.get("rollno"),
      Branch: data.get("departmentname"),
      Semester: data.get("semester"),
      Email: data.get("email"),
      Contact: data.get("contact"),
      Gender: data.get("gender"),
      Societyreg: data.get("society"),
      Status: "Pending",
      Shortlist : "Pending",
      Date: dtes.getDate()+'-'+(dtes.getMonth()+1)+'-'+(dtes.getFullYear()),
    };
    axios.post(uri + "Applysoc", obj).then((succ) => {
      if (succ.data == "ok") {
        swal("Data Added", "", "success");
        getdata1();
        e.target.reset();
        e.target.name.focus();
        GetApplysoc();
      }
    });
  }

  const [data1, setdata1] = useState([]);
  function getdata1() {
    axios.post(uri + "getstusociety").then((succ) => {
      setdata1(succ.data);
      console.log(succ.data);
    });
  }



const[namme, setnamme]= useState("");
  const [data2, setdata2] = useState([]);
  function GetApplysoc() {
    axios.post(uri + "GetApplysoc", { Dep: dept, Name: name }).then((succ) => {
      setnamme(succ.data.Name);
      setdata2(succ.data);
      console.log(succ.data);
    });
  }

  useEffect(() => {
    if (dept) {
      setTimeout(getdata1, 2000);
      setTimeout(GetApplysoc, 2000);
    }
  }, [dept]);

  //   useEffect(() => {
  //     setTimeout(getdata1(), 2000);
  //     ;
  //   }, [dept]);

  function del(x){
    swal({
        title: "Deletion Confirmation",
        text: "Do you want to disapprove this student?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            axios.post(uri+'deleteapply', {id:x}).then((succ) => {
                if(succ.data == "Deleted"){
                    // alert('Deleted');
                    swal("Data Deleted","","warning");
                    GetApplysoc();
                }
            })
            swal("Student Disapproved!", {
              icon: "success",
            });
          }
        });
    }

  return (
    <div className="socabout">
      <Studentnavbar />
        {/* <center><img src="apply.png" className="img-responsive" /></center> */}
      <div className="main marge">
        <div className="container-fluid log">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
         <center><img src="applysoc.png" className="img-responsive" /></center> 
         <br/>
            <form
              onSubmit={submitdata}
              className=" col-lg-offset-1 col-md-offset-1 col-sm-offset-2 col-xs-offset-0 col-lg-4 col-md-4 col-sm-8 col-xs-12 login"
            >
              
              <div className="form-group frms">
                <div className="input-group">
                  <span className="input-group-addon glycol">
                    <i className="glyphicon glyphicon-user"></i>
                  </span>
                  <input
                    type={"text"}
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    pattern="[A-Z][a-zA-Z ]+"
                    title="Please fill alphabets only and First letter should be capital"
                    value={name}
                    required
                    readOnly
                  />
                </div>
              </div>
              <div className="form-group frms">
                <div className="input-group">
                  <span className="input-group-addon glycol">
                    <i className="	glyphicon glyphicon-education"></i>
                  </span>
                  <input
                    type={"text"}
                    name="rollno"
                    placeholder="College Roll no."
                    className="form-control"
                    pattern="[0-9]+"
                    title="Please Enter Digits Only"
                    value={crn}
                    required
                    readOnly
                  />
                </div>
              </div>
              <div className="form-group frms">
                <div className="input-group">
                  <span className="input-group-addon glycol">
                    <i className="	glyphicon glyphicon-home"></i>
                  </span>

                  <input
                    name="departmentname"
                    className="form-control"
                    value={dept}
                    required
                    readOnly
                  />
                </div>
              </div>
              <div className="form-group frms">
                <div className="input-group">
                  <span className="input-group-addon glycol">
                    <i className="	glyphicon glyphicon-list-alt"></i>
                  </span>

                  <input
                    name="semester"
                    className="form-control"
                    value={semester}
                    required
                    readOnly
                  />
                </div>
              </div>
              <div className="form-group frms">
                <div className="input-group">
                  <span className="input-group-addon glycol">
                    <i className="	glyphicon glyphicon-envelope"></i>
                  </span>

                  <input
                    name="email"
                    className="form-control"
                    value={email}
                    required
                    readOnly
                  />
                </div>
              </div>
              <div className="form-group frms">
                <div className="input-group">
                  <span className="input-group-addon glycol">
                    <i className="	glyphicon glyphicon-earphone"></i>
                  </span>

                  <input
                    name="contact"
                    className="form-control"
                    value={contact}
                    required
                    readOnly
                  />
                </div>
              </div>
              <div className="form-group frms">
                <div className="input-group">
                  <span className="input-group-addon glycol">
                    <i className="	glyphicon glyphicon-user"></i>
                  </span>

                  <input
                    name="gender"
                    className="form-control"
                    value={gender}
                    required
                    readOnly
                  />
                </div>
              </div>
              <div className="form-group frms">
                <div className="input-group">
                  <span
                    className="input-group-addon glycol"
                    style={{ fontSize: 18 }}
                  >
                    <FaUsers />
                  </span>
                  <select name="society" className="form-control" required>
                    <option value="" disabled selected hidden>
                      Select Society to register
                    </option>
                    {data1.map((row) => (
                      <option key={row._id}>{row.Society}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <input
                  type={"submit"}
                  value="Apply"
                  className="btn btnn btn-default sub1"
                />
                <br />
                <br />
              </div>
            </form>

            <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
              
                  <table className="table table-responsive applypan ">
                    <thead>
                      <tr>
                        <td><b>Applied For</b></td>
                        <td><b>Results</b></td>
                        <td><b>Action</b></td>
                      </tr>
                    </thead>
                    <tbody>{data2.map((row) => (
                        <tr>
                            <td>{row.Societyreg}</td>
                            <td>{row.Status}</td>
                            <td>
                                <button onClick={() => del(row._id)} className="btn btn-danger">
                                    <span className="glyphicon glyphicon-trash"></span>
                                </button>
                            </td>
                        </tr>
                    ))}</tbody>
                  </table>
                </div>
             
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}


// if student name ohh match krega jis society ch ohne apply kita ohde databse de members naal tn updtion ho
//Applysoc society name ==>> memberslist vle table nl ==> |||| ==>>> applysocdestaus ch
                                                                            // update