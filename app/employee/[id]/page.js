

import EmployeeDetails from "../../components/EmployeeDetails";



export default async function Page({params}) {
const{id}=await params;

    const res=await fetch(
        `https://dummyjson.com/users/${id}`
    );
    const employee =await res.json();
    return(
        <EmployeeDetails employee ={employee}/>
    );
}
