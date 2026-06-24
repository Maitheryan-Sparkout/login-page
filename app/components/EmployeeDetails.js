"use client";
import { useEffect } from "react";
import useRecentEmployeeStore from "../store/recentEmployeeStore";

export default function EmployeeDetails({employee}){
    const addRecentEmployee=useRecentEmployeeStore(
        (state)=>state.addRecentEmployee
    );

    useEffect(()=>{
        if(employee){
            addRecentEmployee(employee);
        }
    
    },[employee,addRecentEmployee]);

    return(
    <div className="detail" >
        <img 
        src={employee.image}
        alt={employee.firstName}
        width="150"/>

        <h1>{employee.firstName} {employee.lastName}</h1>

        <p><span>Email:</span> {employee.email}</p>
        <p><span>Age:</span> {employee.age}</p>
        <p><span>Gender:</span> {employee.gender}</p>
        <p><span>Phone:</span> {employee.phone}</p>
        <p><span>Address: </span> {employee.address?.address}</p>
        <p><span>Department:</span> {employee.company.department}</p>
        <p><span>Company:</span> {employee.company?.name}</p>
        
    </div>
    );
}
