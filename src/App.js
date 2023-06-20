
import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import EmployeeList from './components/EmployeeList'
import UpdateEmplyee from './components/UpdateEmployee';

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<EmployeeList/>}></Route>
        <Route path='/' element={<EmployeeList/>}></Route>
        <Route path='/employeeList' element={<EmployeeList/>}></Route>
        <Route path='/addEmployee' element={<AddEmployee/>}></Route>
        <Route path='/updateEmployee/:id' element={<UpdateEmplyee/>}></Route>
      </Routes>
      </BrowserRouter>
      
      
      </>
  );
}

export default App;
