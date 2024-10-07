import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import LoginForm from './components/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path = '/login' element = {<LoginForm/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
