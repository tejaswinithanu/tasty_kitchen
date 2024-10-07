import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Register } from './components/Register/register';

const App=()=>(
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );


export default App;
