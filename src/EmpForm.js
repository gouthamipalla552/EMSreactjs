import { useState , navigate} from "react";
import { Link } from "react-router-dom";
function EmpForm(){
  const[id,setId]=useState("")
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")

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
  e.preventDefault();
  const data={id,name,email,phone}
  fetch("http://localhost:3006/employee/",{
    method:"POST",
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
    console.log(err.message)

  })
}
   
 return(
  <div class="card p-5 border border-danger" >
        <div className="form border border-dark ">
           <form onSubmit={handleSubmit}>
            <div className=" bg-info text-danger text-left  p-5">
              <h3 >New Employee Details</h3>
            </div>
            <div class="card-body  p-5 bg-warning border border-dark ">
              <div classNameName= " mb-3 p-2  ">
                <label  className="form-label">ID:</label>
                <input type="text" value={id} onChange={changeId}  className="form-control w-75  " id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text w-75" >We'll never share your email with anyone else.</div>
           </div>
           <div className="mb-3">
             <label  className="form-label">Name</label>
             <input type="text" value={name} onChange={changeName} className="form-control w-75" id="exampleInputPassword1"/>
           </div>
           <div className="mb-3">
             <label  className="form-label">Email</label>
             <input type="email" value={email} onChange={changeEmail} className="form-control w-75 " id="exampleInputPassword1" />
           </div>
           <div className="mb-3">
             <label  className="form-label">Mobile NO:</label>
             <input type="tel" value={phone} onChange={changePhone} className="form-control w-75 " id="exampleInputPassword1" />
           </div>
           <button type="submit" className="btn btn-primary p-2 m-2">Submit</button>
           <Link to="/" className="btn btn-primary p-2 m-2   ">Back</Link>
        </div>
   </form>
</div>
 </div>
      )}
export default EmpForm;