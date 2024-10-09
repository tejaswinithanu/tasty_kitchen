import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import userServices from '../../Services/user.services';
import * as yup from 'yup';
import {  useNavigate,Link } from 'react-router-dom';
import "./login.css";

const ValidationSchema = yup.object({
    email : yup.string().email('Incorrect Email').required('Email is Required'),
    password : yup.string().required('Password is Required')
})

const errorStyle = {style : {color : "Red"}}

const LoginForm = () => {
    let [error,setErrorMessage] = useState('')
    let navigate = useNavigate()
    return (
      <div className='login-component-main'>
      <div className='login-component'>
        <h1>Login</h1>
       
          <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={ValidationSchema}
          className="align-items-center"
          onSubmit={async (values, { setSubmitting }) => {
            
            try {
              let response = await userServices.loginUser(values)
              console.log(response);
              localStorage.setItem('token',response.data)
              console.log(response.status,response);
              if(response.data.status===400){
                setErrorMessage(response.data.response);
              }else{
              navigate('/');
              }
            } catch (error) {
              setErrorMessage("Error Triggered");
            }finally{
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form  className="align-items-center">
              <div>
                <label className='login-label'>Email</label>
                <br/>
                <Field type="email" className = 'email-field' name="email"/>
                <ErrorMessage name="email" component="div" {...errorStyle} />
              </div>
              <br/>
              <div>
                <label>Password</label>
                <br/>
                <Field type="password" className = 'email-field' name="password"/>
                <ErrorMessage name="password" component="div" {...errorStyle} />
              </div>

              <div>
            <span style={{textAlign:"center"}}>If you have not yet registerd , regiter here </span><Link to='/register'>register</Link>
          </div>
              <button className ='btn btn-primary mt-2' type="submit" disabled={isSubmitting}>Login</button>
              {error ? <p className='danger text-center'>{error}</p> : ''}
            </Form>
          )}
        </Formik>
        </div>
          
      </div>
    );
  };
  

export default LoginForm