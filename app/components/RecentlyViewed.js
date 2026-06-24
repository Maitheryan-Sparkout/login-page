"use client";

import useRecentEmployeeStore from "../store/recentEmployeeStore";

export default function RecentlyViewed() {
const recentEmployees = useRecentEmployeeStore(
    (state) => state.recentEmployees
);

if(!Array.isArray(recentEmployees)){
    return <div>No Recently Viewed employees</div>
}

return (
    <div className="recent">
    <h2>Recently Viewed Employees</h2>

<ol>{recentEmployees.map((emp) => ( 
        <div className="key" key={emp.id}>
    <li> {emp.firstName} {emp.lastName} </li>
        </div>
    ))}
    </ol> 
    </div>
);
}