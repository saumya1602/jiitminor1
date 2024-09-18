import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
     {/* <section className="header">
      <img src="/logo-with-text.png" alt="Code Catalyst Logo" className="logo"></img>
     </section> */}

      
      <section className="welcome-section">
        <h1><img src="/logo-with-text.png" alt="Code Catalyst Logo" className="logo"></img>   Welcome to Code Catalyst </h1>
        
        <p>Ignite your coding journey with our revolutionary platform.</p>
         {/* Header Section */}
      <section className="header">
        {/* <img src="/logo-with-text.png" alt="Code Catalyst Logo" className="logo" /> */}
        <nav className="nav-links">
          <Link to="/student-login" className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
              <path d="M12 12a5 5 0 110-10 5 5 0 010 10zm7 2h-2v1a5 5 0 01-10 0v-1H5a5 5 0 00-5 5v1h24v-1a5 5 0 00-5-5z"/>
            </svg>
            Student
          </Link>
          <Link to="/professor-signup-login" className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
              <path d="M12 12a5 5 0 110-10 5 5 0 010 10zm7 2h-2v1a5 5 0 01-10 0v-1H5a5 5 0 00-5 5v1h24v-1a5 5 0 00-5-5z"/>
            </svg>
            Professor
          </Link>
          <Link to="/college-register" className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
              <path d="M12 12a5 5 0 110-10 5 5 0 010 10zm7 2h-2v1a5 5 0 01-10 0v-1H5a5 5 0 00-5 5v1h24v-1a5 5 0 00-5-5z"/>
            </svg>
            College
          </Link>
        </nav>
      </section>
        
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-box">
            <h3>Streamlined Assignment Creation</h3>
            <p>Create coding assignments with detailed problem descriptions and customizable test cases.</p>
          </div>
          <div className="feature-box">
            <h3>Automated Grading</h3>
            <p>Automatically grade assignments with predefined test cases, providing immediate feedback.</p>
          </div>
          <div className="feature-box">
            <h3>Real-Time Feedback</h3>
            <p>Students receive instant feedback on code submissions with error messages and suggestions for improvement.</p>
          </div>
          <div className="feature-box">
            <h3>Standardized Coding Environment</h3>
            <p>Ensure fairness and consistency by providing a standardized environment for all students.</p>
          </div>
          <div className="feature-box">
            <h3>Collaboration Tools</h3>
            <p>Controlled collaboration between students, fostering a supportive and fair learning environment.</p>
          </div>
          <div className="feature-box">
            <h3>Secure Submission Process</h3>
            <p>All submissions are handled securely, ensuring data integrity and privacy.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Code Catalyst. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
