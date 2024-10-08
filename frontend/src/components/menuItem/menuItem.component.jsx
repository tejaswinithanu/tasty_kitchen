import './menuItem.css'

export const MenuItem=({itemDetails})=>{
    let {name,cover,description}=itemDetails
    let logout = ()=>{
        localStorage.removeItem('token');
    }
    return(
        <li className="menu-item">
            <div className='item-details'>
            <img className='me-3 rounded' alt={name} width="120" height="100" src={cover}/>
            <div>
                <h5>{name}</h5>
                <p>{description.substring(0,100)}...</p>
            </div>
            </div>
            
            <button className='btn btn-outline-primary cart-btn'>Add to cart</button>
        </li>
    )
}