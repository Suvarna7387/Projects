import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Studupdate() {
    const navigate = useNavigate();
    const param = useParams();
    const [data, setData] = useState([]);

    const [roll_no, setRollNo] = useState();
    const [name, setName] = useState("");
    const [math, setMathMark] = useState();
    const [science, setScience] = useState();
    const [english, seteEglish] = useState();
    const [hindi, setHindi] = useState();
    const [marathi, setMarathi] = useState();
    const [total, settotal] = useState();
    const [percentage, setPer] = useState();
    const [Grade, setGrades] = useState("");

    const min = 0;
    const max = 100;

    useEffect(() => {
        loaduser();

    }, []);
    const loaduser = async () => {
        var result = await axios.get(`http://localhost:3000/posts/${param.id}`)
        console.log(result.data);
        setData(result.data);
        setRollNo(result.data.roll_no);
        setName(result.data.name);
        setMathMark(result.data.math);
        setScience(result.data.science);
        seteEglish(result.data.english);
        setHindi(result.data.hindi);
        setMarathi(result.data.marathi);
    }

    const calTotal = () => {
        return (parseInt(math) + parseInt(science) + parseInt(english) + parseInt(hindi) + parseInt(marathi))
    }

    const calPercentage = () => {
        return (
            ((calTotal() / 500) * 100).toFixed(2)
        )
    }

    const calGrade = () => {
        if (calPercentage() > 90) {
            return ("A+")
        }
        else if (calPercentage() > 80 && calPercentage() < 90) {
            return ("A")
        }
        else if (calPercentage() > 70 && calPercentage() < 80) {
            return ("B+")
        }
        else if (calPercentage() > 60 && calPercentage() < 70) {
            return ("B")
        }
        else if (calPercentage() > 50 && calPercentage() < 60) {
            return ("C")
        }
        else if (calPercentage() <= 50) {
            return ("TC");
        }

    }

    const saveform = async (id) => {
        await axios.put(`http://localhost:3000/posts/${param.id}`, {
            roll_no: roll_no,
            name: name,
            math: math,
            science: science,
            english: english,
            hindi: hindi,
            marathi: marathi,
            total: calTotal(),
            percentage: calPercentage(),
            Grade: calGrade()
        }).then(() => {

            alert("Success To Update ");
            navigate('/studlist')
            console.log("mjj")
        })
            .catch(error => {
                alert("something wrong..")
            })
    }
    console.log(data);



    return (
        <>


            {/ <form onSubmit={updateHAndler}> /}
            <div className="container mt-5 p-5 tab" style={{ background: "#D1D17F" }}>
                <h1 className="text-center font-weight-bold">Student Update List</h1>
                <div className="row ml-md-5 p-3">

                    <div class="mb-3 input-field">
                        <label for="exampleFormControlInput1" class="form-label font-weight-bold">Roll Number <span className="text-danger">*</span></label>
                        <input type="number" class="form-control in" id="exampleFormControlInput1" style={{ background: "none", border: "2px solid black" }} placeholder="Roll Number"
                            value={roll_no}
                            onChange={(e) => setRollNo(e.target.value)}
                        />
                    </div>

                    <div class="mb-3 input-field ml-md-5">
                        <label for="exampleFormControlInput1" class="form-label font-weight-bold">Student Name <span className="text-danger">*</span></label>
                        <input type="text" class="form-control in" style={{ background: "none", border: "2px solid black" }} id="exampleFormControlInput1" placeholder="Student Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div class="mb-3 input-field ml-md-5">
                        <label for="exampleFormControlInput1" class="form-label font-weight-bold">Math <span className="text-danger">*</span></label>
                        <input type="number" class="form-control in" style={{ background: "none", border: "2px solid black" }} id="exampleFormControlInput1" placeholder="Math"
                            value={math}
                            onChange={(e) => setMathMark(Math.max(min, (Math.min(max, Number(e.target.value)))))}
                        />
                    </div>

                    <div class="mb-3 input-field ml-md-5">
                        <label for="exampleFormControlInput1" class="form-label font-weight-bold">Science <span className="text-danger">*</span></label>
                        <input type="number" class="form-control in" style={{ background: "none", border: "1px solid black" }} id="exampleFormControlInput1" placeholder="Science"
                            value={science}
                            onChange={(e) => setScience(Math.max(min, (Math.min(max, Number(e.target.value)))))}
                        />
                    </div>

                    <div class="mb-3 input-field ">
                        <label for="exampleFormControlInput1" class="form-label font-weight-bold">English <span className="text-danger">*</span></label>
                        <input type="number" class="form-control in" style={{ background: "none", border: "2px solid black" }} id="exampleFormControlInput1" placeholder="English"
                            value={english}
                            onChange={(e) => seteEglish(Math.max(min, (Math.min(max, Number(e.target.value)))))}
                        />
                    </div>

                    <div class="mb-3 input-field ml-md-5">
                        <label for="exampleFormControlInput1" class="form-label font-weight-bold">Hindi <span className="text-danger">*</span></label>
                        <input type="number" class="form-control in" style={{ background: "none", border: "2px solid black" }} id="exampleFormControlInput1" placeholder="Hindi"
                            value={hindi}
                            onChange={(e) => setHindi(Math.max(min, (Math.min(max, Number(e.target.value)))))}
                        />
                    </div>

                    <div class="mb-3 input-field ml-md-5">
                        <label for="exampleFormControlInput1" class="form-label font-weight-bold">Marathi <span className="text-danger">*</span></label>
                        <input type="number" class="form-control in" style={{ background: "none", border: "2px solid black" }} id="exampleFormControlInput1" placeholder="Marathi"
                            value={marathi}
                            onChange={(e) => setMarathi(Math.max(min, (Math.min(max, Number(e.target.value)))))}
                        />
                    </div>
                    <div className="col-md-12 text-center mt-5">
                        <button type="submit" class="btn btn-outline-primary  font-weight-bold shadow edit" style={{ borderRadius: "0px" }} onClick={() => saveform(data.id)}>Submit</button>
                        <NavLink exact to="/studlist"><button type="button" style={{ borderRadius: "0px" }} class="btn btn-outline-danger font-weight-bold shadow edit ml-md-3">Cancel</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )

}

