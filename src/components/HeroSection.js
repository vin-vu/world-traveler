import React from 'react';
import Button from './Button.js';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?
        <div className='hero-btns'>
          <Button className='btns' buttonStyles='btn--outline' buttonSize='btn--large'>Get Started</Button>
        </div>
      </p>
    </div>
  )
}

export default HeroSection;