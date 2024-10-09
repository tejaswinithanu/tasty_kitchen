import { useState } from "react"
import { Formik,ErrorMessage,Field,Form } from "formik";
import * as yup from "yup";
import './register.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register=()=>{
    let [status,setStatus] = useState('');
    let navigate = useNavigate();

    let validationSchema = yup.object({
        email : yup.string().email("invalid email formate").required('Email is required'),
        password : yup.string().min(6,"password should be minimum 6 charecters").max(15,"password should be maximum 15 charecters").required("password is required"),
        roles : yup.string().required('roles are required')
    })

    let onSubmit=async (values)=>{
       try{

       let userDetails = {
            "email" : values.email,
            "password" : values.password,
            "roles" : values.roles.split(',')
        }
        let response = await axios.post("http://localhost:8000/user/register",userDetails);
        console.log(response.status,'response');
        setStatus(response.data);
        navigate('/login');
    }
    catch(e){
        setStatus('Registration Failed');
    }
    }

    return <div className="register-container register-component">
       
<Formik
    initialValues={{email:'',password:'',roles:''}}
    validationSchema={validationSchema}
    onSubmit = {onSubmit}
>
    <Form className="register-form">
    <h2>Register</h2>
        <div>
            <label className="formik-label" htmlFor='email'>Email</label>
            <Field className='formik-input' name="email" id='email' type='email' placeholder='Enter you email address'/>
            <ErrorMessage name="email" component="div" className="danger"/>
        </div>
        <div>
            <label className="formik-label" htmlFor='password'>Password</label>
            <Field className='formik-input' name="password" id='password' type='password' placeholder="Enter your password of length 6-15"/>
            <ErrorMessage name="password" component="div" className="danger"/>
        </div>
        <div>
            <label className="formik-label" htmlFor='roles'>roles</label>
            <Field className='formik-input' name="roles" id='roles' type='text' placeholder="Enter space seperated roles"/>
            <ErrorMessage name="roles" component="div" className="danger"/>
        </div>
        <button type='submit' className="btn btn-primary">Submit</button>
    </Form>
    
</Formik>
<p style={{textAlign:"center"}}>{status}</p>
    </div>
}