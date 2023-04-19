import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebaradmin from "./Sidebaradmin";
import swal from "sweetalert";

export default function Departmentadmin() {
  var uri = "http://localhost:1200/";
  var navi = useNavigate();

  function handleform(e) {
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var obj = {
      Branch: name,
      Society: dep,
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
    axios.post(uri + "Addmember", obj).then((succ) => {
      if (succ.data == "ok") {
        swal("Data Added", "", "success");
        getdata();
 console.log(obj.Coordinator);
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
})
}

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
    axios.post(uri + "getmember1", { Dep: dep }).then((succ) => {
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
        <div className="col-lg-10 col-md-10 col-sm-9 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 marge2">
          <form className="login " onSubmit={handleform}>
            <div className="text4">{name} </div>
            <div className="text3">{dep} Members:</div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 members">
              <div className="divide1 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group frms">
                  <label>Coordinator </label>
                  <select name="coordinator" className="form-control">
                    <option value="" disabled selected hidden>
                      Coordinator
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
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
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
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
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
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
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
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
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group frms">
                  <label>Event Management</label>

                  <select name="event" className="form-control">
                    <option value="" disabled selected hidden>
                      Event Management
                    </option>
                    {data.map((row) => (
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
                    <option value="" disabled selected hidden>
                      Tech Team
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
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
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
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
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Content </label>

                  <select name="content" className="form-control">
                    <option value="" disabled selected hidden>
                      Content
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Active Members </label>

                  <select name="activemembers" className="form-control">
                    <option value="" disabled selected hidden>
                      Active Members
                    </option>
                    {data.map((row) => (
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
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
                      <option key={row._id}>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <input
                    type={"submit"}
                    value="Add"
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

// var a = [
    //   obj.Coordinator,
    //   obj.Cocoordinator,
    //   obj.Pro,
    //   obj.Databaseandtech,
    //   obj.Discipline,
    //   obj.Event,
    //   obj.Tech,
    //   obj.Socialmedia,
    //   obj.Creative,
    //   obj.Content,
    //   obj.ActiveMembers,
    //   obj.Executives,
    // ];
    //console.log(a);
   // var x = 0;
    //   for (var i = 0; i < a.length; i++) {
    //     for (var k = i + 1; k < a.length; k++) {
    //         if((a[i] == a[k])) {
    //           // console.log(a[i]);
    //           // console.log(a[k]);
    //           //console.log("no");
    //           x++;
    //         }
    //         else{
    //           console.log("pass");
    //         }
    //   }
    // }