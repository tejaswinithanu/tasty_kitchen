import { PiTrolleyFill } from "react-icons/pi";
import './navbar.css'

export const Navbar =()=>{
    return(
    <div className="herder-component">
        <h1 className="logo">TASTY KITCHEN</h1>
        <div className="signIn-signOut-trolly-container">
            <p className="auth">SignUp</p>
            <p className="auth">SignIn</p>
            <PiTrolleyFill className="trolly"/>
            <div className="tolly-count">0</div>
        </div>
    </div>)
}