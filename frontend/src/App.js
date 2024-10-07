import { Navbar } from './components/navbar/navbar';
import { Card } from './components/card/card';
import { NotFound } from './components/notfound/notFound';

import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Card />
     <NotFound />
    </div>
  );
}

export default App;
