
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import LoginForm from './components/Login';
import './App.css';
import  {Register}  from './components/Register/register';
import  {Menu}  from './components/menu/menu.component';
import { RouteProtector } from './components/RouteProtecter';



function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/register' element={<Register />} />
          <Route path = '/login' element = {<LoginForm/>}/>
          <Route path="/" element={<RouteProtector><Menu/></RouteProtector>}/>
       </Routes>
    </BrowserRouter>   
)}


export default App;
