import  {Register}  from './components/Register/register';
import { Cart } from './components/cart/cart';
import { NotFound } from './components/notfound/notFound';
import LoginForm from './components/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/home/home.component';


function App() {
  return (
    <BrowserRouter>
    
       <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path = '/login' element = {<LoginForm/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="" element={<NotFound />}/>
       </Routes>
    </BrowserRouter>   
)}


export default App;


