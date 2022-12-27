import {Route, Routes} from "react-router-dom";
import Account from "./components/Account";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Private from "./Private";

const App =()=>{
  return(
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route element={<Private/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/account" element={<Account/>}/>
      </Route>
    </Routes>
  )
}
export  default App;