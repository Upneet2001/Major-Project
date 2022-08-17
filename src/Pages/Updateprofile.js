import React from "react";
import Sidebaradmin from "./Sidebaradmin";
import axios from 'axios';

export default function Updateprofile() {
  var uri = "http://localhost:1200/";
  function handleform(e){
    e.preventDefault();
        var data = new FormData(e.currentTarget);
        var obj = {
            Coordinator: data.get('coordinator'),
            Cocoordinator: data.get('cocoordinator'),
            Pro: data.get('pro'),
            Databaseandtech: data.get('dbandtech'),
            Discipline: data.get('discipline'),
            Event: data.get('event'),
            Tech: data.get('tech'),
            Socialmedia: data.get('socialmedia'),
            Creative: data.get('creative'),
            Content: data.get('content'),
        }
        axios.post(uri+'Addmember', obj).then((succ) => {
            if(succ.data == "ok"){
                alert('Data Added');
                e.target.reset();
                e.target.name.focus();
            }
        })
      }

  return (
    <div className="department">
      <Sidebaradmin />
      <div className="dept">
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
          <form className=" col-lg-12 login" onSubmit={handleform}>
            <h1 className="text3 container">Members of Society:</h1>
            <br />
            <div className="col-lg-12 members">
              <div className="divide1 col-lg-6">
                <div className="form-group frms">
                  <label>Coordinator </label>
                  <input
                    type={"text"}
                    name="coordinator"
                    placeholder="Coordinator"
                    className="form-control"
                  />
                </div>
                <div className="form-group frms">
                  <label>Co-Coordinator</label>
                  <input
                    type={"text"}
                    name="cocoordinator"
                    placeholder="Co-Coordinator"
                    className="form-control"
                  />
                </div>
                <div className="form-group frms">
                  <label>PRO</label>
                  <input
                    type={"text"}
                    name="pro"
                    placeholder="PRO"
                    className="form-control"
                  />
                </div>
                <div className="form-group frms">
                  <label>Database and Techinician</label>
                  <input
                    type={"text"}
                    name="dbandtech"
                    placeholder="Database and Techinician"
                    className="form-control"
                  />
                </div>
                <div className="form-group frms">
                  <label>Discipline</label>
                  <input
                    type={"text"}
                    name="discipline"
                    placeholder="Discipline"
                    className="form-control"
                    
                  />
                </div>
              </div>
              <div className="divide col-lg-6">
                <div className="form-group frms">
                  <label>Event Management</label>
                  <input
                    type={"text"}
                    name="event"
                    placeholder=" Event Management"
                    className="form-control"
                    
                  />
                </div>
                <div className="form-group frms">
                  <label>Tech Team</label>
                  <input
                    type={"text"}
                    name="tech"
                    placeholder="Tech Team"
                    className="form-control"
                    
                  />
                </div>
                <div className="form-group frms">
                  <label>Social Media </label>
                  <input
                    type={"text"}
                    name="socialmedia"
                    placeholder="Social Media"
                    className="form-control"
                    
                  />
                </div>
                <div className="form-group frms">
                  <label>Creative </label>
                  <input
                    type={"text"}
                    name="creative"
                    placeholder="Creative"
                    className="form-control"
                    
                  />
                </div>
                <div className="form-group frms">
                  <label>Content </label>
                  <input
                    type={"text"}
                    name="content"
                    placeholder="Content"
                    className="form-control"
                    
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type={"submit"}
                value="Update"
                className="btn btn-default btnn upbtn"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
  
  }
