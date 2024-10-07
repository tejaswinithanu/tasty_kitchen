
import * as yup from 'yup'

const ValidationSchema = yup.object({
    email : yup.string().email('Incorrect Email').required('Email is Required'),
    password : yup.string().required('Password is Required')
})

const errorStyle = {style : {color : "Red"}}

const FormikLoginScreen = () => {
    
}