import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';

import Depas from "../../../../img/depas.png"
import Logo from "../../../../imagenes/NavLogos.png"
import FlechaAbajo from "../../../../img/flechaAbajo.png"



const Index = () => {

  return (
    <div className='mainContainerWelcolme'>
      {/* <div className='cont-welcolme-izq'>
        <img src={Depas} />
      </div> */}
      <div className='cont-main-wel-center'>
        <img className='cont-div-logo-wel animate__animated animate__fadeInDown' src={Logo} />
        <h1 className='animate__animated animate__flipInX'>¡ASEGURA, CREA Ó
          INVIERTE CON
          LA MEJOR
          OPCIÓN!</h1>
        <p className='animate__animated animate__flipInX'>Comprometidos para ayudar a
          invertir en los
          desarrollos inmobiliarios sobresalientes del sureste</p>
        <div className="cont-contactanos-welcolme animate__animated animate__flipInX">
          <h3>Contáctanos</h3>
        </div>
        <div className="cont-arrow-welcolme animate__animated animate__flipInX">
          <a href="#page-1" ><img src={FlechaAbajo} /></a>
        </div>
      </div>
      {/* <div className='cont-welcolme-der'>
        <h1>¡ASEGURA, CREA Ó
          INVIERTE CON
          LA MEJOR
          OPCIÓN!</h1>
        <p>Estamos comprometidos para ayudar a
          nuestros clientes a invertir en los
          desarrollos inmobiliarios más prósperos
          y sobresalientes del sureste</p>
        <div className="cont-contactanos-welcolme">
          <h3>Contáctanos</h3>
        </div>
      </div> */}

    </div>
  )
}

export default Index