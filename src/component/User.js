import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

export default function User() {
    const params=useParams();
    const {name}=params;

  return (
    <>
    <Navbar/>
    <div className='text-center'>
      <h1>This is a {name}'s page</h1>
    </div>
    </>  
  )
}
