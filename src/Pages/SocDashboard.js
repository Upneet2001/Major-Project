import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocNavbar from "./SocNavbar";
import SocSidebar from "./SocSidebar";
import { db } from "./Firebase";
import axios from "axios";
import swal from "sweetalert";

export default function SocDashboard() {
  const [show, setshow] = useState(false);

  var navi = useNavigate();
  var uri = "http://localhost:1200/";

  useEffect(() => {
    var id = localStorage.getItem("SocietyLogin");
    if (!id) {
      navi("/Soclogin");
    }
  });

  // console.log();
  useEffect(() => {
    if (window.innerWidth > 768) {
      setshow(true);
    }
  }, []);
  var id = localStorage.getItem("SocietyLogin");
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

  function handleform(e) {
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var Society = dep;
    var Department = branch;
    var name = data.get("name");
    console.log(name);
    var ref = db.ref();
    const metadata = {
      contentType: name.type,
    };
    ref
      .child(name.name)
      .put(name, metadata)
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((url) => {
        console.log(url);
        var imgdata = {
          Society: Society,
          Department: Department,
          URL: url,
        };
        axios.post(uri + "AddLogo", imgdata).then((succ) => {
          console.log(succ.data);
          if (succ.data == "ok") {
            swal("Data Added", "", "success");
            e.target.reset();
            e.target.name.focus();
            getdata1();
          }
        });
      });
  }

  const [url, seturl] = useState("");
  function getdata1() {
    axios.post(uri + "getLogo", { Dep: dep }).then((succ) => {
      seturl(succ.data[0].URL)
    });
  }
  useEffect(() => {
    getdata1();
  });

  function del1(x) {
    swal({
      title: "Deletion Confirmation",
      text: "Are you sure you want to delete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.post(uri + "deletelogo", { dept: x }).then((succ) => {
            if (succ.data == "Deleted") {
              swal("Data Deleted", "", "warning");
              getdata1();
            }
          });
        }
        getdata1();
      });
  }
  return (
    <div className="socabout">
      <SocSidebar />
      <SocNavbar />
      {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> */}

        <div className=" col-lg-10 col-md-10 col-sm-9 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-3 col-xs-offset-0 marge1 ">
          <form className=" col-lg-12 login" onSubmit={handleform}>
            <center>
              <h1 className="text3 ">Add Logo Of Society</h1>
            </center>
            <div className="form-group">
              <input
                type={"file"}
                name="name"
                className="filee" />
            </div>
            <div className="form-group">
              <input
                type={"submit"}
                value="Add"
                className="btn btnn btn-default subevent"
              /><br />
              <p style={{ color: "red", textAlign: "right" }}>*Note: If you want to add new logo, first delete the previous one(if any). &nbsp;</p>
            </div>
      </form>
    </div>
      {/* </div >  */}
      <div className="col-lg-offset-5 col-lg-3 col-md-offset-4 col-md-4 col-sm-offset-5 col-sm-4 col-xs-offset-3 col-xs-6">

    <center><img src={url} className="img-responsive log" /><br /><button onClick={() => del1(dep)} className="btn btn-danger">
      <span className="glyphicon glyphicon-trash"></span>
    </button></center>
  </div>
    
    </div >
  );
}
