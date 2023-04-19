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
        console.log(id);
        console.log(succ.data);
        setname(succ.data.Department);
        console.log(succ.data.Department);
        setdep(succ.data.Society);
      });
    }
  }

  useEffect(() => {
    checkid();
  }, [id]);

  const [branch, setbranch] = useState("");
  const [coord, setcoord] = useState("");
  const [cocoord, setcocoord] = useState("");
  const [pro, setpro] = useState("");
  const [dt, setdt] = useState("");
  const [dis, setdis] = useState("");
  const [event, setevent] = useState("");
  const [tech, settech] = useState("");
  const [social, setsocial] = useState("");
  const [creative, setcreative] = useState("");
  const [content, setcontent] = useState("");
  const [active, setactive] = useState("");
  const [exec, setexec] = useState("");
  function getdata() {
    if (name) {
      axios.post(uri + "showmember", { Dep: name, Soc: dep }).then((succ) => {
        console.log(succ.data);
        setbranch(succ.data[0].Branch);
        setcoord(succ.data[0].Coordinator);
        setcocoord(succ.data[0].Cocoordinator);
        setpro(succ.data[0].Pro);
        setdt(succ.data[0].Databaseandtech);
        setevent(succ.data[0].Event);
        setdis(succ.data[0].Discipline);
        settech(succ.data[0].Tech);
        setsocial(succ.data[0].Socialmedia);
        setcreative(succ.data[0].Creative);
        setcontent(succ.data[0].Content);
        setactive(succ.data[0].ActiveMembers);
        setexec(succ.data[0].Executives);
      });
    }
  }

  useEffect(() => {
    getdata();
  }, [name]);

  return (
    <div className="department">
      <Sidebaradmin />
      <Navbar />
      <div className="dept ">
        <div className="col-lg-10 col-md-10 col-sm-9 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 marge2">
          <form className=" login">
            <div className="text4 ">{name}</div>
            <div className="text3 ">{dep} Members:</div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 members">
              <div className="divide1 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group frms">
                  <label>Coordinator </label>
                  <input
                    value={coord}
                    name="coordinator"
                    className="form-control"
                    required
                    readOnly
                  />
                </div>
                <div className="form-group frms">
                  <label>Co-Coordinator</label>
                  <input
                    value={cocoord}
                    name="cocoordinator"
                    className="form-control"
                    required
                    readOnly
                  />
                </div>
                <div className="form-group frms">
                  <label>PRO</label>
                  <input
                    name="pro"
                    className="form-control"
                    value={pro}
                    required
                    readOnly
                  />
                </div>
                <div className="form-group frms">
                  <label>Database and Techinician</label>
                    <input
                      value={dt}
                      name="dbandtech"
                      className="form-control"
                      required
                      readOnly
                    />
                </div>
                <div className="form-group frms">
                  <label>Discipline</label>
                  <input
                    value={dis}
                    name="discipline"
                    className="form-control"
                    required
                    readOnly
                  />
                </div>
                <div className="form-group frms">
                  <label>Event Management</label>
                  <input
                    value={event}
                    name="event"
                    className="form-control"
                    required
                    readOnly
                  />
                </div>
            </div>
            <div className="divide col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group frms">
                <label>Tech Team</label>
                  <input
                    value={tech}
                    name="tech"
                    className="form-control"
                    required
                    readOnly
                  />
                </div>
                <div className="form-group frms">
                  <label>Social Media </label>
                  <input
                    value={social}
                    name="socialmedia"
                    className="form-control"
                    required
                    readOnly
                  />
                </div>
                <div className="form-group frms">
                  <label>Creative </label>
                  <input
                    value={creative}
                    name="creative"
                    className="form-control"
                    required
                    readOnly
                  />
                </div>
                <div className="form-group frms">
                  <label>Content </label>
                  <input
                    value={content}
                    name="content"
                    className="form-control"
                    required
                    readOnly
                  />
                </div>
                <div className="form-group frms">
                  <label>Active Members </label>
                  <input
                    value={active}
                    name="activemembers"
                    className="form-control"
                    required
                    readOnly
                  />
                </div>
                <div className="form-group frms">
                  <label>Executives </label>
                  <input
                    value={exec}
                    name="executives"
                    className="form-control"
                    required
                    readOnly
                  />
                </div>
              </div>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}
