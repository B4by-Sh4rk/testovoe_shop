import React, { useState } from 'react';
import MyModal from '../MyModal/MyModal';
import Order_form from '../Order_form/Order_form';

const Navbar = () => {
    const [modal, setModal] = useState(false);
    /*const createOrder = (newOrder) => {
        setModal(false)
      }*/
    return (
        <div className='navbar'>
            <MyModal visible={modal} setVisible={setModal}>
                <Order_form/>
            </MyModal>
            <div className="logo">GameShop</div>
            <button className="button" onClick={() => setModal(true)}>ЗАКАЗАТЬ</button>
        </div>
    );
};

export default Navbar;