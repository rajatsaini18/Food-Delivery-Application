import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import LoginPopup from '../LoginPopup/LoginPopup'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  const {getTotalCartAmount}=useContext(StoreContext);

  return (
    <div className='navbar'>
     <Link to='/'><img src={assets.logo} className='logo'/></Link>

     <ul className='navbar-menu'>
      <li onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home </li>
      <li onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</li>
      <li onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
      <li onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</li>
     </ul>

     <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
           <Link to='/cart'> <img  src={assets.basket_icon} alt=""/></Link>
            <div className={getTotalCartAmount()?"dot":""}> </div>
          </div>
          <button className='nav' onClick={toggleLoginPopup}>Sign In</button>
      </div>
      {showLoginPopup && <LoginPopup toggleLoginPopup={toggleLoginPopup} />}
   
      
    </div>
  )
}

export default Navbar

