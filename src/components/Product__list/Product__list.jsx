import React, { useRef, useState } from 'react';
import animal__crossing from '../img/animal-crossing.jpg'
import minecraft from '../img/minecraft.jpg'
import fortnite from '../img/fortnite.jpg'
import genshin__impact from '../img/genshin-impact.jpg'
import MyModal from '../ui/MyModal/MyModal';

const Product__list = ({visible, setVisible}) => {
    const animal__crossing__game = 'Animal Crossing';
    const minecraft__game = 'Minecraft';
    const fortnite__game = 'Fortnite';
    const genshin__impact__game = 'Genshin Impact';
    const [game, setGame] = useState('');


    const handleClick = (e) => {
        setVisible(true)
        setGame(e.target.value);
        console.log(e.target.value);
}

const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    }
  }

    return (
        <div className='product__list'>
            <div className="row">
                <MyModal visible={visible} setVisible={setVisible} game__title__game={game}>
                </MyModal>
                <div id='Animal Crossing' className="product__card" >
                <h1 id="animalCrossing" className='game__title'>{animal__crossing__game}</h1>
                <img className='game__img' src={animal__crossing} alt="animal-crossing"/>
                <h1 className="buy__game" id="animalCrossing__price">5000 rub</h1>
                <button className='buy__button' value='Animal Crosiing' onClick={(e) => handleClick(e)}>Buy</button>
                </div>
                <div id='minecraft__game' className="product__card">
                <h1 id="minecraft" className='game__title'>{minecraft__game}</h1>
                <img className='game__img' src={minecraft} alt="animal-crossing"/>
                <h1 className="buy__game"  id="minecraft__price">1000 rub</h1>
                <button className='buy__button' value='Minecraft' onClick={(e) => handleClick(e)}>Buy</button>
                </div>
                <div id='fortnite__game' className="product__card">
                <h1 id='fortnite' className='game__title'>{fortnite__game}</h1>
                <img className='game__img' src={fortnite} alt="animal-crossing"/>
                <h1 className="buy__game"   id='fortnite__price'>500 rub</h1>
                <button className='buy__button' value='Fortnite' onClick={(e) => handleClick(e)}>Buy</button>
                </div>
                <div id='genshin__impact__game' className="product__card">
                <h1 id='genshinImpact' className='game__title'>{genshin__impact__game}</h1>
                <img className='game__img' src={genshin__impact} alt="animal-crossing"/>
                <h1 className="buy__game"  id='genshinImpact__price'>222 rub</h1>
                <button className='buy__button' value='Genshin Impact' onClick={(e) => handleClick(e)}>Buy</button>
                </div>
                <div className='btn__pageup' onClick={handlerScrollUp}>&#9650;<br/>наверх</div>
            </div>
        </div>
    );
};

export default Product__list;