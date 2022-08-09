import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem, addItemsToCart, addTotalAmount, getProducts } from '../../features/productSlice'
import './Home.css'

function Home() {
  const dispatch=useDispatch()
  const {products}=useSelector(state=>state.key)
  console.log('products',products);
  useEffect(()=>{
    dispatch(getProducts())
  },[])

  function CartAction(product){
    return dispatch=>{
      dispatch(addCartItem())
      dispatch(addItemsToCart(product))
      dispatch(addTotalAmount(product))
    }
  }
  return (
    <div className='container'>
      
      {products.map((product)=>(
        <div className='card' key={product.id}>
        <img src={product.image}/>
        <h6>{product.category}</h6>
        <h6>${product.price}</h6>
        
        <h6>{product.description}</h6>
        <h6>{product.rating.rate}</h6>
        <button onClick={()=>dispatch(CartAction(product))}>Add To Cart</button>
        </div>))}
        
        {/* <div className='card' >
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP2NouqNRo6pMvlSO6qpOW9QMgCAj83OJIQ&usqp=CAU' alt=''/>
            
            <h6>Rating</h6>
            <h5>Price</h5>
            <h6>Description</h6>
            <button>Add To Cart</button>
        </div>
        <div className='card' >
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP2NouqNRo6pMvlSO6qpOW9QMgCAj83OJIQ&usqp=CAU' alt=''/>
            
            <h6>Rating</h6>
            <h5>Price</h5>
            <h6>Description</h6>
            <button>Add To Cart</button>
        </div>
        <div className='card' >
            <img src='https://i.gadgets360cdn.com/products/large/1550692389_635_samsung_galaxy_s10.jpg?downsize=*:360' alt=''/>
            
            <h6>Rating</h6>
            <h5>Price</h5>
            <h6>Description</h6>
            <button>Add To Cart</button>
        </div> */}
    </div>
  )
}

export default Home
