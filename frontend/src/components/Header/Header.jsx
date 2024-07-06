import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your <br/>favourite  food here</h2>
        <p>Experience culinary delight with every meal. Our expert chefs craft delicious dishes using the finest ingredients, perfect for satisfying any craving. Enjoy a diverse menu that caters to every taste, whether you're dining in or ordering online. Discover the joy of great food and make every meal memorable.</p>
        <div className='btn'><button>View Menu</button></div>
      </div>
    </div>
  )
}

export default Header
