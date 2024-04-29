import React, { Fragment, useEffect, useState } from 'react';
import moment from 'moment/moment';
import './styles.css';

const Index = () => {

  return (
    <div className='mainContFooter'>
      <div className='cont-div-footer-1'>

        <div className='cont-1-data-footer'>
          <h4>Oficina de Atención y Ventas</h4>
          <a href="https://www.google.com/maps/place/Inmobiliaria+Koolel-Kaab/@21.0252186,-89.5811841,17z/data=!3m1!4b1!4m6!3m5!1s0x8f56771609d7b52b:0x20134d775406896a!8m2!3d21.0252186!4d-89.57899!16s%2Fg%2F11r_yr7wqw"
            target="_blank"
          >
            Calle 18ª #255 Privada Quinta Real (Altabrisa) C.P. 97130
          </a>

          <h4 className='cont-h4-atencion'>Horario de Atención</h4>
          <div>
            <label>
              de Lunes a Viernes <br></br>
              08:00 a 18:00
            </label>
            <label>
              Sábados<br></br>
              08:00 a 14:00
            </label>
          </div>
        </div>

        <div className='cont-2-data-footer'>
          <h4>Contáctanos:</h4>
          <div>
            <a href="tel:9991295931"
            >
              999-129-5931
            </a>
            <a href="mailto:info@koolelkaab.com.mx"
            >
              info@koolelkaab.com.mx
            </a>
          </div>
        </div>

        <div className='cont-3-data-footer'>
          <h4>Encuéntranos en</h4>
          <a href="https://api.whatsapp.com/message/L2OKG5XKUZBNG1" title="WhatsApp" target="_blank">
            WhatsaApp
          </a>
          <a href="https://www.facebook.com/inmobiliariakoolel" title="Facebook" target="_blank">
            Facebook
          </a>
          <a href="https://www.instagram.com/inmobiliariakoolelkaab/" title="Instagram" target="_blank">
            Instagram
          </a>
          <a href="https://www.facebook.com/messages/t/1692801737639678" title="Messenger" target="_blank">
            Messenger
          </a>
        </div>

      </div>
      <div className='cont-div-footer-2'>
        <label>© {moment().format("YYYY")} COPYRIGHT: KOOLEL KAAB S.A DE C.V.</label>
      </div>
    </div>
  )
}

export default Index