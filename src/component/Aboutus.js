import React, { useEffect, useState } from "react"
import  { Link, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Navbar from "./Navbar"
import { Button } from "react-bootstrap";
//import {navtopages} from "./Navtopages"


export default function Aboutus() {
  const [searchParam,setSearchParam]=useSearchParams();
  const source=searchParam.get('source');
  const medium=searchParam.get('medium');
 const navigate=useNavigate();
  const location=useLocation();

  function navtopages(url) {
    navigate(url,{state:{age:"value"}});
    
  }
    const[data,setData]=useState([]);
    const[plot,setPlot]=useState(false);

    const i=3;

    useEffect(()=>{
         getuserlist()
         
        },[])

    function getuserlist(){

      fetch("http://localhost:3031/users").then((result)=>{result.json().then((resp)=>{setData(resp)})});

    }

    const plotdata= ()=>{

    //   const items=  data.data.map((objs)=> objs) ;
    //    console.log(items); 
       setPlot(data);
    //    <h1> data</h1>  
    //    return <ul> {data}</ul>;
    }

    function deleteuser(id){

      fetch(`http://localhost:3031/users/${id}`,{method:'DELETE'}).then((result)=>{result.json().then((resp)=>{console.log(console.log("deleted",resp))})})
      getuserlist();
    }

    return (
    <div className="text-center">
        <Navbar/>
        {console.log(location)}
      <h1> About Us Page</h1>
      <h3> source={source}</h3>
      <h3> medium={medium}</h3>
      <button onClick={()=>{setSearchParam({medium:medium,source:source, text:"buttonclicked"})}}> Change Search Param</button>
       <button onClick={()=>{navtopages('/')}} className="mx-3"> Navigate to Home Page</button>   
       <button onClick={()=>{navtopages('youtube')}}> Youtube Channel</button>
       <Link to="youtube" state={{name:"Youtube"}}> Youtube Channel </Link>
       <button onClick={()=>{navtopages('adduser')}}> Add New User </button>
       <button onClick={()=>{navtopages(-1)}}> Go Back</button>
       <button onClick={plotdata}> Show User List </button>
       
        {/* <p> {items[0].email}</p> */}
        {/* { plot? <div className="mx-5"> <h3> Fetched Data</h3> 
        
        <table border={1}>
            <thead>
                <tr>
                <td>ID </td>
                <td> Name </td>
                <td> Email </td>
                
                </tr>
            </thead>
        {
           
        plot.map((p,id)=>
        <tbody key={id}>
        <tr>
            <td> {p.id} </td>
            <td>{p.name} </td>
            <td> {p.email} </td>
           
            <td> <button onClick={()=>{deleteuser(p.id)}}> Delete</button>   </td>
        </tr>
        </tbody>
    )
    
        
        }
        </table>
        </div>: null } */}
       <Outlet/>

    </div>
  )
}
