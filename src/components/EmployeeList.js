import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import EmployeeService from '../sevices/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {
const navigate= useNavigate();
const [employee, setemployee] = useState(null);
const [loading, setloading] = useState(true);
useEffect(() => {
    const fetchData=async ()=>{
        setloading(true);
        try{
        const Response= await EmployeeService.getallEmployee();
        setemployee(Response.data);
        }
        catch(error){
            console.log(error);
        }
        setloading(false);
    };
    fetchData();
},[]);
const deleteEmployee = (e, id) => {
  e.preventDefault();
  EmployeeService.deleteEmployee(id).then((res)=>{
    if(employee){
      setemployee((preventElement)=>{
        return preventElement.filter((employee)=>employee.id!=id);
      });
    }
  });

};


  return (
    <div className="container mx-auto my-8">  
    <div className="h-12">
        <button onClick={()=>navigate("/addEmployee")} className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">Add Employee</button>
    </div>
    <div className="flex shadow border-b">
    <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
              </tr>
              </thead>
              {!loading &&(
              <tbody className="bg-white">
                 {employee.map((emp)=>(
                <Employee emp={emp} key={emp.id} deleteEmployee={deleteEmployee}></Employee>
                ))}
              </tbody>
              )}
              </table>
    </div>

    </div>
  )
}

export default EmployeeList