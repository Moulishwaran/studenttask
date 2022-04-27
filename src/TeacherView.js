import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "./UserContext";
function TeacherView() {
  const navigate = useNavigate()
  let params = useParams()
  const [teacherData, setteacherData] = useState([]);
  useEffect(async () => {
    let viewData = await axios.get(`https://624abad6852fe6ebf88a5ec2.mockapi.io/teacher/${params.id}`)
    setteacherData(viewData.data)
  })
  return (
    <div>
      <h3>Teacher details</h3>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Position</th>
                <th>MailID</th>
                <th>Place</th>
                <th>Start date</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
              <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Position</th>
                <th>MailID</th>
                <th>Place</th>
                <th>Start date</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>{teacherData.id}</td>
                <td>{teacherData.name}</td>
                <td>{teacherData.age}</td>
                <td>{teacherData.position}</td>
                <td>{teacherData.mail}</td>
                <td>{teacherData.place}</td>
                <td>{teacherData.startdate}</td>
              </tr>
            </tbody>
          </table>
          <div className="col-lg-6 mt-3">
            <input
              type={"submit"}
              value="Close"
              onClick={() => navigate("/teacher", { replace: true })}
              className="btn btn-primary"
            />
          </div>
        </div>
      </div>
    </div>

  )
}
export default TeacherView;