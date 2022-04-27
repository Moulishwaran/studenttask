import axios from "axios";
import { useFormik } from 'formik'
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function StudentEdit(){
    let params=useParams();
    console.log(params.id);
    const navigate = useNavigate();
    useEffect(async()=>{
        try {
            let editData= await axios.get(`https://624abad6852fe6ebf88a5ec2.mockapi.io/details/${params.id}`)
            formik.setValues(editData.data)
        } 
         catch (error) {
            console.log(error)
        }
        
    },[])
    let formik = useFormik({
        initialValues: {
            id: 0,
            name: "",
            class: "",
            age: 0,
            DOB: "",
            place: "",
            rank: 0,
        },
        validate: (values) => {
            const errors = {}
            if (!values.name) {
                errors.name = "Requried";
            } else if (values.name.length > 15) {
                errors.name = "must be 15 characters or less"
            }
            if(!values.id){
                errors.id="Should not  be blank";
            }
            if(!values.class){
                errors.class="Should not  be blank";
            }
            if(!values.phone){
                errors.phone="Should not  be blank";
            }
            if(!values.place){
                errors.place="Should not  be blank";
            }
            if(!values.rank){
                errors.rank="Should not  be blank";
            }
            if (!values.age) {
                errors.age = "Requried";
            } else if (values.age < 18) {
                errors.age = "must be above 18"
            }
            return errors;
        },
        onSubmit: async(values) => {
            await axios.put(`https://624abad6852fe6ebf88a5ec2.mockapi.io/details/${params.id}`,values)
            navigate("/student", { replace: true });
        }
    })
    return(
        <div className="container">
            <div>
                <h1>Edit-Student Details</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>ID</label>
                        <input
                            type={'number'}
                            name="id"
                            onChange={formik.handleChange}
                            value={formik.values.id}
                            className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Name<span style={{ color: "red" }}>*{formik.errors.name}</span></label>
                        <input
                            type={'text'}
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Class<span style={{ color: "red" }}>*{formik.errors.class}</span></label>
                        <input
                            type={'text'}
                            name="class"
                            onChange={formik.handleChange}
                            value={formik.values.class}
                            className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Age<span style={{ color: "red" }}>*{formik.errors.age}</span></label>
                        <input
                            type={'number'}
                            name="age"
                            onChange={formik.handleChange}
                            value={formik.values.age}
                            className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Phone<span style={{ color: "red" }}>*{formik.errors.phone}</span></label>
                        <input
                            type={'number'}
                            name="phone"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Place<span style={{ color: "red" }}>*{formik.errors.place}</span></label>
                        <input
                            type={'text'}
                            name="place"
                            onChange={formik.handleChange}
                            value={formik.values.place}
                            className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Rank<span style={{ color: "red" }}>*{formik.errors.rank}</span></label>
                        <input type={'number'}
                            name="rank"
                            onChange={formik.handleChange}
                            value={formik.values.rank}
                            className="form-control" />
                    </div>

                </div>
                <div className="col-lg-6 mt-3">
                    <input disabled={Object.keys(formik.errors).length !== 0} type={'submit'}
                        className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
export default StudentEdit;