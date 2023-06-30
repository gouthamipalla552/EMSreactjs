import EmpTable from "./EmpTable.js";
import EmpForm from "./EmpForm.js";
import EmpDetails from "./EmpDetails";
import EmpEdit from "./EmpEdit";
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

 function App(){
    return(
      <div >
        <Router>
         <Routes>
          <Route  path="/" element={<EmpTable/>}/>
          <Route  path="/EmpForm" element={<EmpForm/>}/>
          <Route  path="/EmpEdit/:empid" element={<EmpEdit/>}/>
          <Route  path="/EmpDetails/:empid" element={<EmpDetails/>}/>
         </Routes>
        </Router>
      </div>
    )
   }
   export default App;