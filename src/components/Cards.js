import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div classNamae='cards'>
      <h1>Check out these EPIC DESTINATIONS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src='images/img-9.jpg'
            text='Explore the hidden waterfall deep insidet the Amazon jungle'
            label='Adventure'
            path='/services'
            />
            <CardItem 
            src='images/img-2.jpg'
            text='Travel through the islands of Bali'
            label='Luxury'
            path='/services'
            />             
          </ul>
          <ul className='cards__items'>
            <CardItem 
            src='images/img-3.jpg'
            text='Set sail in the wild waters of the Carribean'
            label='Mystery'
            path='/services'
            />
            <CardItem 
            src='images/img-4.jpg'
            text='Experience football in the Himalayan mountains'
            label='Adventure'
            path='/products'
            />      
            <CardItem 
            src='images/img-8.jpg'
            text='Ride camels to explore the pyramids in the Sahara'
            label='Adrenaline'
            path='/sign-up'
            />          
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards

