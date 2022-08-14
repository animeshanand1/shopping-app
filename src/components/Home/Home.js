import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Banner1 from "../../Banner-Images/Banner1.jpg";
import Banner3 from "../../Banner-Images/Banner3.jpg";
import Banner4 from "../../Banner-Images/Banner4.jpg";
import Banner5 from "../../Banner-Images/Banner5.jpg";
import Banner6 from "../../Banner-Images/Banner6.jpg";
import Slider from "../Slider/Slider";

import {
  addCartItem,
  addItemsToCart,
  addTotalAmount,
  getProducts,
} from "../../features/productSlice";
import "./Home.css";

function Home() {
  const bannerImages = [Banner1, Banner3, Banner4, Banner4, Banner5, Banner6];
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
      <div className="home-container">
        <Slider images={bannerImages} />
      </div>
      <div className="home-row">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt="product-image" />
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
    </div>
  );
}

export default Home;
