
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import userServices from '../Services/user.services';
const ValidationSchema = yup.object({
    email : yup.string().email('Incorrect Email').required('Email is Required'),
    password : yup.string().required('Password is Required')
})

const errorStyle = {style : {color : "Red"}}

const LoginForm = () => {
    return (
      <div className='form-container'>
        <h1>Login</h1>
        <div className='login-container'>    
          <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={ValidationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            
            try {
              let response = await userServices.loginUser(values)
              localStorage.setItem('token',response)
              console.log(response.data)
            } catch (error) {
              console.log("error triggered")
            }finally{
              setSubmitting(false)
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label className='login-label'>Email</label>
                <Field type="email" name="email"/>
                <ErrorMessage name="email" component="div" {...errorStyle} />
              </div>
  
              <div>
                <label>Password</label>
                <Field type="password" name="password"/>
                <ErrorMessage name="password" component="div" {...errorStyle} />
              </div>
  
              <button type="submit" disabled={isSubmitting}>Login</button>
            </Form>
          )}
        </Formik>
        </div>

      </div>
    );
  };
  

export default LoginForm