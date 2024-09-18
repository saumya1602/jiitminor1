import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import './CollegeRegister.css';

// Validation schema using Yup
const validationSchema = Yup.object({
  collegeName: Yup.string().required('College Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
  phoneNumber: Yup.string().matches(/^\d+$/, 'Phone number must be digits only').length(10, 'Phone number must be 10 digits').required('Phone number is required'),
});

const CollegeRegister = () => {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log('Form Data', values);
      setSubmitting(false);
      resetForm();
      alert('College registered successfully!');
    }, 1000);
  };

  return (
    <motion.div 
      className="register-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Register Your College</h2>
      <Formik
        initialValues={{ collegeName: '', email: '', password: '', phoneNumber: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="collegeName">College Name</label>
              <Field name="collegeName" type="text" className="input-field" />
              <ErrorMessage name="collegeName" component="div" className="error-message" />
            </div>

          
            <div className="form-group">
              <label htmlFor="name"> Your Name</label>
              <Field name="name" type="text" className="input-field" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="input-field" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field name="phoneNumber" type="text" className="input-field" />
              <ErrorMessage name="phoneNumber" component="div" className="error-message" />
            </div>

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default CollegeRegister;
