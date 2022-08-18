import axios from 'axios';
import React, { useEffect, useState } from "react";
import Sidebaradmin from './Sidebaradmin';
import swal from 'sweetalert';

export default function Deptadmin() {
    var uri= "http://localhost:1200/";
    function handleform(e){
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var obj={
            Department: data.get('department')
        }
        axios.post(uri+'AddDepart', obj).then((succ) => {
            // console.log(succ.data);
            if(succ.data == "ok"){
                // alert('Data Added');
                swal("Data Added","","success")
                getdata1();
                e.target.reset();
                e.target.departmentname.focus();
            }
        })
    }
   
    function handleform1(e){
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var obj={
           Department: data.get('departmentname'),
            Society: data.get('society')
        }
        axios.post(uri+'AddSociety', obj).then((succ) => {
            if(succ.data == "ok"){
                // alert('Data Added');
                swal("Data Added","","success")
                getdata();
                getdata1();
                e.target.reset();
                e.target.society.focus();
            }
        })
    }
    const [data, setdata] = useState([]);
    function getdata(){
        axios.get(uri+'getSociety').then((succ) => {
            setdata(succ.data);
            console.log(succ.data);
        })
    }
    useEffect(() => {getdata();}, [])

    const [data1, setdata1]= useState([]);
    function getdata1(){
        axios.get(uri+'getDepart').then((succ) => {
            setdata1(succ.data);
            console.log(succ.data);
        })
    }

    useEffect(()=> {getdata1();}, [])

    function del(x) {
        // alert(x);
        axios.post(uri+'deleteSociety', {id:x}).then((succ) => {
            if(succ.data == "Deleted"){
                // alert('Deleted');
                swal("Data Deleted","","warning");
                getdata();
            }
        })
    }
    function del1(x) {
        // alert(x);
        axios.post(uri+'deletedept', {id:x}).then((succ) => {
            if(succ.data == "Deleted"){
                // alert('Deleted');
                swal("Data Deleted","","warning");
                getdata1();
            }
        })
    }
  return (
  <div>
       <Sidebaradmin/>
    <div className="department">
                        <div className="modal fade" id="mymodal" role="dialog">
                            <div className="modal-dialog modal-md">
                                <div className="modal-content " >
                                    <div className="modal-body deptfrm">
                                        <form onSubmit={handleform1}>
                                            <div className="form-group frms">
                                            <h3 style={{fontWeight:"bold", textAlign:"center"}}>Add Department and Society name</h3><br/>
                                            <label>Select Department name</label>
                                            <select name="departmentname" className="form-control" required>
                                            <option value="" disabled selected hidden>Select Department</option>
                                                    {data1.map((row)=> (
                                                         <option>{row.Department}</option>
                                                    ))}
                                                       
                                                </select>
                                        </div>

                                        <div className="form-group frms">
                                            <label>Add Society name</label>
                                            <input type={"text"} name="society" placeholder="Society" className="form-control" required/>
                                        </div>
                                        <div className="form-group add">
                                            <input type={'submit'} value="Add" className="btn btn-info addept"/>
                                        </div>
                                                
                                            <div className="form-group text-left">
                                                <button type="button" className="btn btn-danger closd" data-dismiss="modal">Close</button>
                                            
                                            </div>
                                            </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='modal fade' id="mymodal1" role="dialog">
                            <div className='modal-dialog modal-md '>
                                <div className='modal-content'>
                                    <div className='modal-body deptfrm'>
                                        <form  onSubmit={handleform}>
                                            <div className="form-group frms">
                                                <h3 style={{fontWeight:"bold", textAlign:"center"}}>Add Department name</h3><br/>
                                               <input type={"text"} name="department" placeholder="Department Name"  className='form-control ' required/>
 
                                            </div>
                                            <div className="form-group add">
                                            <input type={'submit'} value="Add" className="btn btn-info addept"/>
                                        </div>
                                            
                                            <div className="form-group text-left">
                                                <button type="button" className="btn btn-danger closd" data-dismiss="modal">Close</button>
                                            
                                            </div>
                                        </form>
                                        <table className='table table-hover tble'>
                                         <thead>
                                                <tr className='head'>
                                                    <th>S no.</th>
                                                    <th>Department Name</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data1.map((row) => (
                                                    <tr key={row._id}>
                                                        <td></td>
                                                        <td>{row.Department}</td>
                                                        <td>
                                                            <button onClick={() => del1(row._id)}className="btn btn-danger">
                                                                <span className="glyphicon glyphicon-trash"></span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    
            
            <div className="container-fluid deptadmin">
            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 ">
         
            <div className='bts'>
                <span><button className="btn btnn btn-info btndep" data-toggle="modal" data-target="#mymodal1">
                <span className="glyphicon glyphicon-plus"></span> Add New Department </button>
                <button className="btn btnn btn-info add" data-toggle="modal" data-target="#mymodal">
                 <span className="glyphicon glyphicon-plus"></span> Add New Society
                 </button></span>
                 </div>   
            <div className='text'>List of Societies</div>
            <div className="table-responsive">
            <table className="table table-hover tble">
            
                <thead>
                    <tr className='yel'>
                        <th>S no.</th>
                        <th>Department Name</th>
                        <th>Society Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row._id}>
                            <td></td>
                            <td>{row.Department}</td>
                            <td>{row.Society}</td>
                            <td>
                                <button onClick={() => del(row._id)}className="btn btn-danger">
                                    <span className="glyphicon glyphicon-trash"></span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

    </div>
    </div>
    </div>
    </div>
    </div>  
  )
}
