import axios from "axios";
import React, { useState } from "react";


export default function App() {
  const [data, setData] = useState([]);
  const [toggle,setToggle] = useState(true)

  const handleClick = () => {
    setToggle(false)
   setTimeout(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      const result = response.data;
      setData(result);
    })
    .catch((err) => {
      alert(err.message);
    });
    setToggle(true)
   }, 1000);
  }
 
  return (
    <div className="App">
          <button onClick={handleClick}>{
            toggle ? <b>Login </b>:<div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          }</button>
        <div>
        <ol>{data.map((ele)=>{
          return<li key={ele.name}>{ele.name}</li>
       })}</ol> 
       </div>    
    </div>
  );
}