import {useDispatch,useSelector} from 'react-redux'

import { addCartItem, incQuantity } from '../../state/cartSlice'
import './menuItem.css'

export const MenuItem=({itemDetails})=>{

    let {name,cover,description,price,id}=itemDetails
    let cartItems=useSelector(state=>state.cart.cartData)
    let dispatch=useDispatch()

    const handleAddToCart=()=>{
        let cartItem;
        if(cartItems){
            cartItem=cartItems.find(eachItem=>eachItem.id===id)
        }
        if (cartItem){
            dispatch(incQuantity(id))
        }else{
            dispatch(addCartItem({...itemDetails,quantity:1,totalPrice:price}))
        }
        
    }
    return(
        <li className="menu-item">
            <div className='item-details'>
            <img className='me-3 rounded' alt={name} width="120" height="100" src={cover}/>
            <div>
                <h5>{name}</h5>
                <p>{description.substring(0,100)}...</p>       
                <h6>Rs. {price}/-</h6>
            </div>
            </div>
            
            <button onClick={handleAddToCart} className='btn btn-outline-primary cart-btn'>Add to cart</button>
        </li>
    )
}