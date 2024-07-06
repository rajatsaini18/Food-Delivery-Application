import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext);
 const delivery=getTotalCartAmount()?2:0;
 const navigate=useNavigate();
  return (
  
    <div className='cart'>
      <div className="cart-items">
         <div className="cart-items-title" >
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
         </div>
         <br/>
         <hr />
         {food_list.map((item,index)=>{
             if(cartItems[item._id]>0){
              return(
                <div className='cart-items-title cart-items-item' key={item._id}>
                  <img src={item.image}/>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${cartItems[item._id]*item.price}</p>
                  <p className='cross' onClick={()=>{removeFromCart(item._id)}}>&times;</p>
                </div>
              )
             }
         })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr></hr>
            <div className="cart-total-details">
              <p id='delivery-fees'>Delivery Fee</p>
              <p>${getTotalCartAmount()?2:0}</p>
            </div>
            <hr></hr>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()+delivery}</b>
            </div>
            <hr></hr>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='promocode'></input>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
 
}

export default Cart
