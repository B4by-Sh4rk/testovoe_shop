import React from 'react';

const Order_form = () => {
    /*const animalCrossing = document.querySelector('#animalCrossing').innerText;
    const minecraft = document.querySelector('#minecraft').innerText;
    const fortnite = document.querySelector('#fortnite').innerText;
    const genshinImpact = document.querySelector('#genshinImpact').innerText;*/
    return (
        <form  action="" className='order__form'>
            <input className='form__input' type="text" placeholder='Имя' required></input>
            <input className='form__input'  type="text" pattern="[0-9]*" placeholder='Телефон' required></input>
            <select className='form__select' required>
                <option value="">Выберите товар</option>
                <option value="animalCrossing">animalCrossing</option>
                <option value="minecraft">minecraft</option>
                <option value="fortnite">fortnite</option>
                <option value="genshinImpact">genshinImpact</option>
            </select>
            <button className='form__button' type='submit'>ЗАКАЗАТЬ</button>
        </form>
    );
};

export default Order_form;