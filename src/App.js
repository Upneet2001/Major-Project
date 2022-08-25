import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery";
import "bootstrap/dist/js/bootstrap";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Loginadmin from "./Pages/Loginadmin";
import Dashbaord1 from "./Pages/Dashboardadmin";
import Members from "./Pages/Members";
import Deptadmin from "./Pages/Deptadmin";
import Sidebaradmin from "./Pages/Sidebaradmin";
import Societypanel from "./Pages/Societypanel";
import Soclogin from "./Pages/Soclogin";
import Updateprofile from "./Pages/Updateprofile";
import LaunchEvent from "./Pages/LaunchEvent";
import Navbar from "./Pages/Navbar";
import Studentlist from "./Pages/Studentlist";
import SocSidebar from "./Pages/SocSidebar";
import SocNavbar from "./Pages/SocNavbar";
import SocDashboard from "./Pages/SocDashboard";
import Viewmembers from "./Pages/Viewmembers";
import Applysoc from "./Pages/Applysoc";
import Dashboardstudent from "./Pages/Dashboardstudent";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Loginadmin" element={<Loginadmin />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboardadmin" element={<Dashbaord1 />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Deptadmin" element={<Deptadmin />} />
          <Route path="/Sidebaradmin" element={<Sidebaradmin />} />
          <Route path="/Societypanel" element={<Societypanel />} />
          <Route path="/Soclogin" element={<Soclogin />} />
          <Route path="/Updateprofile" element={<Updateprofile />} />
          <Route path="/LaunchEvent" element={<LaunchEvent />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Studentlist" element={<Studentlist />} />
          <Route path="/SocDashboard" element={<SocDashboard />} />
          <Route path="/SocNavbar" element={<SocNavbar />} />
          <Route path="/SocSidebar" element={<SocSidebar />} />
          <Route path="/Viewmembers" element={<Viewmembers />} />
          <Route path="/Applysoc" element={<Applysoc />} />
          <Route path="/Dashboardstudent" element={<Dashboardstudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
