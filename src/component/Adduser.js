import React, { useState } from 'react'

export default function Adduser() {
 const [name,setName]=useState("");
const [email,setEmail]=useState("");
 
   const saveuser= function saveuser()
   {
    console.log(name,email);
    let saveddata={name,email}
    fetch("http://localhost:3031/users",{
        method:'POST',
        headers:{
                    'Accept':'application.json',
                    'Content-type':'application.json'
                },
        body: JSON.stringify(saveddata)

    }).then((result)=>{ result.json().then((resp)=>{})})
   }

    return (
    <div>
        <h1> Enter details below to add new user</h1>
        <div className='d-flex mx-5 justify-content-center'> 
            <h5> Enter Name</h5>
            <input type='text' onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div className='d-flex mx-5 justify-content-center'> 
            <h5> Enter Email</h5>
            <input type='text' onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
      <button type='button' onClick={saveuser}> Submit </button>
    </div>
  )
}
