import { PiTrolleyFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css'

export const Navbar =()=>{
    const cartItems = useSelector(state=>state.cart.cartData)
    let navigate = useNavigate();
    const logout=()=>{
        localStorage.removeItem('token');
        return navigate('/login');
    }
    return(
    <div className="herder-component">
       <Link className="logo-link" to="/">
        <h3 className="logo">TASTY KITCHEN</h3>
        </Link>
        <div className="signIn-signOut-trolly-container">
        <button onClick={logout} className="logout-btn">Logout</button>
            <Link to="/cart"><PiTrolleyFill className="trolly"/></Link>
            <div className="tolly-count">{cartItems.length}</div>
        </div>
    </div>)
}