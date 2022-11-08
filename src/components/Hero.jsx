import React, { useState } from "react";
import pampilhosa from "../assets/Img/pampilhosa.jpg";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
  } from 'react-icons/fa';

const Hero = () => {
  return (
    <div class="w-full h-screen relative">
      <img className="w-full h-full" src={pampilhosa} alt="HOME" />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-left text-white p-4'>
        <h1>ATLAR INNOVATION</h1>
        <h2 className='py-4'>Creating Novel Solutions From Earth To Sky</h2>
        <div className="buttonTeste"><button variant="outlined" color="white">Read More</button></div>
        <div className='socialmedia'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
      </div>
    </div>
  );
};

export default Hero;
