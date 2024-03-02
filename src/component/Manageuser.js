import { useEffect, useState } from 'react'
import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';

export default function Manageuser() {
  const[data,setData]=useState([]);
      const[plot,setPlot]=useState(false);
      const navigate=useNavigate();

      function navtopages(url) {
        navigate(url,{state:{age:"value"}});
        
      }

  useEffect(()=>{
    getuserlist()
    
   },[])

function getuserlist(){

 fetch("http://localhost:3031/users").then((result)=>{result.json().then((resp)=>{setData(resp)})});

}

 function showUserList(){
    setPlot(true);
 }



 function addUser(){
    navtopages('adduser') ;
 }
 
 function deleteUser(){

 }
     
 
 
    return (

 
    <div>
        <Navbar/>
      <h3 className='text-center'> User Management System</h3>
      <div className='d-flex justify-content-center'>
        <button className='mx-2' onClick={showUserList}> Show User List</button>
        <button className='mx-2' onClick={addUser}> Add New User</button>
        <button className='mx-2' onClick={deleteUser}> Delete User </button>
      </div>

      { plot? <div className="mx-5"> <h3> Fetched Data</h3> 
        
        <table border={1}>
            <thead>
                <tr>
                <td>ID </td>
                <td> Name </td>
                <td> Email </td>
                
                </tr>
            </thead>
        {
           
        data.map((p,id)=>
        <tbody key={id}>
        <tr>
            <td> {p.id} </td>
            <td>{p.name} </td>
            <td> {p.email} </td>
           
            
        </tr>
        </tbody>
    )
    
        
        }
        </table>
        </div>: null }

    </div>
  )
}
