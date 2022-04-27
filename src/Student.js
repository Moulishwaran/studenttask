import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import swal from 'sweetalert'
function Student() {
  const [studentData, setStudent] = useState([])
  useEffect(async () => {
    let student = await axios.get("https://624abad6852fe6ebf88a5ec2.mockapi.io/details")
    setStudent(student.data)
  }, []);
  const deleteStudent = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Student Details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`https://624abad6852fe6ebf88a5ec2.mockapi.io/details/${id}`)
            .then(() => {
              getData();
            })
          swal("Sucessfully deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
  };

  const getData=()=>{
    axios
      .get(`https://624abad6852fe6ebf88a5ec2.mockapi.io/details`)
      .then((getData) => {
        setStudent(getData.data);
      });
  };
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Student list</h1>
        <Link to={"/student-create"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          Create New <i class="fa fa-plus" aria-hidden="true"></i></Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Data</h6>
        </div>{
          console.log()
        }
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Place</th>
                  <th>Rank</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Place</th>
                  <th>Rank</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {studentData.map((user) => {
                  return <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.class}</td>
                    <td>{user.age}</td>
                    <td>{user.phone}</td>
                    <td>{user.place}</td>
                    <td>{user.rank}</td>
                    <td><Link to={`/student-view/${user.id}`} class="btn btn-outline-warning btn-sm" data-toggle="tooltip" data-placement="bottom" title="view"><i class="fa fa-eye" aria-hidden="true"></i></Link>
                      <Link to={`/student-edit/${user.id}`} class="btn btn-outline-primary btn-sm" data-toggle="tooltip" data-placement="bottom" title="edit"><i class="fa as fa-edit"></i></Link>
                      <button onClick={() => deleteStudent(user.id)} class="btn btn-outline-danger btn-sm" data-toggle="tooltip" data-placement="bottom" title="delete"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                  </tr>
                })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  );
}

export default Student;
