import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';

//Components
import Header from './Componets/Header'
import Welcome from './Componets/Welcome'
import QuienesSomos from './Componets/QuienesSomos'
import Servicios from './Componets/Servicios'
import Contacto from './Componets/Contacto'
import Footer from './Componets/Footer'


import Whatsapp from "../../Components/Publico/whatsapp/Whatsapp";


const LandingPage = () => {


  return (
    <div className='mainContainerLandingPage'>
      <Header />
      <div className='contAllDataLandingPage'>
        <Welcome />
        <QuienesSomos />
        <Servicios />
        <Contacto />
        <Footer />
      </div>
      <Whatsapp />
    </div>
  )
}

export default LandingPage