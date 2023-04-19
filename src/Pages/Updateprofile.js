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
        getdata();
      }
    });
  var a =  obj.Coordinator.split(' (');
  var b =  obj.Cocoordinator.split(' (');
  var c =  obj.Pro.split(' (');
  var d =  obj.Databaseandtech.split(' (');
  var f =  obj.Discipline.split(' (');
  var g =  obj.Event.split(' (');
  var h =  obj.Tech.split(' (');
  var i =  obj.Socialmedia.split(' (');
  var j =  obj.Creative.split(' (');
  var k =  obj.Content.split(' (');
  var l =  obj.ActiveMembers.split(' (');
  var m =  obj.Executives.split(' (');
  console.log(a);
    axios.post(uri + "updatesocstatus", { Name: a[0], Soc:dep }).then((succ) => {
    if (succ.data == "updated") {
      swal("Data Updated", "", "success");
    }
  })
  axios.post(uri + "updatesocstatus1", { Name: b[0], Soc:dep }).then((succ) => {
    if (succ.data == "updated") {
      swal("Data Updated", "", "success");
    }
  })
  axios.post(uri + "updatesocstatus2", { Name: c[0], Soc:dep }).then((succ) => {
    if (succ.data == "updated") {
      swal("Data Updated", "", "success");
    }
  })
  axios.post(uri + "updatesocstatus3", { Name: d[0], Soc:dep }).then((succ) => {
    if (succ.data == "updated") {
      swal("Data Updated", "", "success");
    }
  })
  axios.post(uri + "updatesocstatus4", { Name: f[0], Soc:dep }).then((succ) => {
    if (succ.data == "updated") {
      swal("Data Updated", "", "success");
    }
  })
  axios.post(uri + "updatesocstatus5", { Name: g[0], Soc:dep }).then((succ) => {
    if (succ.data == "updated") {
      swal("Data Updated", "", "success");
    }
  })
  axios.post(uri + "updatesocstatus6", { Name: h[0], Soc:dep }).then((succ) => {
    if (succ.data == "updated") {
      swal("Data Updated", "", "success");
    }
  })
  axios.post(uri + "updatesocstatus7", { Name: i[0], Soc:dep }).then((succ) => {
    if (succ.data == "updated") {
      swal("Data Updated", "", "success");
    }
  })
  axios.post(uri + "updatesocstatus8", { Name: j[0], Soc:dep }).then((succ) => {
    if (succ.data == "updated") {
      swal("Data Updated", "", "success");
    }
  })
  axios.post(uri + "updatesocstatus9", { Name: k[0], Soc:dep }).then((succ) => {
    if (succ.data == "updated") {
      swal("Data Updated", "", "success");
    }
  })
  axios.post(uri + "updatesocstatus10", { Name: l[0], Soc:dep }).then((succ) => {
    if (succ.data == "updated") {
      swal("Data Updated", "", "success");
    }
  })
  axios.post(uri + "updatesocstatus11", { Name: m[0], Soc:dep }).then((succ) => {
    if (succ.data == "updated") {
      swal("Data Updated", "", "success");
    }
  })
  }
  const [query, setQuery] = useState("")

  return (
    <div className="department">
        <SocSidebar />
      <SocNavbar />
      <div className="dept">
        <div className="col-lg-10 col-md-10 col-sm-9 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 marge1">
          <form className=" login" onSubmit={handleform}>
            <div className="text3">Update Members:</div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 members">
              <div className="divide1 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group frms">
                  <label>Coordinator </label>
                  <select name="coordinator" className="form-control" isMulti type="text" onChange={event => setQuery(event.target.value)} >
                    {/* <option value="" disabled selected hidden>
                      Coordinator
                    </option> */}
                    <option>{coord}</option>
                    {
                      data1.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Co-Coordinator</label>
                  <select name="cocoordinator" className="form-control" >
                    <option>{cocoord}</option>
                    {/* <option value="" disabled selected hidden>
                      Co-Coordinator
                    </option> */}
                    {data1.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group frms">
                  <label>PRO</label>
                  <select name="pro" className="form-control">
                    <option>{pro}</option>
                    {data1.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group frms">
                  <label>Database and Technician</label>
                  <select name="dbandtech" className="form-control">
                    <option>{dt}</option>
                    {/* <option value="" disabled selected hidden>
                      Database and Techinician
                    </option> */}
                    {data1.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Discipline</label>

                  <select name="discipline" className="form-control">
                    <option>{dis}</option>
                    {/* <option value="" disabled selected hidden>
                      Discipline
                    </option> */}
                    {data1.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group frms">
                  <label>Event Management</label>

                  <select name="event" className="form-control">
                    <option>{event}</option>
                    {/* <option value="" disabled selected hidden>
                      Event Management
                    </option> */}
                    {data1.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="divide col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group frms">
                  <label>Tech Team</label>

                  <select name="tech" className="form-control">
                    <option>{tech}</option>
                    {/* <option value="" disabled selected hidden>
                      Tech Team
                    </option> */}
                    {data1.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Social Media </label>

                  <select name="socialmedia" className="form-control">
                    <option>{social}</option>
                    {/* <option value="" disabled selected hidden>
                      Social Media
                    </option> */}
                    {data1.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Creative </label>

                  <select name="creative" className="form-control">
                    <option>{creative}</option>
                    {/* <option value="" disabled selected hidden>
                      Creative
                    </option> */}
                    {data1.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Content </label>

                  <select name="content" className="form-control">
                    <option>{content}</option>
                    {/* <option value="" disabled selected hidden>
                      Content
                    </option> */}
                    {data1.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Active Members </label>

                  <select name="activemembers" className="form-control">
                    <option>{active}</option>
                    {/* <option value="" disabled selected hidden>
                      Active Members
                    </option> */}
                    {data1.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Executives </label>

                  <select name="executives" className="form-control">
                    <option>{exec}</option>
                    {/* <option value="" disabled selected hidden>
                      Executives
                    </option> */}
                    {data1.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <input
                    type={"submit"}
                    value="Update"
                    className="btn btn-default btnn upbtn"
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
