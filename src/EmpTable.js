
import { useState } from "react";
import{ useEffect}from"react";
import {  Link,useNavigate} from "react-router-dom";

function EmpTable(){
    const[data,setData]=useState(null)
    const navigate=useNavigate()
    useEffect(()=>{
        fetch("http://localhost:3006/employee/")
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


    const Delete=(id)=>{
        fetch("http://localhost:3006/employee/"+id,{
        method:"DELETE"
    })
    .then(()=>{
        alert("Delete successfully")
        window.location.reload()
    })
   }
     const Edit=(id)=>{
        navigate("/EmpEdit/"+id)
     }
     const details=(id)=>{
        navigate("/EmpDetails/"+id)
      }
    return(
        <div>
          <div className="card mx-auto p-5 ">
            <div className="card-title bg-warning text-danger mt-4 text-center ">
                <h3>Employee Managemant System</h3>
            </div>
            <div className="card-body mx-5 ">
             <nav class="navbar bg-body-tertiary">
               <div class="container-fluid">
                  <Link to ="/EmpForm"className="btn btn-success mb-2">ADD NEW(+)</Link>
               </div>
               </nav>
               <br></br>
               <table className="table table-bordered">
                    <thead className="bg-dark text-light ">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobil No</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-info">
                       {data &&
                       data.map(item=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td >
                                <a onClick={()=>{details(item.id)}} className="btn btn-success">Details</a>
                                <a onClick={()=>{Edit(item.id)}}  className="btn btn-danger">Edit</a>
                                <a onClick={()=>{Delete(item.id)}} className="btn btn-primary">Delete</a>
                            </td>
                        </tr>
                       ))}
                    
                    </tbody>
                </table>
            </div>
          </div>
        
        
        </div>
    )
}
export default EmpTable;






