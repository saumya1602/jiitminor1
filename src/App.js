import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import StudentSignup from './components/StudentSignup'; 
import StudentLogin from './components/StudentLogin';
import ProfessorSignupLogin from './components/ProfessorSignupLogin';
import CollegeRegister from './components/CollegeRegister';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student-signup" element={<StudentSignup />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/professor-signup-login" element={<ProfessorSignupLogin />} />
          <Route path="/college-register" element={<CollegeRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
