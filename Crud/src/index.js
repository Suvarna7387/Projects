import React from "react";
import App from "./App";
import  ReactDOM  from "react-dom";
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// // import Nav from "./Nav.jsx";
// import Insert from '../src/Pages/Insert';
// import Studlist from '../src/Pages/Studlist';
// import Deletelist from '../src/Pages/Deletelist';
// import Studupdate from '../src/Pages/Studupdate';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
   <>
   <App/>
  {/* <Router>
  {/* <Nav/> */}
  {/* <Routes>
    <Route path='/studlist' element={<Studlist/>}></Route>
    <Route path='/' element={<Insert/>}></Route>
    <Route path="/deletelist/:id" element={<Deletelist/>}></Route>
    <Route path="/studupdate/:id" element={<Studupdate/>}></Route>
  </Routes>
 </Router>  */} 
  </>,document.getElementById('root')
);