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
            src={require('../static/images/img-9.jpg').default}
            text='Explore the hidden waterfall deep insidet the Amazon jungle'
            label='Adventure'
            path='/services'
            />
            <CardItem 
            src={require('../static/images/img-2.jpg').default}
            text='Travel through the islands of Bali'
            label='Luxury'
            path='/services'
            />             
          </ul>
          <ul className='cards__items'>
            <CardItem 
            src={require('../static/images/img-3.jpg').default}
            text='Set sail in the wild waters of the Carribean'
            label='Mystery'
            path='/services'
            />
            <CardItem 
            src={require('../static/images/img-4.jpg').default}
            text='Experience football in the Himalayan mountains'
            label='Adventure'
            path='/products'
            />      
            <CardItem 
            src={require('../static/images/img-8.jpg').default}
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

