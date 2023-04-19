import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import SocDashboard from "./SocDashboard";
import { useNavigate } from "react-router-dom";
import SocSidebar from "./SocSidebar";
import SocNavbar from "./SocNavbar";

export default function Updateprofile() {
  var uri = "http://localhost:1200/";
  var navi = useNavigate();
  useEffect(() => {
    var id = localStorage.getItem("SocietyLogin");
    if (!id) {
      navi("/Soclogin");
    }
  });

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
    axios.post(uri + "getmember", { Dep: dep }).then((succ) => {
      setdata1(succ.data);
      console.log(succ.data);
    });
  }
  useEffect(() => {
    if (dep) {
      getdata1();
    }
  }, [dep]);

  const [data, setdata] = useState([]);
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
  const [idd, setidd] = useState("");

  function getdata() {
    axios.post(uri + "showmember", { Dep: branch, Soc: dep }).then((succ) => {
      setdata(succ.data);
      console.log(succ.data);
      setidd(succ.data[0]._id);
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
  useEffect(() => {
    if (dep) {
      getdata();
    }
  }, [dep]);

  function handleform(e) {
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var obj = {
      idd: idd,
      Coordinator: data.get("coordinator"),
      Cocoordinator: data.get("cocoordinator"),
      Pro: data.get("pro"),
      Databaseandtech: data.get("dbandtech"),
      Discipline: data.get("discipline"),
      Event: data.get("event"),
      Tech: data.get("tech"),
      Socialmedia: data.get("socialmedia"),
      Creative: data.get("creative"),
      Content: data.get("content"),
      ActiveMembers: data.get("activemembers"),
      Executives: data.get("executives"),
    };
    axios.post(uri + "updatemembers", obj).then((succ) => {
      if (succ.data == "updated") {
        swal("Data Updated", "", "success");
        e.target.reset();
        e.target.coordinator.focus();
      }
    });
  }

  return (
    <div className="department">
       <SocSidebar />
      <SocNavbar />
      <div className="dept">
        <div className="col-lg-10 col-md-10 col-sm-9 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 marge1">
          <form className=" login" onSubmit={handleform}>
            <div className="text3">View Members:</div>
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
