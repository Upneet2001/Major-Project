import axios from 'axios';
import React, { useEffect, useState } from "react";
import swal from 'sweetalert';
import { Link, useNavigate } from "react-router-dom";
import SocDashboard from './SocDashboard';
import SocSidebar from './SocSidebar';
import SocNavbar from './SocNavbar';
import { db } from "./Firebase";

export default function EventRegistrations() {
    var navi = useNavigate();
    var idd = new URLSearchParams(window.location.search).get("q");
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

  const [data2, setdata2] = useState([]);
  const [fname, setname] = useState("");
  function getdata2() {
    axios.post(uri + "geteventname", {ID:idd, Dep: dep }).then((succ) => {
      setdata2(succ.data);
      setname(succ.data[0].EventName);
    //   console.log(succ.data);
    });
  }
  useEffect(() => {
    if (dep) {
      getdata2();
    }
  }, [dep]);
  console.log(fname);

  const [data1, setdata1] = useState([]);
  function getdata1() {
    axios.post(uri + "getregistrations", {Name: fname , Dep: dep}).then((succ) => {
      setdata1(succ.data);
      console.log(succ.data);
    });
  }
  useEffect(() => {
    if (fname) {
      getdata1();
    }
  }, [fname]);


  const [getfile, setgetfile] = useState([]);
const [data3, setdata3] = useState([]);
  function getdata3() {
    axios.post(uri + "getwinner", {eventname: fname}).then((succ) => {
      setgetfile(succ.data[0].URL);
    });
  }
  useEffect(() => {
    if (fname) {
      getdata3();
    }
  }, [fname]);
 
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
        axios.post(uri+'deletereguser1', {id:x}).then((succ) => {
            if(succ.data == "Deleted"){
                swal("Data Deleted","","warning");
                getdata1();
            }
        })
      }
    })
    }


    function handleform(e) {
      e.preventDefault();
      var data = new FormData(e.currentTarget);
      var Society= dep;
      var Department = branch;
      var name= data.get('name');
     var EventName= fname;
      console.log(name);
      var dtes= new Date();
      var ref = db.ref();
      const metadata={
        contentType: name.type
      }
      ref.child(name.name).put(name,metadata).then(snapshot =>
        snapshot.ref.getDownloadURL()).then(url=>{
          console.log(url)
          var imgdata={ 
            Society: Society,
            Department: Department,
            EventName: EventName,
            URL: url,

          }
          axios.post(uri+"Addwinners",imgdata).then((succ)=>{
            console.log(succ.data)
            if(succ.data == "ok"){
                      swal("Data Added","","success")
                      e.target.reset();
                      e.target.name.focus();
                      getdata3();
                  }
          })

        })
    }
    function del1(y) {
      swal({
        title: "Deletion Confirmation",
        text: "Are you sure you want to delete?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            axios.post(uri + "deletewinner", { eventname: y }).then((succ) => {
              if (succ.data == "Deleted") {
                swal("Data Deleted", "", "warning");
                getdata3();
              }
            });
          }
          getdata3();
        });
    }
  
  
    const [query, setQuery] = useState("")
  return (
    <div>
          <SocSidebar />
      <SocNavbar />
        <div className='col-lg-10 col-md-10 col-sm-9 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 marge1 student'>
            <button
                className="btn btn-info flote"
                data-toggle="modal"
                data-target="#mymodal1"
              >
                Add Winners List
              </button>
              <div className="modal fade" id="mymodal1" role="dialog">
        <div className="modal-dialog modal-md ">
          <div className="modal-content">
            <div className="modal-body deptfrm">
              <button
                type="button"
                className="btn btn-danger closd cross"
                data-dismiss="modal"
              >
                X
              </button>

              <form onSubmit={handleform}>
                <div className="form-group frms">
                  <div className="form-group">
                   
                  <label>Add Winners List for {fname}: </label><br/>
                  <center>
                  <input type={"file"} name="name" placeholder="Event Time" className="filee"/>
                  </center>
                  </div>
                  <div className="form-group">
                <input type={'submit'} value="Submit" className="btn btnn btn-default subevent"/>
            </div>
                 </div>
              </form>

              <object data={getfile}
                width="565" 
                height="500"> 
        </object>
        <center>
        <button onClick={() => del1(fname)} className="btn btn-danger">
                <span className="glyphicon glyphicon-trash "></span>
              </button>
              </center>
            </div> 
         </div>
        </div>
      </div>
          
        <p className='text3' style={{textAlign:"center", fontWeight:"bold"}}>Registered Students of {fname}</p><br/>
        <div className='table-responsive'>
       
        <div className="navbar-form navbar nav3 col-lg-12">
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Search Event" onChange={event => setQuery(event.target.value)}/>
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
                <th>Register Date</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {data1.filter(row => {
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
