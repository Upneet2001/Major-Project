import axios from 'axios';
import React, { useEffect, useState } from "react";
import Sidebaradmin from './Sidebaradmin';
import swal from 'sweetalert';
import Navbar from './Navbar';
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import {useRef} from 'react'
import emailjs from '@emailjs/browser'

export default function Studentlist() {

    var navi = useNavigate();

    useEffect(() => {
        var id = localStorage.getItem('AdminLogin')
        if (!id) {
            navi('/Loginadmin');
        }
    })

    var uri = "http://localhost:1200/";
    const [data, setdata] = useState([]);
    function getdata() {
        axios.post(uri + 'getUsers').then((succ) => {
            setdata(succ.data);
            console.log(succ.data);
        })
    }
    useEffect(() => { getdata(); }, [])

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
                    axios.post(uri + 'updateuser', { id: x }).then((succ) => {
                        if (succ.data == "updated") {
                            swal("Student Approved!", "", "success");
                            getdata();
                        }
                    })
                }
            });
    }

    function del(x) {
        swal({
            title: "Deletion Confirmation",
            text: "Do you want to disapprove this student?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.post(uri + 'deleteuser', { id: x }).then((succ) => {
                        if (succ.data == "Deleted") {
                            // alert('Deleted');
                            swal("Data Deleted", "", "warning");
                            getdata();
                        }
                    })
                    swal("Student Disapproved!", {
                        icon: "success",
                    });
                }
            });
    }
    const [query, setQuery] = useState("")

    const form = useRef()
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_c0hxe9i', 'template_p2icwoa', form.current, '5xt65huVD1rbST7ra')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        e.target.reset()
    }

    const sendEmail1 = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_kubhv6s', 'template_mborgnh', form.current, 'rPjQAm5o3-TM9PF5R')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
            e.target.reset()
        }
    return (
        <div>

            <Sidebaradmin />
            <Navbar />

            <div className='col-lg-10 col-md-10 col-sm-9 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 marge2  student'>
                <h2 style={{ textAlign: "center", fontWeight: "bold" }}>List of Students</h2><br />
                <div className='table-responsive'>
                {/* <div><input className='search' placeholder="Search" onChange={event => setQuery(event.target.value)} /><FaSearch/></div> */}
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

                    <table className='table table-hover tble table-responsive'>
                        <thead>
                            <tr className='yel'>
                                <th>S.No.</th>
                                <th>Name</th>
                                <th>C.R.N.</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Branch</th>
                                <th>Semester</th>
                                <th>Gender</th>
                                <th>Date</th>
                                <th>Approve</th>
                                <th>Disapprove</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.filter(row => {
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
                                    else if (row.Date.toLowerCase().includes(query.toLowerCase())) {
                                        return row;
                                    }
                                    else if (row.Gender.toLowerCase().includes(query.toLowerCase())) {
                                        return row;
                                    }
                                    else if (row.Status.toLowerCase().includes(query.toLowerCase())) {
                                        return row;
                                    }

                                })
                                .map((row) => (
                                        <tr key={row._id}>
                                            <td></td>
                                            <td>{row.Name}</td>
                    
                                            <td>{row.CRN}</td>
                                            <td>{row.Email}</td>
                                            <td>{row.Contact}</td>
                                            <td>{row.Branch}</td>
                                            <td>{row.Semester}</td>
                                            <td>{row.Gender}</td>

                                            <td>{row.Date}</td>
                                            <td>
                                            <form ref={form} onSubmit={sendEmail}>
                                            <input className='hide' type='text' defaultValue={row.Name} placeholder='Full Name' name='user_name' required />
                                            <input className='hide' type='text' defaultValue={row.CRN} placeholder='Full Name' name='user_crn' required />
                                            <input className='hide' type='email' defaultValue={row.Email} placeholder='Full Name' name='user_email' required/>

                                            <button onClick={() => approve(row._id)} className="btn btn-success">
                                                <span className="glyphicon glyphicon-ok"></span>
                                            </button>
                                            </form></td>
                                            <td>
                                            <form ref={form} onSubmit={sendEmail1}>
                                            <input className='hide' type='text' defaultValue={row.Name} placeholder='Full Name' name='user_name' required />
                                            <input className='hide' type='text' defaultValue={row.CRN} placeholder='Full Name' name='user_crn' required />
                                            <input className='hide' type='email' defaultValue={row.Email} placeholder='Full Name' name='user_email' required/>

                                                <button onClick={() => del(row._id)} className="btn btn-warning">
                                                    <span className="glyphicon glyphicon-remove"></span>
                                                </button>
                                                </form>
                                            </td>

                                            <td>{row.Status}</td>
                                        </tr>
                                    ))
                                }

            </tbody>
                    </table>
                </div>
            </div>



        </div>
    )
}