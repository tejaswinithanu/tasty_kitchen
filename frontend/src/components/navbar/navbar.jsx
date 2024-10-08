import { PiTrolleyFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './navbar.css'

export const Navbar =()=>{
    const cartItems = useSelector(state=>state.cart.cartData)
    return(
    <div className="herder-component">
       <Link className="logo-link" to="/">
        <h3 className="logo">TASTY KITCHEN</h3>
        </Link>
        <div className="signIn-signOut-trolly-container">
            <p className="auth pt-2">SignUp</p>
            <p className="auth pt-2">SignIn</p>
            <Link to="/cart"><PiTrolleyFill className="trolly"/></Link>
            <div className="tolly-count">{cartItems.length}</div>
        </div>
    </div>)
}