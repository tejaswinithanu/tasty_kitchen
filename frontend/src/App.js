import  {Register}  from './components/Register/register';
import  {Menu}  from './components/menu/menu.component';
import { RouteProtector } from './components/RouteProtecter';

import { Cart } from './components/cart/cart';
import { NotFound } from './components/notfound/notFound';
import LoginForm from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/home/home.component';

function App() {
  return (
    <BrowserRouter>
    
       <Routes>
          <Route path='/register' element={<Register />} />
          <Route path = '/login' element = {<LoginForm/>}/>
          <Route path="/" element={<RouteProtector><Home/></RouteProtector>}/>
          <Route path="/cart" element={<RouteProtector><Cart/></RouteProtector>}/>
          <Route path="" element={<NotFound />}/>
       </Routes>
    </BrowserRouter>   
)}


export default App;


