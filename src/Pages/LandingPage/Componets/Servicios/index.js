import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';

import Asesoria from "../../../../img/asesoria.png"
import Documentos from "../../../../img/documentos.png"
import Legal from "../../../../img/legal.png"


const Index = () => {

  return (
    <div id="page-3" className='mainContServicios'>
      <h2>Servicios</h2>
      <p>Permítenos guiarte, te acompañamos de principio a fin</p>

      <div className='main-cont-servicios-kolel'>

        <div className='cont-servicio'>
          <div>
            <img src={Asesoria} />
          </div>
          <h4>Asesoramiento personalizado</h4>
          <p>
            Somos asesores en inversiones inmobiliarios con la capacidad de entender sus necesidades y expectativas, para guiarlos en la búsqueda de la propiedad ideal para cubrir sus necesidades de vivienda y de inversión.
            Ofreciendo un soporte durante todo el proceso de compra o renta para ayudarlos a tomar la mejor decisión con el objetivo de asegurar su inversión.
          </p>
        </div>

        <div className='cont-servicio'>
          <div>
            <img src={Documentos} />
          </div>
          <h4>Gestión de la documentación</h4>
          <p>
            Otorgamos asesoría legal en la gestión de la documentación en la compra o renta de una vivienda, facilitando la obtención de los documentos necesarios, como son los contratos, escrituras, certificaciones, y permisos para garantizar que estén en regla y vigentes.
          </p>
        </div>

        <div className='cont-servicio'>
          <div>
            <img src={Legal} />
          </div>
          <h4>Servicios legales</h4>
          <p>Contamos con un equipo de profesionales para ofrecerle los servicios de asesoría legal para evitar riesgos, y proteger los intereses de los clientes.. Entre estos servicios se incluyen la redacción y revisión de contratos, la asesoría en cuestiones fiscales y la resolución de conflictos entre propietarios e inquilinos.</p>
        </div>

      </div>

      <div className='sec-extras-servicios'>
        <h5>Servicio para Constructoras y Desarrolladores</h5>
        <p>
          Contamos con un equipo multidisciplinario para la elaboración de sus proyectos, tramitología y administración, adecuado a sus intereses y necesidades, con el objetivo de proteger su inversión
        </p>
      </div>

    </div>
  )
}

export default Index