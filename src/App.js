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
import Chat from "./Pages/Chat";
import Viewevents from "./Pages/Viewevents";
import Socabout from "./Pages/Socabout";
import Home from "./Pages/Home";
import Registeredlist from "./Pages/Registeredlist";
import Aboutupdate from "./Pages/Aboutupdate";
import Socviewmem from "./Pages/Socviewmem";
import Viewfeedback from "./Pages/Viewfeedback";
import StudHome from "./Pages/StudHome";
import Studsoc from "./Pages/Studsoc";
import Studevent from "./Pages/Studevent";
import Footer from "./Pages/Footer";
import Currentevent from "./Pages/Currentevent";
import Currentsoc from "./Pages/Currentsoc";
import Currentnav from "./Pages/Currentnav";
import Soccurrent from "./Pages/Soccurrent";
import Socevent from "./Pages/Socevent";
import Curmembers from "./Pages/Curmembers";
import Feedback from "./Pages/Feedback";
import Eventregistrations from "./Pages/Eventregistrations";
import Infoupdate from "./Pages/Infoupdate";
import Multiple from "./Multiple";
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
          <Route path="/Chat" element={<Chat/>} />
          <Route path="/Viewevents" element={<Viewevents/>} />
          <Route path="/Socabout" element={<Socabout/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/Registeredlist" element={<Registeredlist/>} />
          <Route path="/Aboutupdate" element={<Aboutupdate/>} />
          <Route path="/Socviewmem" element={<Socviewmem/>} />
          <Route path="/Viewfeedback"  element={<Viewfeedback/>}/>
          <Route path="/StudHome"  element={<StudHome/>}/>
          <Route path="/Studevent"  element={<Studevent/>}/>
          <Route path="/Studsoc"  element={<Studsoc/>}/>
          <Route path="/Footer"  element={<Footer/>}/>
          <Route path="/Currentevent"  element={<Currentevent/>}/>
          <Route path="/Currentsoc"  element={<Currentsoc/>}/>
          <Route path="/Currentnav"  element={<Currentnav/>}/>
          <Route path="/Soccurrent"  element={<Soccurrent/>}/>
          <Route path="/Socevent"  element={<Socevent/>}/>
          <Route path="/Curmembers"  element={<Curmembers/>}/>
          <Route path="/Feedback"  element={<Feedback/>}/>
          <Route path="/Eventregistrations"  element={<Eventregistrations/>}/>
          <Route path="/Infoupdate"  element={<Infoupdate/>}/>
          <Route path="/Multiple"  element={<Multiple/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
