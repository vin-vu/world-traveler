import React from 'react';
import CardItem from './CardItem';

function Cards() {
  return (
    <div classNamae='cards'>
      <h1>Check out these EPIC DESTINATIONS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards_items'>
            <CardItem />
          </ul>
        </div>
      </div>
    </div>
  )
}