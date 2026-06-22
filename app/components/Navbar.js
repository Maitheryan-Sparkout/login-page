"use client";
import { signOut } from "next-auth/react";
export default function Navbar(){
    return(
        <nav className="navbar">
            <h1>Employee Directory</h1>

            <button className="logout-btn" onClick={()=>signOut({callbackUrl:"/",  
            })
        }
        > Logout</button>

        </nav>

    );
}