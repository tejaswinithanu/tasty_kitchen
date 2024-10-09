import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import { MdDeliveryDining } from "react-icons/md";
import {removeItem,incQuantity,decQuantity,handleClosePopUp,handleShowPopUp} from "../../state/cartSlice";
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css'

export const Cart = () => {
    const dispatch = useDispatch();
    const cardData = useSelector((state)=>state.cart.cartData);
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
        <div style={{ padding: "20px" }}>
            <h1 style={{textAlign:'center'}}>Order Menu</h1>
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
    );
};


