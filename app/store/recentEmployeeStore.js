import {create} from "zustand";
import {persist} from "zustand/middleware";

const useRecentEmployeeStore=create(
persist(
    (set)=>({
    recentEmployees:[],

    addRecentEmployee: (employee)=>
        set((state)=>{
            const filtered =state.recentEmployees.filter(
                (emp)=>emp.id !== employee.id
            );
            return {
                recentEmployees:[
                    employee,
                    ...filtered,
                ].slice(0,5),
            };
        }),
    }),
    {
        name:"recent-employees",
    }
)
);
export default useRecentEmployeeStore;