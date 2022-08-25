import axios from 'axios';
import React, { useEffect, useState } from "react";
import Sidebaradmin from './Sidebaradmin';
import swal from 'sweetalert';
import Navbar from './Navbar';
import { Link, useNavigate } from "react-router-dom";

export default function Studentlist() {

    var navi = useNavigate();

    useEffect(() => {
        var id = localStorage.getItem('AdminLogin')
        if(!id){
            navi('/Loginadmin');
        }
    })

    var uri= "http://localhost:1200/";
    const [data, setdata] = useState([]);
    function getdata(){
        axios.post(uri+'getUsers').then((succ) => {
            setdata(succ.data);
            console.log(succ.data);
        })
    }
    useEffect(() => {getdata();}, [])

    function del(x) {
        // alert(x);
        axios.post(uri+'deleteuser', {id:x}).then((succ) => {
            if(succ.data == "Deleted"){
                // alert('Deleted');
                swal("Data Deleted","","warning");
                getdata();
            }
        })
    }
  return (
    <div>
        <Sidebaradmin/>
        <Navbar/>
        <div className='col-lg-10 student'>
        <h2 style={{textAlign:"center", fontWeight:"bold"}}>List of Students</h2><br/>
        <div className='table-responsive'>
        <table className='table table-hover tble '>
            <thead>
                <tr className='yel'>
                    <th>S no.</th>
                <th>Student Name</th>
                <th>University Roll no.</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Branch</th>
                <th>Semester</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Date</th>
                <th>Approve</th>
                <th>Disapprove</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row._id}>
                        <td></td>
                        <td>{row.Name}</td>
                        <td>{row.CRN}</td>
                        <td>{row.Email}</td>
                        <td>{row.Contact}</td>
                        <td>{row.Branch}</td>
                        <td>{row.Semester}</td>
                        <td>{row.Gender}</td>
                        <td>{row.Status}</td>
                        <td>{row.Date}</td>
                        <td> <button className="btn btn-success">
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
