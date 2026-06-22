"use client";

import {signIn,useSession}from "next-auth/react"; 
import { useEffect,useState } from "react"; 
import { useRouter } from "next/navigation"; 


export default function Login(){ 
const {data: session, status}= useSession();
  const router=useRouter(); 

  useEffect(()=>{
    if(session){
      router.replace("/employee");
    }
  },[session, router]);

  const[email,setEmail]=useState(""); 
  const[password,setPassword]=useState(""); 
  const handleEmailLogin = (e) => { 
    
    e.preventDefault();
    router.push("/employee") ;
    }; 

    return( 
    <div className="log"> 
    <h1>Login Page</h1> 
    <div className="login-box"> 
      <form onSubmit={handleEmailLogin}> 
        <input 
        type="text" 
        placeholder="Enter Email" 
        value={email} 
        onChange={(e)=>setEmail(
          e.target.value)}required 
          /> 

          <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e)=>setPassword(
            e.target.value)}required 
            /><br/> 


            <button id="but1" 
            type="submit"> 
            Login 
            </button> 

            </form> 
            <p>Or Continue With</p> 
            <div className="other">

        <button type="button" 
        id="google" 
        onClick={() => {signIn("google",{
          prompt:"login",
        })
  }
}
        > Google 
        </button> 
                
        <button 
        id="apple" 
        onClick={()=>signIn("apple")}> Apple </button> 
        </div> 
        </div> 
  </div> 
        );
  }






