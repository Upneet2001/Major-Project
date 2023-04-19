
// import Studentnavbar from "./Studentnavbar";
// import axios from 'axios';
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import swal from "sweetalert";
// import { FaUsers } from "react-icons/fa";


// export default function () {
//     var uri = "http://localhost:1200/";
//   var navi = useNavigate();
//   var idd = new URLSearchParams(window.location.search).get("q");

//   useEffect(() => {
//     var id = localStorage.getItem("Studentlogin");
//     if (!id) {
//       navi("/Login");
//     }
//   });
// console.log(idd);
  
// const [data2, setdata2] = useState([]);
// const [dep, setdep] = useState("");
// const [soc, setsoc] = useState("");
// function getdata2() {
//     if(idd){
//   axios.post(uri + "getcursoc",{ ID: idd}).then((succ) => {
//     setdata2(succ.data);
//     setdep(succ.data[0].Department);
//     setsoc(succ.data[0].Society);
//     console.log(succ.data);
//   });
// }
// }
// useEffect(() => {
//           getdata2();},[idd]);
//           console.log(dep);
//           console.log(soc);



// // const[type,settype]= useState("");
//   const [data1, setdata1] = useState([]);
//   function getdata1() {
//     if(dep){
//     axios.post(uri + "getaboutsoc",{Soc:soc, Dep:dep}).then((succ) => {
//       setdata1(succ.data);
//     //   setname(succ.data[0].EventName);
//     //   setsoc(succ.data[0].Society);
//     //   setdep(succ.data[0].Department);
//     //   settime(succ.data[0].Time);
//     //   setdate(succ.data[0].Date);
//     //   setvenue(succ.data[0].Venue);
//     //   setpic(succ.data[0].URL);
//     //   setdes(succ.data[0].Description);
//     //   settype(succ.data[0].Type);
//     console.log(succ.data);
//     });
//   }
// }
//   useEffect(() => {
//       getdata1();},[dep]);

//   return (
//     <div className="evie">
//        <Studentnavbar/>
//        {/* <div className='container social'>
//         {data1.map((row) => (
          
//         <div className='col-lg-12 events'>
//            <b><center><h1 style={{color:"black"}}>{name}</h1></center></b><br/>
//         <div className='col-lg-5' style={{marginTop:"%"}}>
//        <img src={pic} className='img-responsive evi'/>
//         </div>
//         <center>
//         <table >
// 		<tr>
// 			<th>Department name</th>
// 			<td>{dep}</td>
// 		</tr>
// 		<tr>
// 			<th>Society</th>
// 			<td>{soc}</td>
// 		</tr>
// 		<tr>
// 			<th>Event Name</th>
// 			<td>{name}</td>
// 		</tr>
// 		<tr>
// 			<th>Date</th>
// 			<td>{date}</td>
// 		</tr>
//     <tr>
// 			<th>Time</th>
// 			<td>{time}</td>
// 		</tr>
//     <tr>
// 			<th>Venue</th>
// 			<td>{venue}</td>
// 		</tr>
//     <tr>
// 			<th>Type</th>
// 			<td>{type}</td>
// 		</tr>
//     <tr>
// 			<th>Description</th>
// 			<td>{des}</td>
// 		</tr>

// 	</table>
//   </center>
//   <button className="btn btn-info view1"    data-toggle="modal"
//                   data-target="#mymodal1">Register Now</button>
//         </div>
//         ))}

//         </div> */}
//     </div>
//   )
// }
