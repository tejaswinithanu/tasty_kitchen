import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {removeItem,incQuantity,decQuantity} from "../../state/cardSlice";
import './card.css'


export const Card = () => {
    const dispatch = useDispatch();
    const cardData = useSelector((state)=>state.cart.cartData);
    const newcount = useSelector((state)=> state.cart.count);
   
    const incCount=(id)=>{
        dispatch(incQuantity(id));
    }

    const decCount=(id)=>{
        dispatch(decQuantity(id))
    }

    const handleRemove =(id)=>{
        console.log("p")
        dispatch(removeItem(id))
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Order Menu</h1>
            <div style={{ display: "flex", flexDirection:"column",justifyContent: "space-around",alignItems:"center" }}>
                {cardData.map(order => (
                    <div key={order.id} style={{ border: "1px solid #ccc", margin:"10px",borderRadius: "8px", padding: "10px", width: "900px", display:"flex",justifyContent:"space-between"}}>
                        <div>
                           <h4>{order.name}</h4>
                           <p>Quantity: {order.quantity}</p>
                           <p>Price: {order.price}</p>
                        </div>
                        <div>
                            <p className='quantity-container'>
                                <button className='btn-none-style' onClick={()=>decCount(order.id)}>-</button>
                                 {newcount}
                                <button className='btn-none-style' onClick={()=>incCount(order.id)}>+</button>
                            </p>
                            <button className="btn btn-primary" style = {{cursor : 'pointer'}} onClick={()=>handleRemove(order.id)}>remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


