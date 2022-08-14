import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addCartItem,
  addItemsToCart,
  addTotalAmount,
  getProducts,
} from "../../features/productSlice";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.key);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  function CartAction(product) {
    return (dispatch) => {
      dispatch(addCartItem());
      dispatch(addItemsToCart(product));
      dispatch(addTotalAmount(product));
    };
  }
  return (
    <div className="container">
      {products.map((product) => (
        
          <div className="card" key={product.id}>
            <div>
            <Link to={`/products/${product.id}`}>
            <img src={product.image} alt='product-image' />
            </Link>
            </div>
           
            <h6>{product.category}</h6>
            <h6>${product.price}</h6>
            <h6>{product.rating.rate}</h6>
            <button onClick={() => dispatch(CartAction(product))}>
              Add To Cart
            </button>
          </div>
        
      ))}
    </div>
  );
}

export default Home;
