import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import './card.css'

const biryanis = [
    {
        id: 1,
        name: "Chicken Biryani",
        quantity: "1 Plate",
        price: "360"
    },
    {
        id: 2,
        name: "Veg Biryani",
        quantity: "1 Plate",
        price: "300"
    },
    {
        id: 3,
        name: "Mutton Biryani",
        quantity: "1 Plate",
        price: "450"
    }
];

export const Card = () => {
    // const dispatch = useDispatch();
    // const cardData = useSelector((state)=>state.cardData);
    const count = useSelector((state)=> state.count);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Order Menu</h1>
            <div style={{ display: "flex", flexDirection:"column",justifyContent: "space-around",alignItems:"center" }}>
                {biryanis.map(biryani => (
                    <div key={biryani.id} style={{ border: "1px solid #ccc", margin:"10px",borderRadius: "8px", padding: "10px", width: "900px", display:"flex",justifyContent:"space-between"}}>
                        <div>
                           <h4>{biryani.name}</h4>
                           <p>Quantity: {biryani.quantity}</p>
                           <p>Price: {biryani.price}</p>
                        </div>
                        <div>
                            <p className='quantity-container'>
                                <button className='btn-none-style'>-</button>
                                 {count}
                                <button className='btn-none-style'>+</button>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


