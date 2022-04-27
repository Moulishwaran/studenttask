import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "./UserContext";
function StudentView() {
  const navigate = useNavigate()
  let params = useParams()
  const [studentData, setStudentData] = useState([]);
  useEffect(async () => {
    let viewData = await axios.get(`https://624abad6852fe6ebf88a5ec2.mockapi.io/details/${params.id}`)
    setStudentData(viewData.data)
  })
  return (
    <div>
      <h3>Student details</h3>
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
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>{studentData.id}</td>
                <td>{studentData.name}</td>
                <td>{studentData.class}</td>
                <td>{studentData.age}</td>
                <td>{studentData.phone}</td>
                <td>{studentData.place}</td>
                <td>{studentData.rank}</td>
              </tr>
            </tbody>
          </table>
          <div className="col-lg-6 mt-3">
            <input
              type={"submit"}
              value="Close"
              onClick={() => navigate("/student", { replace: true })}
              className="btn btn-primary"
            />
          </div>
        </div>
      </div>
    </div>

  )
}
export default StudentView;