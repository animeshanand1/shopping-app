import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, addItemsToCart, addTotalAmount, removeFromCart } from "../../features/productSlice";
import {GrFormAdd} from 'react-icons/gr'
import "./Cart.css";

function Cart() {
  const { subTotal } = useSelector((state) => state.key);
  const { itemsInCart } = useSelector((state) => state.key);
 
  const dispatch=useDispatch()
  function insideCartAction(item){
    return dispatch=>{
      dispatch(addCartItem())
      dispatch(addItemsToCart(item))
      dispatch(addTotalAmount(item))
    }
  }
  function removeItems() {
    dispatch(removeFromCart())
    
  }
  
  return (
    <div className="cart">
     
      <h3>Your Cart</h3>
      <div className="cart-items" >
        {itemsInCart.map((item) => (
          <div className="checkout-cart" key={item._id}>
            <img src={item.image} alt="image" />
            <h3 style={{fontWeight:'400'}}><strong>${item.price}</strong></h3>
            <button className="btn" onClick={()=>removeItems(item._id)}>-</button>
            <button className="btn" onClick={()=>dispatch(insideCartAction(item))}>+</button>
          </div>
        ))}
        <div className="subtotal">
        <h2>TOTAL:${subTotal.toFixed(2)}</h2>
        
      </div>
      </div>
      
    </div>
  );
}

export default Cart;
