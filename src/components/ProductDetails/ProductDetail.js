import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  addCartItem, addItemsToCart, addTotalAmount, getSpecificProduct } from "../../features/productSlice";

function ProductDetail() {
  const { specificProduct } = useSelector((state) => state.key);
  console.log("specificProduct", specificProduct);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getSpecificProduct(id));
  }, [dispatch]);


  function insideCartAction(specificProduct){
    return dispatch=>{
      dispatch(addCartItem())
      dispatch(addItemsToCart(specificProduct))
      dispatch(addTotalAmount(specificProduct))
    }
  }
  return (
    // <h3>{specificProduct.title}</h3>
    <div className="product-detail" style={{padding:'20px'}}>
      <h2>{specificProduct.title}</h2>
      <img
        style={{ width: "350px", height: "fitContent" }}
        src={specificProduct.image}
      />
      <div className="product-info">
        <h2><span style={{color:'green'}}>${specificProduct.price}</span></h2>
       
        <h3>{specificProduct.description}</h3>
      </div>
      <button onClick={()=>dispatch(insideCartAction(specificProduct))} className="purchase">Buy Now</button>
    </div>
  );
}

export default ProductDetail;
