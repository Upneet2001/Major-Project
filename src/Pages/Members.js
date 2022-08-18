import React from "react";
import Sidebaradmin from "./Sidebaradmin";


export default function Departmentadmin() {
  return (
    <div className="department">
      <Sidebaradmin />
      <div className="dept">
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
          <form className=" col-lg-12  login">
            <div className="text3 container">Members of Society:</div>
            <div className="col-lg-12 members">
              <div className="divide1 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group frms">
                  <label>Coordinator </label>
                  <input
                    type={"text"}
                    name="coordinator"
                    placeholder="Coordinator"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group frms">
                  <label>Co-Coordinator</label>
                  <input
                    type={"text"}
                    name="cocoordinator"
                    placeholder="Co-Coordinator"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group frms">
                  <label>PRO</label>
                  <input
                    type={"text"}
                    name="pro"
                    placeholder="PRO"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group frms">
                  <label>Database and Techinician</label>
                  <input
                    type={"text"}
                    name="dbandtech"
                    placeholder="Database and Techinician"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group frms">
                  <label>Discipline</label>
                  <input
                    type={"text"}
                    name="discipline"
                    placeholder="Discipline"
                    className="form-control"
                    required
                  />
                </div>
              

              <div className="form-group frms">
                <label>Event Management</label>
                <input
                  type={"text"}
                  name="event"
                  placeholder=" Event Management"
                  className="form-control"
                  required
                />
                </div>
              </div>
              <div className="divide col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group frms">
                  <label>Tech Team</label>
                  <input
                    type={"text"}
                    name="tech"
                    placeholder="Tech Team"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group frms">
                  <label>Social Media </label>
                  <input
                    type={"text"}
                    name="socialmedia"
                    placeholder="Social Media"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group frms">
                  <label>Creative </label>
                  <input
                    type={"text"}
                    name="creative"
                    placeholder="Creative"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group frms">
                  <label>Content </label>
                  <input
                    type={"text"}
                    name="content"
                    placeholder="Content"
                    className="form-control"
                    required
                  />
                  </div>
                  <div className="form-group frms">
                    <label>Active Members </label>
                    <input
                      type={"text"}
                      name="activemembers"
                      placeholder="Active Members"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group frms">
                    <label>Executives </label>
                    <input
                      type={"text"}
                      name="executives"
                      placeholder="Executives"
                      className="form-control"
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
