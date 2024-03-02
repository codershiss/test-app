import react, { useState, useMemo, useRef } from "react";
import "./App.css";
import { Button, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  let inputRef = useRef(null);
  // useEffect(() => {
  //   console.log("useEff_data",data);
  // },[data]);

  // useEffect(() => {
  //   console.log("useEff_count",count);
  // },[count]);

  // const students=[{key:1,name:'aman',phone:11},{key:2,name:'param',phone:22},{key:3, name:'amit',phone:3},{key:4,name:'vinod',phone:4}];
  function increaseCount() {
    console.log("inside increaseCount function");
    // inputRef.current.value=100;
    // inputRef.current.focus();
    inputRef.current.style.color = "red";
    count < 10 ? setCount(count + 1) : setCount(count);
  }

  function increaseData() {
    console.log("inside increaseData function");
    data < 110 ? setData(data + 1) : setData(data);
  }

  const multiplyC = useMemo(
    function multiplyCount() {
      console.log("inside multiplyCount");

      return count * 2;
    },
    [data]
  );
  const location=useLocation();

  return (
    <div>
      <Navbar />
      {console.log(location)}
      <div className="mx-3 my-3">
      {console.log("start rendering")}
      
      <input type="text" />
      Count= {count}
      <h2 ref={inputRef}>Multiply= {multiplyC} </h2>
      {console.log("render after multiplycout called")}
      <button onClick={increaseCount}> Increase count </button>
      <button onClick={increaseData}> Increase data </button>
      {data}
      <br />
      <br />
      <Button variant="warning"> Click </Button>
      </div>
    </div>
  );
}

{
  /* <Table variant="dark" className="table table-bordered table-hover table-sm" border={1}>
        <caption> List of Users</caption>
     <thead className="table thead-dark"> 
      <tr>
        <th>Key</th>
        <th>Name</th>
        <th>Phone</th>
    </tr>
    </thead>
           {
      students.map((d,key) => (
            
      <tbody key={key}>
      <tr >

        <td className="table-primary"> {d.key} </td>
        <td className="table-secondary"> {d.name} </td>
        <td className="table-info"> {d.phone} </td>
      
      </tr>
      </tbody>
      ) )
      }
     </Table> */
}
{
  /* <p> {students[2].phone}</p> */
}

// function App() {
// const[data,setData]=useState("");
// const[print,setPrint]=useState("HELLO");
// const[show,hide]=useState(true);
// const[count,setCount]=useState(0);

//  function onCall(e){

//   setData( e.target.value.toUpperCase());

//  }

// const [name, setname] = useState("");
// const [course, setcourse] = useState("React Js");
// const [tnc, settnc] = useState(false);
// const [err, seterr] = useState("Username must be 5 Chracter Long");

// function getFormData(formData){
//   console.log(name,course,tnc);
//   if(name.length<5)
//   {
//     seterr("length is below 5 character")
//   }
//   else
//   {
//     seterr("")

//   }
//   formData.preventDefault()
// }
//useEffect(()=>{console.log("in useEffect")})

// class App extends Component {
//   constructor()
//   {
//     super();
//     console.log("constructer");
//     this.state = {count : 0 ,nam:"A"}
//   }

//   componentDidMount(){

//     console.log("cDM")
//   }

//   componentDidUpdate(preProps,preS,snapShot){

//     console.log("cDU",preS.count,this.state.count)

//   }

//   shouldComponentUpdate(){

//     console.log("sCU",this.state.count)
//     return false;
//   }

//   render() {
//     return (

//       <div>
//        {this.state.count}
//         {console.log("render")}
//         <button onClick={()=>{this.setState({count:this.state.count+1})}}> Increase </button>
//       </div>

//     );
//   }
// }

// return (
//   <>

//   <div className='App'>
//       Hello-render
//       {console.log("inrender")}
//   </div>
//   </>

// <div className='App'>
//             <form onSubmit={getFormData}>
//                 <input onChange={(e)=>{
//                   setname(e.target.value);
//                   {
//                 e.target.value.length<5? seterr("Username must be 5 Chracter Long"): seterr("")}
//                    } }name="query" />

//                 <select onChange={(e)=>{setcourse(e.target.value)}} name="select" id="">
//                     <option value="React Js">React Js</option>
//                     <option value="Node Js">Node Js</option>

//                 </select>
//                 <input type="checkbox" onChange={(e)=>{settnc(e.target.checked)}}/>

//                 <button type="submit">Submit  </button>

//               </form>
//               <p> {err} </p>
//   </div>

// <div className="App">
// <p> Count ={count} </p>

//   <button disabled={count===10? true:false } onClick={increaseCount}> Increse Count</button>
//   <button disabled={count===0? true:false } onClick={decreaseCount}> Decrese Count</button>
// { show && print ? <h1> {print}</h1> : show && !print ? <div> <h1>&nbsp; </h1></div>: <h1> *********** </h1>}
//   <input placeholder="enter name to print" value={data} onChange={onCall} type="text"/>
//   <button   onClick={()=>{hide(true); setPrint(data);console.log(data) }}> Print</button>
//   <button onClick={()=>{hide(false)}}> Hide</button>
// </div>
//   );
// }

export default App;
