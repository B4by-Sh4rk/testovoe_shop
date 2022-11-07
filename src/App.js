import Navbar from './components/Navbar/Navbar';
import './css/style.min.css'
import Product__list from './components/Product__list/Product__list';
import MyModal from './components/MyModal/MyModal';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState(false);
  const createOrder = (newOrder) => {
      setModal(false)
    }
  return (
    <div className="App">  
    <Navbar setModal={setModal}/>
    <Product__list/>
    </div>
  );
}

export default App;
