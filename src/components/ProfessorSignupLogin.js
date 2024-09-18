import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import './ProfessorSignupLogin.css';

const ProfessorSignupLogin = () => {
  const [isSignup, setIsSignup] = React.useState(true);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  // Validation schema for signup and login
  const validationSchema = isSignup
    ? Yup.object({
        name: Yup.string().required('Name is required'),
        collegeName: Yup.string().required('College Name is required'),
        username: Yup.string().required('Username is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters long')
          .required('Password is required'),
      })
    : Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters long')
          .required('Password is required'),
      });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log('Form Data', values);
      setSubmitting(false);
      resetForm();
      alert(isSignup ? 'Professor account created successfully!' : 'Logged in successfully!');
    }, 1000);
  };

  return (
    <motion.div 
      className="professor-form-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{isSignup ? 'Professor Signup' : 'Professor Login'}</h2>
      <Formik
        initialValues={isSignup 
          ? { name: '', collegeName: '', username: '', password: '' } 
          : { username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {isSignup && (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Field name="name" type="text" className="input-field" />
                  <ErrorMessage name="name" component="div" className="error-message" />
                </div>

                <div className="form-group">
                  <label htmlFor="collegeName">College Name</label>
                  <Field name="collegeName" type="text" className="input-field" />
                  <ErrorMessage name="collegeName" component="div" className="error-message" />
                </div>
              </>
            )}

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
              {isSignup ? (isSubmitting ? 'Creating Account...' : 'Sign Up') : (isSubmitting ? 'Logging In...' : 'Login')}
            </button>
          </Form>
        )}
      </Formik>
      <p onClick={toggleForm} className="toggle-link">
        {isSignup
          ? "Already have an account? Login"
          : "Don't have an account? Signup"}
      </p>
    </motion.div>
  );
};

export default ProfessorSignupLogin;
