import axios from 'axios';
import React, { useEffect, useState } from "react";
import swal from 'sweetalert';
import { Link, useNavigate } from "react-router-dom";
import SocDashboard from './SocDashboard';
import SocSidebar from './SocSidebar';
import SocNavbar from './SocNavbar';

export default function Registeredlist() {
    var navi = useNavigate();
    useEffect(() => {
        var id = localStorage.getItem('SocietyLogin')
        if(!id){
            navi('/Soclogin');
        }
    })

    var uri= "http://localhost:1200/";

    
  var id = localStorage.getItem("SocietyLogin");
  const [dep, setdep] = useState("");
  const [branch, setbranch] = useState("");
  function checkid() {
    if (id) {
      axios.post(uri + "getonecat", { Id: id }).then((succ) => {
        console.log(succ.data);
        //console.log(succ.data.Department);
        //console.log(succ.data.Society)
        setbranch(succ.data.Department);
        setdep(succ.data.Society);
      });
    }
  }

  useEffect(() => {
    checkid();
  }, [id]);

  const [data1, setdata1] = useState([]);
  function getdata1() {
    axios.post(uri + "getmember1", { Dep: dep }).then((succ) => {
      setdata1(succ.data);
      console.log(succ.data);
    });
  }
  useEffect(() => {
    if (dep) {
      getdata1();
    }
  }, [dep]);

    function del(x) {
        swal({
          title: "Deletion Confirmation",
          text: "Are you sure you want to delete?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {
        axios.post(uri+'deletereguser', {id:x}).then((succ) => {
            if(succ.data == "Deleted"){
                swal("Data Deleted","","warning");
                getdata1();
            }
        })
      }
    })
    }

    function approve(x) {
      swal({
          title: "Approval Confirmation",
          text: "Do you want to approve this student?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
      })
          .then((willDelete) => {
              if (willDelete) {
                  axios.post(uri + 'Shortlist', { id: x }).then((succ) => {
                      if (succ.data == "updated") {
                          swal("Student Shortlisted!", "", "success");
                          getdata1();
                      }
                  })
              }
          });
  }
    const [query, setQuery] = useState("")
  return (
    <div>
          <SocSidebar />
      <SocNavbar />
        <div className='col-lg-10 col-md-10 col-sm-9 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 marge1 student'>
        <p className='text5' style={{textAlign:"center", fontWeight:"bold"}}>Society Applicants</p><br/>
        <div className='table-responsive'>
        <div className="navbar-form navbar nav3">
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Search" onChange={event => setQuery(event.target.value)}/>
					<div className="input-group-btn">
						<button className="btn">
							<span className="glyphicon glyphicon-search"></span>
						</button>
					</div>
				</div>
                </div>
        <table className='table table-hover tble '>
            <thead>
                <tr className='yel'>
                    <th>S no.</th>
                <th>Student Name</th>
                <th>College Roll no.</th>
                <th>Branch</th>
                <th>Semester</th>
                <th>E-mail</th>
                <th>Contact</th>
                <th>Gender</th>
                <th>Date</th>
                <th>Status</th>
                <th>Shortlist</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                  data1.filter(row => {
                    if (query === '') {
                        return row;
                    } else if (row.Name.toLowerCase().includes(query.toLowerCase())) {
                        return row;
                    }else if (row.CRN.toLowerCase().includes(query.toLowerCase())) {
                        return row;
                    }
                    else if (row.Email.toLowerCase().includes(query.toLowerCase())) {
                        return row;
                    }
                    else if (row.Contact.toLowerCase().includes(query.toLowerCase())) {
                        return row;
                    }
                    else if (row.Branch.toLowerCase().includes(query.toLowerCase())) {
                        return row;
                    }
                    else if (row.Semester.toLowerCase().includes(query.toLowerCase())) {
                        return row;
                    }
                    else if (row.Gender.toLowerCase().includes(query.toLowerCase())) {
                        return row;
                    }
                  })
                .map((row) => (
                    <tr key={row._id}>
                        <td></td>
                        <td>{row.Name}</td>
                        <td>{row.CRN}</td>
                        <td>{row.Branch}</td>
                        <td>{row.Semester}</td>
                        <td>{row.Email}</td>
                        <td>{row.Contact}</td>
                        <td>{row.Gender}</td>
                        <td>{row.Date}</td>
                        <td>{row.Shortlist}</td>
                        <td> <button onClick={() => approve(row._id)} className="btn btn-success">
                                                <span className="glyphicon glyphicon-ok"></span>
                                            </button></td> 
                        <td>
                          
                            <button onClick={() => del(row._id)}className="btn btn-warning">
                                                                <span className="glyphicon glyphicon-remove"></span>
                                                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
</div>
        </div>



    </div>
  )
}
