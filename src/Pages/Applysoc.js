import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { FaUsers } from "react-icons/fa";
import Studentnavbar from "./Studentnavbar";
import Studentsidebar from "./Studentsidebar";
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
  var id = localStorage.getItem("Studentlogin");
  function checkid() {
    if (id) {
      axios.post(uri + "getoneuser", { Id: id }).then((succ) => {
        console.log(succ.data);
        setname(succ.data.Name);
        setcrn(succ.data.CRN);
        setdept(succ.data.Branch);
        getdata1();
      });
    }
  }
  useEffect(() => {
    checkid();
  }, [id]);

  function submitdata(e) {
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var obj = {
      Name: data.get("name"),
      CRN: data.get("rollno"),
      Branch: data.get("departmentname"),
      Societyreg: data.get("society"),
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
    axios.post(uri + "getstusociety", { Dep: dept }).then((succ) => {
      setdata1(succ.data);
      console.log(succ.data);
    });
  }

  const [data2, setdata2] = useState([]);
  function GetApplysoc() {
    axios.post(uri + "GetApplysoc", { Dep: dept, Name: name }).then((succ) => {
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

  return (
    <div>
      <Studentsidebar />
      <Studentnavbar />

      <div className="main ">
        <div className="container-fluid log">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <form
              onSubmit={submitdata}
              className=" col-lg-offset-0 col-md-offset-0 col-sm-offset-0 col-xs-offset-0 col-lg-4 col-md-4 col-sm-12 col-xs-12 login"
            >
              <h2>Apply for Society</h2>
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

            <div className="col-lg-offset-0 col-md-offset-0 col-sm-offset-0 col-xs-offset-0 col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Applied For</th>
                        <th>Date</th>
                        <th>Results</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>{data2.map((row) => (
                        <tr>
                            <td>{row.Societyreg}</td>
                            <td>{row.Branch}</td>
                            <td>Pending</td>
                            <td>
                                <button className="btn btn-danger">
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
        </div>
      </div>
    </div>
  );
}
