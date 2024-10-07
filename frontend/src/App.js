import { Provider } from 'react-redux';
import './App.css';
import store from './state/store';

function App() {
  return (
    <Provider store={store}>
      Hi
    </Provider>
  );
}

export default App;
