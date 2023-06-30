import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
function EmpEdit(){
    const[id,setId]=useState("")
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")

    const{empid}=useParams()

    useEffect(()=>{
        fetch("http://localhost:3006/employee/"+empid)
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
          setId(resp.id)
          setName(resp.name)
          setEmail(resp.email)
          setPhone(resp.phone)

        })
        .catch((err)=>{
            console.log(err.msg)
        })
    },[])
   

    const navigate=useNavigate()
    const changeId=(e)=>{
        setId(e.target.value)
    }
    const changeName=(e)=>{
        setName(e.target.value)
    }
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const changePhone=(e)=>{
        setPhone(e.target.value)
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
        const data={id,name,email,phone}
        fetch("http://localhost:3006/employee/"+empid,{
            method:"put",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
                
       })
       .then(()=>{
           alert("successfully saved")
          navigate("/")
       })
       .catch((err)=>{
        console.log(err.msg)
       })
    }
    return(
      <div className="card border border-danger p-5 m-5 bg-secondary w-75 ">
        <div classNameName=" edit">
            <div className="card-title  ">
                <h3 className="	bg-info m-5  p-3"> Create Employee List</h3>
                 <form onSubmit={handleSubmit}>
                  <div className=" mb-3 m-5 text-white" >
                     <label classNameName="form-label  "> ID: </label>
                     <input type="text " size={75} value={id} onChange={changeId}  classNameName="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" className="bg-transparent border-white"></input>
                 </div>
                 <div className="mb-3 m-3 text-white" >
                   <label  classNameName="form-label">name : </label>
                   <input type="text"size={75} value={name} onChange={changeName} classNameName="form-control" id="exampleInputPassword1 " className="bg-transparent border-white"></input>
                </div>
                <div className="mb-3 m-3 text-white" >
                  <label  classNameName="form-label">email :</label>
                  <input type="email" size={75}  value={email} onChange={changeEmail} classNameName="form-control" id="exampleInputPassword1" className="bg-transparent border-white"></input>
                </div>
                <div className="mb-3 m-2 text-white" >
                  <label  classNameName="form-label">Mobile : </label>
                  <input type="tel" size={75} value={phone} onChange={changePhone} classNameName="form-control" id="exampleInputPassword1" className="bg-transparent border-white"></input>
               </div>
              <button type="submit" class="btn btn-dark   p-2 m-3">Submit</button>
              </form>
        </div> 
      </div>
      </div>
 
    )
}
export default EmpEdit;














































