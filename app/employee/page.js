import Link from "next/link";

import DepartementFilter from "../components/DepartmentFilter";
import EmployeeCard from "../components/EmployeeCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import RecentlyViewed from "../components/RecentlyViewed";



export default async function Employee({searchParams}) {
    const params=await searchParams;

    const page=Number(params.page) || 1;
    const department=params.department;

    const limit =10;
    const skip=(page-1) * limit;

    const res =await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`,{cache: "no-store"});

    const data = await res.json();
const totalPages=Math.ceil(data.total/limit);

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

            <RecentlyViewed/>
            <div>
                {employee.map((user)=>(
                    <EmployeeCard
                    key={user.id}
                    employee={user}
                    />
                )
                )}
            </div>
            <div className="page" style={{marginTop:"20px"}}>
                {page >1 && (
                <Link href={`/employee?page=${page -1}`}>
                Previous
                </Link>
                )}

                <span style={{margin: "0 20px"}}>
                    Page {page} of {totalPages}
                </span>

                {page < totalPages && (
                    <Link href={`/employee?page=${page +1}`}>
                Next
                </Link>
                )}

            </div>
        </div>
        
    );
}