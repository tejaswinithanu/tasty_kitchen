
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/menu/menu.component';


function App() {
  return (
    
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Menu/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
