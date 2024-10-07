import { Navbar } from './components/navbar/navbar';
import { Card } from './components/card/card';
import { NotFound } from './components/notfound/notFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/menu/menu.component';
import './App.css';

function App() {
  return (
    
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="/card" element={<Card/>}/>
            <Route path="/notFound" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
  );
}


export default App;
