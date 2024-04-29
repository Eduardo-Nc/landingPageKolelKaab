import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';

const Index = () => {

  return (
    <div id="page-1" className='mainContQuienesSomos'>
      <h1>¿Por qué elegirnos?</h1>
      <p>Somos un grupo de profesionales que nos especializamos en Desarrollo de negocios, consultoría y estrategias financieras de inversión inmobiliaria  para construir soluciones que realmente responden a las necesidades de nuestros clientes y contribuyan a un mejor estilo de vida.
        Si estás planeando realizar una inversión inmobiliaria en la Ciudad de Mérida o en el Estado de Yucatán, somos los indicados para asesorarte contamos con personal certificado.</p>

      <a href='#page-3' className='btn-conocenos-quienes-somos'>
        <label>Conoce nuestros servicios</label>
      </a>

    </div>
  )
}

export default Index