
import { useState } from "react";
import{ useEffect }from"react";
import { Link, useParams } from "react-router-dom";



function EmpDetails(){
    const[data,setData]=useState("")
    const{empid}=useParams()
    useEffect(()=>{
        fetch("http://localhost:3006/employee/"+empid)
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            setData(resp)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])

    return(
        <div   >
           <div className="card w-75 bg-info m-5 p-5 border border-danger">
            {
              data &&
                <div >
                    <h2 className="bg-dark p-2  text-white border border-warning">Employee Details </h2><br></br>
              <h2>The Employee Id: {data.id} </h2>
               <h2> The Employee Name is : {data.name} </h2>
               <h2>content Information</h2>
               <h4>Email:{data.email}</h4>
               <h4>Mobile No:  {data.phone}</h4>
               
                </div>
            }
           <Link to="/" className="btn btn-warning p-3 m-4 w-25  ">Back</Link>
            </div>
   
        </div>
    )
}
export default EmpDetails;