import { useFormik } from 'formik'
import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import UserContext from './UserContext';
import axios from 'axios';

function CreateTeacher() {
    const navigate = useNavigate();
    let userContext = useContext(UserContext)
    let formik = useFormik({
        initialValues: {
            id: 0,
            name: "",
            age:0,
            poistion: "",
            mail: "",
            place: "",
            startdate: "",
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
            if(!values.position){
                errors.position="Should not  be blank";
            }
            if(!values.mail){
                errors.mail="Should not  be blank";
            }
            if(!values.place){
                errors.place="Should not  be blank";
            }
            if(!values.startdate){
                errors.startdate="Should not  be blank";
            }
            if (!values.age) {
                errors.age = "Requried";
            } else if (values.age < 18) {
                errors.age = "must be above 18"
            }
            return errors;
        },
        onSubmit: values => {
            
            try {
                axios.post("https://624abad6852fe6ebf88a5ec2.mockapi.io/teacher",values)
                userContext.setUsers([...userContext.users, values])
            } catch (error) {
                console.log(error)
            }
            navigate("/teacher", { replace: true });
        }
    })
  return (
    <div className="container">
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
                <label>Position<span style={{ color: "red" }}>*{formik.errors.class}</span></label>
                <input
                    type={'text'}
                    name="position"
                    onChange={formik.handleChange}
                    value={formik.values.position}
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
                <label>MailID<span style={{ color: "red" }}>*{formik.errors.phone}</span></label>
                <input
                    type={'email'}
                    name="mail"
                    onChange={formik.handleChange}
                    value={formik.values.mail}
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
                <label>Start Date<span style={{ color: "red" }}>*{formik.errors.rank}</span></label>
                <input type={'number'}
                    name="startdate"
                    onChange={formik.handleChange}
                    value={formik.values.startdate}
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

export default CreateTeacher