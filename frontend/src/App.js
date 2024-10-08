import  {Register}  from './components/Register/register';
import  {Menu}  from './components/menu/menu.component';
import { Navbar } from './components/navbar/navbar';
import { Card } from './components/card/card';
import { NotFound } from './components/notfound/notFound';
import LoginForm from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
       <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path = '/login' element = {<LoginForm/>}/>
          <Route path="/" element={<Menu/>}/>
          <Route path="/card" element={<Card/>}/>
          <Route path="*" element={<NotFound />}/>
       </Routes>
    </BrowserRouter>   
)}


export default App;


