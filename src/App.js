import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Singup';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/Signin' element={ <Signin/>}/>
      <Route path='/Signup' element={ <Signup/>}/>
     </Routes>
    
     <Footer/>
     
    </div>
  );
}

export default App;
