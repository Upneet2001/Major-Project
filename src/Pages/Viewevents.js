import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import SocSidebar from "./SocSidebar";
import SocNavbar from "./SocNavbar";

export default function () {
  var uri = "http://localhost:1200/";
  var navi = useNavigate();
  useEffect(() => {
    var id = localStorage.getItem("SocietyLogin");
    if (!id) {
      navi("/Soclogin");
    }
  });
  var id = localStorage.getItem("SocietyLogin");
  const [branch, setname] = useState("");
  const [dep, setdep] = useState("");
  const [regdate, setregdate] = useState("");
  function checkid() {
    if (id) {
      axios.post(uri + "getonesoc", { Id: id }).then((succ) => {
        console.log(succ.data);
        setname(succ.data.Department);
        setdep(succ.data.Society);
        setregdate(succ.data[0].RegDate);
      });
    }
  }

  useEffect(() => {
    checkid();
  }, [id]);

  const [data1, setdata1] = useState([]);
  function getdata1() {
    axios.post(uri + "getevents", { Dep: dep }).then((succ) => {
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
    }).then((willDelete) => {
      if (willDelete) {
        axios.post(uri + "deleteevent", { id: x }).then((succ) => {
          if (succ.data == "Deleted") {
            swal("Data Deleted", "", "warning");
            getdata1();
          }
        });
      }
    });
  }
  function view(x) {
    var path = "/EventRegistrations?q=" + x;
    navi(path);
  }
  const [query, setQuery] = useState("");
  return (
    <div className="vieweve">
      <SocSidebar />
      <SocNavbar />
      <div className=" col-lg-10 col-md-10 col-sm-9 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 marge1">
        <div className="navbar-form navbar nav3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Event"
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className="input-group-btn">
              <button className="btn">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </div>
          </div>
        </div>
        {data1
          .filter((row) => {
            if (query === "") {
              return row;
            } else if (
              row.EventName.toLowerCase().includes(query.toLowerCase())
            ) {
              return row;
            } else if (row.Date.toLowerCase().includes(query.toLowerCase())) {
              return row;
            } else if (row.Type.toLowerCase().includes(query.toLowerCase())) {
              return row;
            }
          })
          .map((row) => (
            //   <div className='col-lg-12'>
            //     {row.EvemtName}
            //   <div className='col-lg-5'>
            //  <img src={row.URL} className='img-responsive '/>
            //   </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 events">
              <b>
                <center>
                  <h1 style={{ color: "black" }}>{row.EventName}</h1>
                </center>
              </b>
              <br />
              <div
                className="col-lg-5 col-md-5 col-sm-6 col-xs-12"
                style={{ marginTop: "%" }}
              >
                <img src={row.URL} className="img-responsive vevents" />
              </div>
              <center>
                <table className="table-responsive">
                  <tr>
                    <th>Event Name</th>
                    <td>{row.EventName}</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>{row.Date}</td>
                  </tr>
                  <tr>
                    <th>Time</th>
                    <td>{row.Time}</td>
                  </tr>
                  <tr>
                    <th>Venue</th>
                    <td>{row.Venue}</td>
                  </tr>
                  <tr>
                    <th>Type</th>
                    <td>{row.Type}</td>
                  </tr>
                  <tr>
                    <th style={{ color: "red" }}>Register Before</th>
                    <td style={{ color: "red" }}>{row.RegDate}</td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td>{row.Description}</td>
                  </tr>
                </table>
              </center>
              {/* <p className='fontt'>Event Name:<span className='details'>{row.EventName}</span></p>
        <p className='fontt'>Date:<span className='details'>{row.Date}</span></p>
        <p className='fontt'>Time:<span className='details'>{row.Time}</span></p>
        <p className='fontt'>Venue:<span className='details'>{row.Venue}</span></p>
        <p className='fontt'>Type:<span className='details'>{row.Type}</span></p>
        <p className='fontt'>Description:<span className='details'>{row.Description}</span></p> */}
              <button
                onClick={() => del(row._id)}
                className="btn btn-danger flote"
              >
                <span className="glyphicon glyphicon-trash"></span>
              </button>
              <button
                onClick={() => view(row._id)}
                className="btn btn-info flote"
              >
                View Registrations
              </button>
          
            
            </div>
          ))}
      </div>
     
    </div>
  );
}
