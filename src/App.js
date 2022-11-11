import Navbar from './components/ui/Navbar/Navbar';
import './css/style.min.css'
import Product__list from './components/Product__list/Product__list';
import MyModal from './components/ui/MyModal/MyModal';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">  
    <Navbar visible={visible} setVisible={setVisible}/>
    <Product__list visible={visible} setVisible={setVisible}/>
    </div>
  );
}

export default App;
