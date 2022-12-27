import React, { useRef } from "react";
import Home from "./Home";
import './App.css';
function App() {
  const email = useRef()
  const password = useRef()
  const getEmail = localStorage.getItem("emailData")
  const getPassword = localStorage.getItem("passwordData")
  const handleSubmit = () => {
    if (email.current.value == "suvarnakeskar7387@gmail.com" && password.current.value == "Suvarna@7387") {
      localStorage.setItem("emailData", "suvarnakeskar7387@gmail.com")
      localStorage.setItem("passwordData", "Suvarna@7387")
    }
  }

  return (
    <div>
      {
        getEmail && getPassword ?
          <Home /> :
          <div className="container center mt-5">
          <form onSubmit={handleSubmit} >
            <div className='form-group m-2 '>
              <input type="text" ref={email} placeholder='Email-id'  />
            </div>
            <div className='form-group m-2'>
              <input type="password" ref={password}  placeholder='Password'/>
            </div>
            <div>
            <button className='form-group m-2' type="submit">Login</button>
            </div>
          </form>
          </div>
      }

    </div>
  );
}
export default App;