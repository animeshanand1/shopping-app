import React from "react";
import { useSelector } from "react-redux";
import { addTotalAmount } from "../../features/productSlice";
import "./Cart.css";

function Cart() {
  const { subTotal } = useSelector((state) => state.key);
  const { itemsInCart } = useSelector((state) => state.key);
  // console.log("cart", itemsInCart);
  return (
    <div className="cart">
      {/* <h3>{subTotal}</h3> */}
      <h3>Your Cart</h3>
      <div className="cart-items">
        {itemsInCart.map((item) => (
          <div className="checkout-cart">
            <img src={item.image} alt="image" />
            <h3 style={{fontWeight:'400'}}><strong>${item.price}</strong></h3>
            <button>+</button>
          </div>
        ))}
        <div className="subtotal">
        <h2>TOTAL:{subTotal}</h2>
      </div>
      </div>
      
    </div>
  );
}

export default Cart;
