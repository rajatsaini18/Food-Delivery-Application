import React,{useEffect, useContext,useState}from 'react'
import './FoodItem.css'
import { StarIcon } from "@heroicons/react/solid"
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id , name , price , description , image}) => {
  const [rating, setRating] = useState(0);
 

  useEffect(() => {
    const randomRating = Math.floor(Math.random() * 5) + 1;
    setRating(randomRating);
  }, []);


  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);
  
  return (
    
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image}/>
        {!cartItems[id]
         ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}>
         </img>
         :<div className='food-item-counter'>
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}/>
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)}src={assets.add_icon_green}/>
          </div>
        }
        
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <div className='icon' >
         {Array(5).fill().map((_,i)=> (<StarIcon key={i} className={i<rating?'icon-image':'dull-image'}/>))}
          </div>
        </div>
        <p className="food-item-description">
          {description}
        </p>
        <p className="food-item-price">
          ${price}
        </p>
      </div>
      
    </div>
  )
}

export default FoodItem
