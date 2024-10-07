import { useSelector } from "react-redux"
import { MenuItem } from "../menuItem/menuItem.component"

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

    return(
        <div>
            <div>
                <ul>
                    {
                        tabs.map(eachTab=>(
                            <li key={eachTab.tabId}>{eachTab.tabName}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
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