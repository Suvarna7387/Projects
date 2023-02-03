import React,{useEffect} from "react";

import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Deletelist(){
      const redi=useNavigate();
      const params = useParams();
      useEffect(()=>{
            loadUser();
      },[])
      const loadUser=async ()=>{
            await axios.delete(`http://localhost:3000/posts/${params.id}`)
            .then(Response=>{
                  alert("delete");
                  redi('/studlist')
                  // Navigate('/studlist')
            })
            .catch(error=>{
                  console.log('error show');
            })
      }

}