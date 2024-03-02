import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
export default function Login() {
            const login=()=>{

                localStorage.setItem('login',true)
                navigate('/')
            }

            const navigate=useNavigate();
            useEffect(()=>{
                let login=localStorage.getItem('login');
                if (login)
                navigate('/')
            })
 
    return (
    <div>
           <Navbar/>
        <div className='text-center'>    
        <h1 > Login Page</h1>
            <div className='d-flex justify-content-center'>
                <h4> Enter Your Name </h4>
                <input type='text'/>
            </div>
            <div className='d-flex justify-content-center'>
                        <h4> Enter Your Password</h4>
                <input type="text" />

            </div>

            <button className='my-3' onClick={login}> Login </button>
    </div>
    </div>
  )
}
