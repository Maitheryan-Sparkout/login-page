"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar(){
    const[id,setId]=useState("");
    const router =useRouter();
    const handleSearch =()=>{
        if(id){
            router.push(`/employee/${id}`);
        }

    };
    return(
        <div>
        <input className="search"
        type="text"
        placeholder="Search Employee By ID.."
        value={id}
        onChange={(e)=>setId(e.target.value)}
        />

        <button className="search-btn" onClick={handleSearch}>
            
            Search
        </button>
        </div>
    );
}