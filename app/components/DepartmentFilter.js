"use client";


import { useRouter } from "next/navigation";

export default function DepartementFilter(){
    const router=useRouter();

    const handleDepartment=(e)=> {
        const department =e.target.value;
        if(department === "All Departments"){
            router.push("/employee");
        }else{
            router.push(
                `/employee?department=${encodeURIComponent(department)}`
            );
        }
    }
    return (
        <div className="filter-container" >
        <select className="filter" onChange={handleDepartment}>
            <option>All Departments</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Support</option>
            <option>Research and Development</option>
            <option>Human Resources</option>
            <option>Product Management</option>
            <option>Services</option>
            <option>Accounting</option>
            <option>Training</option>
            <option>Sales</option>
            <option>Legal</option>

        </select>
        </div>
    );
}