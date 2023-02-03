import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import './index.css';
// import _ from "lodash";
// import Pagination from './Pagination.jsx';
export default function Studlist() {
      const [user, setUser] = useState([]);
      const [search, setSearch] = useState();
      const [perpage, setPerpage] = useState(4)
      const [pagination, setPagination] = useState({
            start: 0,
            end: perpage,
      })
      const onPagination = (start, end) => {
            // console.log(start,end)?
            setPagination({ start: start, end: end })

      }
      useEffect(() => {
            loaduser();

      }, [])
      const loaduser = async () => {
            // e.prevenDefault();
            setSearch(true);

            const result = await axios.get('http://localhost:3000/posts');
            setSearch(false);
            console.log(result.data)
            setUser(result.data);
      }
      console.log(user)
      const filteredProducts = user.filter((row) => {
            // console.log()
            if (row.name.toString().toLowerCase().includes(search)) {
                  console.log(row)
                  return (row)
            }
      });
      console.log(filteredProducts)
      console.log(user);
      return (
            <div>

                  <div className="container">
                        <div className="row justify-content-center">
                              <div className="col-md-4 text-center mt-2">
                                    <input className='form-control mt-3 in' placeholder='Seach Name' style={{ background: "none", border: "2px solid white", borderRadius: "20px" }} onChange={(e) => { setSearch(e.target.value.toLowerCase()) }} />
                                    <span><i class="fa-solid fa-magnifying-glass float-right mr-3" style={{ marginTop: "-25px" }}></i></span>
                              </div>
                        </div>
                  </div>

                  <div className="container mt-5">
                        <div className="row">

                              <div className="col-md-12">
                                    <h1 className="text-center font-weight-bold  m  text-danger">Student Mark List</h1>
                              </div>
                              <div className="col-sm-12 ">

                                    <table className="table tab p-0 table-hover table-bordered table-striped">
                                          <thead className="" >
                                          </thead>
                                          <tbody>
                                                {user.slice(pagination.start, pagination.end).map((val) => {
                                                      return (
                                                            <tr className={val.percentage < 35 ? "bg-danger" : "bg-success"}>
                                                                  <td className="text-white font-weight-bold">{val.id}</td>
                                                                  <td className="text-white font-weight-bold">{val.roll_no}</td>
                                                                  <td className="text-white font-weight-bold">{val.name}</td>
                                                                  <td className="text-white font-weight-bold">{val.math}</td>
                                                                  <td className="text-white font-weight-bold">{val.science}</td>
                                                                  <td className="text-white font-weight-bold">{val.english}</td>
                                                                  <td className="text-white font-weight-bold">{val.hindi}</td>
                                                                  <td className="text-white font-weight-bold">{val.marathi}</td>
                                                                  <td className="text-white font-weight-bold">{val.total}</td>
                                                                  <td className="text-white font-weight-bold">{val.percentage}</td>
                                                                  <td className="text-white font-weight-bold">{val.Grade}</td>
                                                                  <td className="text-white font-weight-bold">
                                                                        <NavLink className="btn" to={`/studupdate/${val.id}`}><i class="fa-solid fa-pen-to-square text-white p-2" style={{ border: "1px solid white" }}></i></NavLink>
                                                                        <NavLink className='btn  ml-md-2' to={`/deletelist/${val.id}`}><i className='fa fa-trash text-white p-2' style={{ border: "1px solid white" }}></i></NavLink>
                                                                  </td>
                                                            </tr>
                                                      )
                                                })}
                                          </tbody>

                                    </table>
                                    {/* <Pagination perpage={perpage} onPagination={onPagination} total={user.length}></Pagination> */}
                              </div>
                        </div>
                  </div>
            </div>
      )
}