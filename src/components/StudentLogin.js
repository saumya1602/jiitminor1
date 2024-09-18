import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './StudentLogin.css';

// Validation schema using Yup
const validationSchema = Yup.object({
  collegeName: Yup.string().required('College Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

const StudentLogin = () => {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log('Form Data', values);
      setSubmitting(false);
      resetForm();
      alert('Logged in successfully!');
    }, 1000);
  };

  return (
    <motion.div 
      className="login-form"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Student Login</h2>
      <Formik
        initialValues={{ collegeName: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
           
           <div className="form-group">
  <label htmlFor="username">Username</label>
  <Field name="username" type="text" className="input-field" />
  <ErrorMessage name="username" component="div" className="error-message" />
</div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="input-field" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Logging In...' : 'Login'}
            </button>
          
            <div className="signup-prompt">
              <p>Don't have an account?</p>
              <Link to="/student-signup" className="signup-link">
                <a href="please\src\components\StudentSignup.js">Sign Up</a>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default StudentLogin;
