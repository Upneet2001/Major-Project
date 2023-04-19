import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebaradmin from "./Sidebaradmin";
import swal from "sweetalert";
import Currentnav from "./Currentnav";
import Footer from "./Footer";

export default function Curmembers() {
    var uri = "http://localhost:1200/";
    var navi = useNavigate();
    var idd = new URLSearchParams(window.location.search).get("q");
  
    useEffect(() => {
      var id = localStorage.getItem("Studentlogin");
      if (!id) {
        navi("/Login");
      }
    });
  console.log(idd);
  
const [data2, setdata2] = useState([]);
const [dep, setdep] = useState("");
const [soc, setsoc] = useState("");
const [logo, setlogo] = useState("");
function getdata2() {
    if(idd){
  axios.post(uri + "getcursoc",{ ID: idd}).then((succ) => {
    setdata2(succ.data);
    setdep(succ.data[0].Department);
    setsoc(succ.data[0].Society);
    setlogo(succ.data[0].URL);
    console.log(succ.data);
  });
}
}
useEffect(() => {
          getdata2();},[idd]);
          console.log(dep);
          console.log(soc);

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
    if (soc) {
      axios.post(uri + "showmember", { Dep: dep, Soc: soc }).then((succ) => {
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
  }, [soc]);

  return (
    <div className="department">
      <Currentnav />
      <br/>
      <div className="dept">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 marge">
          <form className=" col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-xs-12  login">
           <center><h1 className="dephead1" ><b>{soc} Members:</b></h1></center>
           <br/>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 members">
              <div className="divide1 col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                <div className="form-group frms">
                  <label>Coordinator </label>
                  <img src="" className="img-responsive"/>
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
      <Footer/>
    </div>
  );
}
