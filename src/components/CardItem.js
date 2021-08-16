import React from 'react';
import { Link } from 'react-router-dom';

function CardItem() {
  return (
    <>
      <li className='cards__item'>
        <Link clasasName='cards__item__link'>
          <figure classNaame='cards__item__pic-wrap'>
            <img src="/" alt="Travel image" className='cards__item_img'/>
          </figure>
          <div classname='cards__item__info'>
            <h5 className='cards__item__text'></h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem