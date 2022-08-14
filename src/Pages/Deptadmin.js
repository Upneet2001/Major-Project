import axios from 'axios';
import React, { useEffect, useState } from "react";

export default function Deptadmin() {
    var uri= "http://localhost:1200/";
    function handleform(e){
        e.preventDefault();
        var count=0;
        var data = new FormData(e.currentTarget);
        var counter=count++;
        console.log(count);
        var obj={
            Sno : counter,
            Department: data.get('departmentname'),
            Society: data.get('society'),
        }
        axios.post(uri+'AddDepart', obj).then((succ) => {
            // console.log(succ.data);
            if(succ.data == "ok"){
                alert('Data Added');
                getdata();
                e.target.reset();
                e.target.departmentname.focus();
            }
        })
    }
    const [data, setdata] = useState([]);
    function getdata(){
        axios.get(uri+'getDepart').then((succ) => {
            setdata(succ.data);
        })
    }
    useEffect(() => {
        getdata();
    }, [])

    function del(x) {
        // alert(x);
        axios.post(uri+'deletedept', {id:x}).then((succ) => {
            if(succ.data == "Deleted"){
                alert('Deleted');
                getdata();
            }
        })
    }
  return (
    <div className="department">
            <div className="container-fluid log">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 deptfrm frm">
            <h1 className='text'>Add Department and Society name</h1>
            <form className="col-lg-offset-2 col-md-offset-2 col-sm-offset-1 col-xs-offset-1 col-lg-8 
            col-md-8 col-sm-10 col-xs-10 login " onSubmit={handleform}>
        <div className="form-group frms">
        <label>Add Department name</label>
        <input type={"text"} name="departmentname" placeholder="Department Name" className="form-control" required />
    </div>

    <div className="form-group frms">
        <label>Add Society name</label>
        <input type={"text"} name="society" placeholder="Society" className="form-control" required/>
    </div>
    <div className="form-group add">
         <input type={'submit'} value="Add" className=" addept btn btn-info"/>
    </div>
            </form>
            <div className="container-fluid">
            <table className="table table-hover">
            
                <thead>
                    <tr className='th'>
                        <td>S no.</td>
                        <td>Department Name</td>
                        <td>Society Name</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row._id}>
                            <td>{row.Sno}</td>
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
    
  )
}
