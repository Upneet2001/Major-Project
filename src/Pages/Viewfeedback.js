
import axios from 'axios';
import React, { useEffect, useState } from "react";
import swal from 'sweetalert';
import { Link, useNavigate } from "react-router-dom";
import SocSidebar from './SocSidebar';
import SocNavbar from './SocNavbar';

export default function Viewfeedback() {
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
  
    const [data, setdata1] = useState([]);
    function getdata1() {
      axios.post(uri + "getfeedback", { Dep: dep }).then((succ) => {
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
        axios.post(uri + "deletefeedback", { id: x }).then((succ) => {
          if (succ.data == "Deleted") {
            swal("Feedback Deleted", "", "warning");
            getdata1();
          }
        });
      }
    })
      }
      const [query, setQuery] = useState("")
  return (
    <div>
          <SocSidebar/>
         <SocNavbar />
  
    <div className='col-lg-10 col-md-10 col-sm-9 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 marge1 student'>
    <p className='text3' style={{textAlign:"center", fontWeight:"bold"}}>Student's Feedback</p><br/>
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
                <th>S.No.</th>
            <th>Name</th>
            <th>C.R.N.</th>
            <th>Branch</th>
            <th>Email</th>
            <th>Feedback</th>
            <th>Delete</th>
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
                else if (row.Branch.toLowerCase().includes(query.toLowerCase())) {
                    return row;
                }
              })
           .map((row) => (
                <tr key={row._id}>
                    <td></td>
                    <td>{row.Name}</td>
                    <td>{row.CRN}</td>
                    <td>{row.Branch}</td>
                    <td>{row.Email}</td>
                    <td style={{textAlign:"justify"}} className="fee">{row.Feedback}</td>
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
