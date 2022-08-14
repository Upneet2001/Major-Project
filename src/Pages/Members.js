import React from "react";

export default function Departmentadmin() {
  return (
    <div className="department">
      <div className="dept">
        <div className="container-fluid log">
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 deptfrm frm">
            <form className="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-10 col-md-10 col-sm-10 col-xs-10 login">
              <h1 className="text">Members of Society</h1>
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
                <label>
                  Co-Coordinator
                  </label>
                  <input
                    type={"text"}
                    name="cocoordinator"
                    placeholder="Co-Coordinator"
                    className="form-control"
                    required
                  />
                
              </div>
              <div className="form-group frms">
                <label>
                  PRO
                  </label>
                  <input
                    type={"text"}
                    name="pro"
                    placeholder="PRO"
                    className="form-control"
                    required
                  />
            
              </div>
              <div className="form-group frms">
                <label>
                  Database and Techinician
                  </label>
                  <input
                    type={"text"}
                    name="dbandtech"
                    placeholder="Database and Techinician"
                    className="form-control"
                    required
                  />
               
              </div>
              <div className="form-group frms">
                <label>
                  Discipline
                  </label>
                  <input
                    type={"text"}
                    name="discipline"
                    placeholder="Discipline"
                    className="form-control"
                    required
                  />
               
              </div>
              <div className="form-group frms">
                <label>
                  Event Management
                  </label>
                  <input
                    type={"text"}
                    name="event"
                    placeholder=" Event Management"
                    className="form-control"
                    required
                  />
                
              </div>
              <div className="form-group frms">
                <label>
                  Tech Team
                  </label>
                  <input
                    type={"text"}
                    name="tech"
                    placeholder="Tech Team"
                    className="form-control"
                    required
                  />
               
              </div>
              <div className="form-group frms">
                <label>
                  Social Media   </label>
                  <input
                    type={"text"}
                    name="socialmedia"
                    placeholder="Social Media"
                    className="form-control"
                    required
                  />
             
              </div>
              <div className="form-group frms">
                <label>
                  Creative </label>
                  <input
                    type={"text"}
                    name="creative"
                    placeholder="Creative"
                    className="form-control"
                    required
                  />
               
              </div>
              <div className="form-group frms">
                <label>
                  Content    </label>
                  <input
                    type={"text"}
                    name="content"
                    placeholder="Content"
                    className="form-control"
                    required
                  />
            
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
