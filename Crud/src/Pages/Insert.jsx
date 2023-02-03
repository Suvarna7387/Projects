

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
// import './index.css';

import { useForm } from "react-hook-form";
const Insert = () => {
    const navigate = useNavigate();

    const [roll_no, setRollNo] = useState();
    const [name, setName] = useState("");
    const [math, setMathMark] = useState();
    const [science, setScience] = useState();
    const [english, seteEglish] = useState();
    const [hindi, setHindi] = useState();
    const [marathi, setMarathi] = useState();
    // const [total, settotal] = useState();
    // const [percentage, setPer] = useState();
    // const [Grade, setGrades] = useState("");

    const min = 0;
    const max = 100;


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

    const submitHandler = (e) => {
        const studentObject = {
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
        };


        axios.post("http://localhost:3000/posts", studentObject)
            .then((res) => {
                alert("Insrt Data")
                navigate('/studlist')
            })
            .catch(() => {
                alert("Data Cannot be Saved !")
            })



        navigate("/")

    }


    const { register, formState: { errors }, handleSubmit } = useForm();


    return (
        <>
            <form onSubmit={handleSubmit(submitHandler)}>

                <div className="container    tab mt-5 p-5" style={{ backgroundColor: "hsl(57°, 34%, 56%)" }}>
                    <h1 className="text-center    font-weight-bold mb-4  ">Add New Student Record</h1>
                    <div className="row">


                        <div class="mb-3 ml-md-5 input-field">
                            <label for="exampleFormControlInput1" class="form-label "><b>Roll no <span className="text-danger">*</span> </b></label>
                            <input
                                type="number"
                                className="form-control in"
                                style={{ borderRadius: "none", background: "none", border: "2px solid black" }}
                                id="exampleFormControlInput1"
                                placeholder="Roll No"
                                value={roll_no}
                                name="roll_no"
                                {...register("roll_no", { required: true })}
                                aria-invalid={errors.roll_no ? "true" : "false"}
                                onChange={(e) => setRollNo(e.target.value)}
                            />
                            {errors.roll_no?.type === 'required' && roll_no == null ? (<><p role="" className="text-danger font-weight-bold">This Field is required *</p></>) : null}

                        </div>

                        <div class="mb-3 ml-md-5 input-field">
                            <label for="exampleFormControlInput1" class="form-label  "><b>Student Name <span className="text-danger">*</span></b></label>
                            <input
                                type="text"
                                class="form-control in"
                                style={{ background: "none", border: "2px solid black" }}
                                id="exampleFormControlInput1"
                                placeholder="Student Name"
                                name="name"
                                value={name}
                                {...register("name", { required: true })}
                                aria-invalid={errors.name ? "true" : "false"}
                                onChange={(e) => setName(e.target.value)}



                            />
                            {errors.name?.type === 'required' && name == "" ? (<><p role="alert" className="text-danger font-weight-bold">First name is required *</p></>) : null}


                        </div>

                        <div class="mb-3 ml-md-5 input-field">
                            <label for="exampleFormControlInput1" class="form-label "><b>Math <span className="text-danger">*</span></b></label>
                            <input
                                type="number"
                                class="form-control in"
                                style={{ background: "none", border: "2px solid black" }}
                                id="exampleFormControlInput1"
                                placeholder="Math"
                                value={math}
                                name="math"
                                {...register("math", { required: true })}
                                aria-invalid={errors.math ? "true" : "false"}
                                onChange={(e) => setMathMark(Math.max(min, (Math.min(max, Number(e.target.value)))))}
                            />
                            {errors.math?.type === 'required' && math == null ? (<><p role="alert" className="text-danger font-weight-bold">This Field is required *</p></>) : null}

                        </div>

                        <div class="mb-3 ml-md-5 input-field">
                            <label for="exampleFormControlInput1" class="form-label "><b>Science <span className="text-danger">*</span></b></label>
                            <input
                                type="number"
                                class="form-control in"
                                style={{ background: "none", border: "2px solid black" }}
                                id="exampleFormControlInput1"
                                placeholder="Science"
                                value={science}
                                name="science"
                                {...register("science", { required: true })}
                                aria-invalid={errors.science ? "true" : "false"}
                                onChange={(e) => setScience(Math.max(min, (Math.min(max, Number(e.target.value)))))}
                            />
                            {errors.science?.type === 'required' && science == null ? (<><p role="alert" className="text-danger font-weight-bold">This Field is required *</p></>) : null}

                        </div>

                        <div class="mb-3 ml-md-5 input-field">
                            <label for="exampleFormControlInput1" class="form-label"><b>English <span className="text-danger">*</span></b></label>
                            <input
                                type="number"
                                class="form-control in"
                                style={{ background: "none", border: "2px solid black" }}
                                id="exampleFormControlInput1"
                                placeholder="English"
                                value={english}
                                name="english"
                                {...register("english", { required: true })}
                                aria-invalid={errors.english ? "true" : "false"}
                                onChange={(e) => seteEglish(Math.max(min, (Math.min(max, Number(e.target.value)))))}
                            />

                            {errors.english?.type === 'required' && english == null ? (<><p role="alert" className="text-danger font-weight-bold">This Field is required *</p></>) : null}

                        </div>

                        <div class="mb-3 ml-md-5 input-field">
                            <label for="exampleFormControlInput1" class="form-label "><b>Hindi <span className="text-danger">*</span></b></label>
                            <input
                                type="number"
                                class="form-control in"
                                style={{ background: "none", border: "2px solid black" }}
                                id="exampleFormControlInput1"
                                placeholder="Hindi"
                                value={hindi}
                                name="hindi"
                                {...register("hindi", { required: true })}
                                aria-invalid={errors.hindi ? "true" : "false"}
                                onChange={(e) => setHindi(Math.max(min, (Math.min(max, Number(e.target.value)))))}
                            />
                            {errors.hindi?.type === 'required' && hindi == null ? (<><p role="alert" className="text-danger font-weight-bold">This Field is required *</p></>) : null}

                        </div>

                        <div class="mb-3 ml-md-5 input-field">
                            <label for="exampleFormControlInput1" class="form-label "><b>Marathi <span className="text-danger">*</span></b></label>
                            <input
                                type="number"
                                class="form-control in"
                                style={{ background: "none", border: "2px solid black" }}
                                id="exampleFormControlInput1"
                                placeholder="Marathi"
                                value={marathi}
                                name="marathi"
                                {...register("marathi", { required: true })}
                                aria-invalid={errors.marathi ? "true" : "false"}
                                onChange={(e) => setMarathi(Math.max(min, (Math.min(max, Number(e.target.value)))))}
                            />
                            {errors.marathi?.type === 'required' && marathi == null ? (<><p role="alert" className="text-danger font-weight-bold">This Field is required *</p></>) : null}

                        </div>

                        <div className="col-md-12 text-center mt-5">
                            <button type="submit" class="btn btn-primary ml-0 shadow font-weight-bold " style={{ borderRadius: "0px" }}>Submit</button>
                            <button type="button" class="btn btn-danger  ml-md-3 shadow font-weight-bold " style={{ borderRadius: "0px" }} onClick={() => navigate("/")}>Cancel</button>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}
export default Insert;

