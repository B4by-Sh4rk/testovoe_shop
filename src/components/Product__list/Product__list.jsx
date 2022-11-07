import React from 'react';
import animal__crossing from '../img/animal-crossing.jpg'
import minecraft from '../img/minecraft.jpg'
import fortnite from '../img/fortnite.jpg'
import genshin__impact from '../img/genshin-impact.jpg'

const Product__list = () => {
    return (
        <div className='product__list'>
            <div className="row">
                <div className="product__card">
                <h1 id="animalCrossing" className='game__title'>Animal Crossing</h1>
                <img className='game__img' src={animal__crossing} alt="animal-crossing"/>
                </div>
                <div className="product__card">
                <h1 id="minecraft" className='game__title'>Minecraft</h1>
                <img className='game__img' src={minecraft} alt="animal-crossing"/>
                </div>
                <div className="product__card">
                <h1 id='fortnite' className='game__title'>Fortnite</h1>
                <img className='game__img' src={fortnite} alt="animal-crossing"/>
                </div>
                <div className="product__card">
                <h1 id='genshinImpact' className='game__title'>Genshin Impact</h1>
                <img className='game__img' src={genshin__impact} alt="animal-crossing"/>
                </div>
            </div>
        </div>
    );
};

export default Product__list;