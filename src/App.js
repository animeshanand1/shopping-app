
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={[<Header/>,<Home/>]}/>
        <Route path='/checkout' element={[<Header/>,<Cart/>]}/>
      </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
