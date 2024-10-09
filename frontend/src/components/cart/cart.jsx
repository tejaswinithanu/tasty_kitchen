// import React from 'react';
// import {useDispatch,useSelector} from "react-redux";
// import { MdDeliveryDining } from "react-icons/md";
// import {removeItem,incQuantity,decQuantity} from "../../state/cartSlice";
// import './cart.css'
// import { Link } from 'react-router-dom';

// const EmptyCart=()=>{
//     return(
//         <div className='empty-cart'>
//             <img alt="empty" src="https://res.cloudinary.com/dqqijdyjr/image/upload/v1728378752/enkebix93r6xyw7pl9b3.png"/>
//             <h2 className='mt-0'>Your cart is empty</h2>
//             <Link to="/">
//             <button className='btn btn-outline-primary mt-3'>Order now!</button>
//             </Link>
//         </div>
//     )
// }

// export const Cart = () => {
//     const dispatch = useDispatch();
//     const cartData = useSelector((state)=>state.cart.cartData);
//     // const newcount = useSelector((state)=> state.cart.count);
   
//     const incCount=(id)=>{
//         dispatch(incQuantity(id));
//     }

//     const decCount=(id)=>{
//         dispatch(decQuantity(id))
//     }

//     const handleRemove =(id)=>{
//         console.log("p")
//         dispatch(removeItem(id))
//     }

//     return (
//         <div style={{ padding: "20px" }}>
//             {
//                 cartData.length !==0? 
//                 (
//                 <div>
//                     <h1 style={{textAlign:'center'}}>Order Menu</h1>
//                     <div style={{ display: "flex", flexDirection:"column",justifyContent: "space-around",alignItems:"center" }}>
//                         {cartData.map(order => (
//                             <div key={order.id} style={{ border: "1px solid #ccc", margin:"10px",borderRadius: "8px", padding: "10px", width: "900px", display:"flex",justifyContent:"space-between"}}>
//                                 <div>
//                                 <h4>{order.name}</h4>
//                                 <p>Quantity: {order.quantity}</p>
//                                 <p>Price: {order.totalPrice}</p>
//                                 </div>
//                                 <div>
//                                     <p className='quantity-container'>
//                                         <button className='btn-none-style' onClick={()=>decCount(order.id)}>-</button>
//                                         {order.quantity}
//                                         <button className='btn-none-style' onClick={()=>incCount(order.id)}>+</button>
//                                     </p>
//                                     <button className="btn btn-primary" style = {{cursor : 'pointer'}} onClick={()=>handleRemove(order.id)}>remove</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className='aligin-item-end'>
//                         <button className='btn btn-info ' style={{color:"white" }}>Place The Order<MdDeliveryDining style={{color:"blue",marginLeft:"15px",width:"25px",height:"25px"}}/></button>
//                     </div>
//                 </div>
//                 ):
//                 (
//                     <EmptyCart/>
//                 )
//             }
            
//         </div>
//     );
// };

import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import { MdDeliveryDining } from "react-icons/md";
import {removeItem,incQuantity,decQuantity,handleClosePopUp,handleShowPopUp} from "../../state/cartSlice";
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css'
import { Link } from 'react-router-dom';

const EmptyCart=()=>{
    return(
        <div className='empty-cart'>
            <img alt="empty" src="https://res.cloudinary.com/dqqijdyjr/image/upload/v1728378752/enkebix93r6xyw7pl9b3.png"/>
            <h2 className='mt-0'>Your cart is empty</h2>
            <Link to="/">
            <button className='btn btn-outline-primary mt-3'>Order now!</button>
            </Link>
        </div>
    )
}


export const Cart = () => {
    const dispatch = useDispatch();
    const cartData = useSelector((state)=>state.cart.cartData);
    const show = useSelector(state =>state.cart.show);
    const price = useSelector(state =>state.cart.price)
    
    const incCount=(item)=>{
        dispatch(incQuantity(item));
    }
    
    const decCount=(item)=>{
        dispatch(decQuantity(item))
    }

    const handleRemove =(id)=>{
        console.log("p")
        dispatch(removeItem(id))
    }

const handleClose = () => {
   dispatch(handleClosePopUp())
}
  const handleShow = () => {
      dispatch(handleShowPopUp())
  };


    return (
        
            cartData.length !==0? 
            (
            <div>
                <h1 style={{textAlign:'center'}}>Order Menu</h1>
                <div style={{ display: "flex", flexDirection:"column",justifyContent: "space-around",alignItems:"center" }}>
                    {cartData.map(order => (
                        <div key={order.id} style={{ border: "1px solid #ccc", margin:"10px",borderRadius: "8px", padding: "10px", width: "900px", display:"flex",justifyContent:"space-between"}}>
                            <div>
                            <h4>{order.name}</h4>
                            <p>Quantity: {order.quantity}</p>
                            <p>Price: {order.totalPrice}</p>
                            </div>
                            <div>
                                <p className='quantity-container'>
                                    <button className='btn-none-style' onClick={()=>decCount(order)}>-</button>
                                    {order.quantity}
                                    <button className='btn-none-style' onClick={()=>incCount(order)}>+</button>
                                </p>
                                <button className="btn btn-primary" style = {{cursor : 'pointer'}} onClick={()=>handleRemove(order.id)}>remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                 <div>
            <h4 style={{margin:"8px"}}>Total Price: <span>{price}</span></h4>
        </div>
  <div className='aligin-item-end'>
        <button className='btn btn-info' variant="primary" onClick={handleShow} style={{color:"white" }}>Place The Order</button>
    </div>
  <Modal show={show} onHide={handleClose} style={{backgroundImage:"linear-gradient(to right, rgb(211, 247, 127),rgb(108, 222, 250))"}}>
    <Modal.Header closeButton>
      <Modal.Title>Order Placed Successfully</Modal.Title>
    </Modal.Header>
    <Modal.Body>we deliver your order within 25 minutes enjoy your FOOD</Modal.Body>
    <div className='delivery-icon-container'><MdDeliveryDining className='animated-element bounce-out-right' style={{color:"blue",marginLeft:"15px",width:"45px",height:"45px"}}/></div>
  </Modal>
            </div>
            ):

            (
                <EmptyCart/>
            )
        
        )
    }

