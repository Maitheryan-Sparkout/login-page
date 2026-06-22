import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

import DepartementFilter from "../components/DepartmentFilter";
import EmployeeCard from "../components/EmployeeCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";


export default async function Employee({searchParams}) {
      const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/");
    }
    
    const{department}=await searchParams;

    const res =await fetch("https://dummyjson.com/users");
    const data = await res.json();

    let employee=data.users;

    if(department){
        employee=employee.filter(
            (user)=>user.company?.department === department
        );
    }
    

    return(
        <div className="employee">
            <Navbar/>


            <SearchBar/>
            <DepartementFilter/>

            <div>
                {employee.map((user)=>(
                    <EmployeeCard
                    key={user.id}
                    employee={user}
                    />
                )
                )}
            </div>
        </div>
        
    );
}