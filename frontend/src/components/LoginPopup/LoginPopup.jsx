import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ toggleLoginPopup }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='popup-overlay'>
      <div className="background-image-login">
        <div className='close-popup' onClick={toggleLoginPopup}>&times;</div>
        <div className="image">
          <img src='/src/assets/pizza.jpg' ></img>
          <p className='description'>Enjoy your....<br></br> Tasty meals...</p>
          <div className='popup-content'>
            {isLogin ? (
              <div>
                <h2><img src={assets.logo} /></h2>
                <form>
                  <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' name='username' required />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' required />
                  </div>
                  <button type='submit' className='submit-button' >Login</button>
                </form>
                <p className='toggle-form-text'>Don't have an account? <span onClick={toggleForm}>Create one</span></p>
              </div>
            ) : (
              <div>

                <form>
                  <div className='form-group'>
                    <label htmlFor='new-username'>Username</label>
                    <input type='text' id='new-username' name='username' required />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='new-password'>Password</label>
                    <input type='password' id='new-password' name='password' required />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input type='password' id='confirm-password' name='confirmPassword' required />
                  </div>
                  <button type='submit' className='submit-button'>Create Account</button>
                </form>
                <p className='toggle-form-text'>Already have an account? <span onClick={toggleForm}>Login</span></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
