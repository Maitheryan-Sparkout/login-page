import Link from "next/link";

export default function EmployeeCard({employee}){
    return(
        <div className="card">
            <img
            src={employee.image}
            alt={employee.firstName}
            width="100" />

            <h3>
                {employee.firstName} {employee.lastName}
            </h3>
            <p>{employee.email}</p>
            <p>{employee.company.department}</p>

            <Link className="link" href={`/employee/${employee.id}`}>
            View Details
            </Link>
        </div>
    );
}