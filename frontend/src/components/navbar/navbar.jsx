import { PiTrolleyFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './navbar.css'

export const Navbar =()=>{
    const countTolly = useSelector(state=>state.cart.totalTollyCount)
    return(
    <div className="herder-component">
        <Link to="/"><h1 className="logo">TASTY KITCHEN</h1></Link>
        <div className="signIn-signOut-trolly-container">
            <p className="auth pt-2">SignUp</p>
            <p className="auth pt-2">SignIn</p>
            <Link to="/card"><PiTrolleyFill className="trolly"/></Link>
            <div className="tolly-count">{countTolly}</div>
        </div>
    </div>)
}