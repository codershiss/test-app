import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Protected(props) {
    const {Cmp}=props;
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if (!login)
        navigate('/login')
    })
  return (
    <div>
        
      <Cmp/>
    </div>
  )
}
