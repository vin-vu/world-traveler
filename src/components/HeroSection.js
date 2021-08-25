import React from 'react';
import '../App.css';
import { Button } from './Button.js';
import './HeroSection.css';
import video from '../static/videos/video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?
        <div className='hero-btns'>
          <Button 
            className='btns' 
            buttonStyles='btn--outline' 
            buttonSize='btn--large'
          >
            Get Started
          </Button>
          <Button 
            className='btns'
            buttonStyles='btn--primary'
            buttonSize='btn--large'
          >
            Watch Trailer <i className='far fa-play-circle'/>
          </Button>
        </div>
      </p>
    </div>
  )
}

export default HeroSection;