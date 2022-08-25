import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebaradmin from "./Sidebaradmin";
import swal from "sweetalert";

export default function Departmentadmin() {
  var uri = "http://localhost:1200/";
  var navi = useNavigate();

  var id = new URLSearchParams(window.location.search).get("q");

  const [name, setname] = useState("");
  const [dep, setdep] = useState("");
  function checkid() {
    if (id) {
      axios.post(uri + "getonecat", { Id: id }).then((succ) => {
        console.log(succ.data);
        setname(succ.data.Department);
        setdep(succ.data.Society);
      });
    }
  }

  useEffect(() => {
    checkid();
  }, [id]);

  const [data, setdata] = useState([]);
  function getdata() {
    axios.post(uri + "getmember", { Dep: dep }).then((succ) => {
      setdata(succ.data);
      console.log(succ.data);
    });
  }
  useEffect(() => {
    if (dep) {
      getdata();
    }
  }, [dep]);

  return (
    <div className="department">
      <Sidebaradmin />
      <Navbar />
      <div className="dept">
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
          <form className=" col-lg-12  login">
            <div className="text4 container">{name} </div>
            <div className="text3 container">{dep} Members:</div>
            <div className="col-lg-12 members">
              <div className="divide1 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group frms">
                  <label>Coordinator </label>
                  <select name="coordinator" className="form-control">
                    <option value="" disabled selected hidden>
                      Coordinator
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>{row.Name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Co-Coordinator</label>
                  <select name="cocoordinator" className="form-control">
                    <option value="" disabled selected hidden>
                      Co-Coordinator
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>{row.Name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>PRO</label>
                  <select name="pro" className="form-control">
                    <option value="" disabled selected hidden>
                      PRO
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>{row.Name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Database and Techinician</label>
                  <select name="dbandtech" className="form-control">
                    <option value="" disabled selected hidden>
                      Database and Techinician
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>{row.Name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Discipline</label>

                  <select name="discipline" className="form-control">
                    <option value="" disabled selected hidden>
                      Discipline
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>{row.Name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group frms">
                  <label>Event Management</label>

                  <select name="event" className="form-control" required>
                    <option value="" disabled selected hidden>
                      Event Management
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>{row.Name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="divide col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group frms">
                  <label>Tech Team</label>

                  <select name="tech" className="form-control">
                    <option value="" disabled selected hidden>
                      Tech Team
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>{row.Name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Social Media </label>

                  <select name="socialmedia" className="form-control">
                    <option value="" disabled selected hidden>
                      Social Media
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>{row.Name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Creative </label>

                  <select name="creative" className="form-control">
                    <option value="" disabled selected hidden>
                      Creative
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>{row.Name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Content </label>

                  <select name="content" className="form-control" required>
                    <option value="" disabled selected hidden>
                      Content
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>{row.Name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Active Members </label>

                  <select
                    name="activemembers"
                    className="form-control"
                    required
                  >
                    <option value="" disabled selected hidden>
                      Active Members
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>{row.Name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Executives </label>

                  <select name="executives" className="form-control">
                    <option value="" disabled selected hidden>
                      Executives
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>{row.Name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
