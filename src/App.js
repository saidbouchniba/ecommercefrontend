import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Singup';
import Contact from './components/Contact';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/Signin' element={ <Signin/>}/>
      <Route path='/Signup' element={ <Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
    
     <Footer/>
     
    </div>
  );
}

export default App;
