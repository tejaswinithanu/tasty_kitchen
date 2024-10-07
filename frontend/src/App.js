import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import LoginForm from './components/Login';
import './App.css';
import  Register  from './components/Register/register';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path = '/login' element = {<LoginForm/>}/>
       </Routes>
    </BrowserRouter>   
)}


export default App;
