import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div classNamae='cards'>
      <h1>Check out these EPIC DESTINATIONS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards_items'>
            <CardItem 
            src='images/img-9.jpg'
            text='Explore the hidden waterfall deep insidet the Amazon jungle'
            label='Adventure'
            path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards

