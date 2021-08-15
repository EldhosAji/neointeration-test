import React from 'react'
import './style.css';
import {menu,menu2x} from '../../assets/Index'


const DrawerNav = () => {

    return (
        <nav className="nav-cont">
            <div className="nav-cont-lft">
                <img srcSet={`${menu} 480w,${menu2x} 800w`}
                    sizes="(max-width: 600px) 480px, 800px"
                    src={menu2x}
                    alt="drawer-icon"/>
            </div>
        </nav>
    )
}

export default DrawerNav;