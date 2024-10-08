import { useDispatch, useSelector } from "react-redux"
import { MenuItem } from "../menuItem/menuItem.component"
import {getItemsByCategory} from '../../state/menuSlice'
import { useNavigate } from "react-router-dom"
import './menu.css'

const tabs=[
    {
        tabName:"Veg",
        tabId:'veg'
    },
    {
        tabName:"Non-Veg",
        tabId:'non-veg'
    }
]

export const Menu=()=>{
    const menuList=useSelector(state=>state.menu.menuItems)
    const dispatch=useDispatch();
    let navigate = useNavigate();
    const handleTabChange=(tabId)=>{
        dispatch(getItemsByCategory(tabId))
    }

    const logout=()=>{
        localStorage.removeItem('token');
        return navigate('/login');
    }
    return(
        <div>
            <div className="menu-bar">
                <ul className="tab-list">
                    {
                        tabs.map(eachTab=>(
                            <li className="tab-item" key={eachTab.tabId}>
                                <button onClick={()=>handleTabChange(eachTab.tabId)} className="btn btn-none p-0 text-light tab-btn">
                                    {eachTab.tabName}
                                </button>
                            </li>
                        ))
                    }
                        <button onClick={logout} className='btn btn-outline-primary cart-btn'>Logout</button>
                </ul>
            </div>
            <div className="menu-list">
                <ul>
                {
                    menuList.map(eachItem=>(
                        <MenuItem key={eachItem.id} itemDetails={eachItem}/>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}