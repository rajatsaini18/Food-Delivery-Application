
import React, { useContext, useState } from 'react';
import './Placeorder.css';
import { StoreContext } from '../../context/StoreContext';



const Placeorder = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  const {getTotalCartAmount}=useContext(StoreContext);
  const totalCartAmount = getTotalCartAmount();
  const delivery = totalCartAmount ? 2 : 0; 
  const totalAmountWithDelivery = totalCartAmount + delivery; 
  

  return (
     <>
     <div className='placeorder-header'></div>
    <div className="container">
      <div>
      <h2 className="checkkout">Your Personal Details</h2>

      <form >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
      </form>
      </div>

      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${totalCartAmount}</p>
            </div>
            <hr></hr>
            <div className="cart-total-details">
              <p id='delivery-fees'>Delivery Fee</p>
              <p>${delivery}</p>
            </div>
            <hr></hr>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${totalAmountWithDelivery}</b>
            </div>
            <hr></hr>
            <button type="submit" onClick={handleSubmit} className="place-order-button">Place Order</button>
          </div>
      </div>

    </div>
    </>

   

  
  );
};

export default Placeorder;
