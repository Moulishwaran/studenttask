import './App.css';
import Sidebar from './SideBar.js';
import Topbar from './Topbar.js';
import Dashboard from './Dashboard';
import Student from './Student';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentView from './StudentView';
import StudentEdit from './StudentEdit';
import { UserProvider } from './UserContext';
import { useState } from 'react';
import CreateStudent from './CreateStudent';
import Teacher from './Teacher';
import CreateTeacher from './CreateTeacher';
import TeacherView from './TeacherView';
import TeacherEdit from './TeacherEdit';

function App() {
  const [users,setUsers]=useState([]);
  return (
    <BrowserRouter>
      <div id="wrapper">
        <UserProvider value={{users,setUsers}}>
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/student" element={<Student />} />
                <Route path="/student-create" element={<CreateStudent/>}/>
                <Route path="/student-view/:id" element={<StudentView/>}/>
                <Route path="/student-edit/:id" element={<StudentEdit/>}/>
                <Route path="/teacher" element={<Teacher />} />
                <Route path="/teacher-create" element={<CreateTeacher/>}/>
                <Route path="/teacher-view/:id" element={<TeacherView/>}/>
                <Route path="/teacher-edit/:id" element={<TeacherEdit/>}/>
              </Routes>
            </div>
          </div>
        </div>
        </UserProvider>
      </div>
    </BrowserRouter>

  );
}

export default App;
