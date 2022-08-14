
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import ProductDetail from './components/ProductDetails/ProductDetail';
import Footer from './components/Footer/Footer';
import Login from './components/pages/Login/Login';
// import Register from './components/pages/Register/Register';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' exact element={[<Header/>,<Home/>,<Footer/>]}/>
        <Route path='/products/:id'  element={[<Header/>,<ProductDetail/>]}/>
        <Route path='/checkout' element={[<Header/>,<Cart/>]}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/register' element={<Register/>}/> */}
     
      </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
