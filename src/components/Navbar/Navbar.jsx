import React, { useState } from 'react';
import MyModal from '../MyModal/MyModal';

const Navbar = ({visible, setVisible}) => {

    return (
        <div className='navbar'>
            <MyModal visible={visible} setVisible={setVisible}>
            </MyModal>
            <div className="logo">GameShop</div>
            <button  className="button" setVisible={setVisible} onClick={() => setVisible(true)}>ЗАКАЗАТЬ</button>
        </div>
    );
};

export default Navbar;