import {Navigate} from 'react-router-dom'

export const RouteProtector = ({children})=>{
    let token = localStorage.getItem('token');
    console.log(token);
    console.log(!token);
    if(!token){
        return <Navigate to='/login' replace/>
    }
    return children
}