import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';
import moment from 'moment';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';


const Index = () => {
  const baseUrl = process.env.REACT_APP_API_URL;

  const [openMenu, setOpenMenu] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [datos, setDatos] = useState({});

  const handleChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };


  // console.log(propiedadesUltimosData)
  const enviarMensaje = async () => {

    // e.preventDefault();

    setEnviado(true)

    if (!datos.nombre) {
      Swal.fire({
        customClass: {
          title: 'swalTitleColor'
        },
        icon: 'warning',
        title: '¡Campo vacío!',
        text: "Ingrese su nombre completo",
        confirmButtonText: `Aceptar`,
      })
      setEnviado(false)
      return

    } else if (!datos.telefono) {
      Swal.fire({
        customClass: {
          title: 'swalTitleColor'
        },
        icon: 'warning',
        title: '¡Campo vacío!',
        text: "Ingrese su número",
        confirmButtonText: `Aceptar`,
      })
      setEnviado(false)
      return
    } else if (!datos.correo) {
      Swal.fire({
        customClass: {
          title: 'swalTitleColor'
        },
        icon: 'warning',
        title: '¡Campo vacío!',
        text: "Ingrese su correo electrónico",
        confirmButtonText: `Aceptar`,
      })
      setEnviado(false)
      return
    } else if (!datos.mensaje) {
      Swal.fire({
        customClass: {
          title: 'swalTitleColor'
        },
        icon: 'warning',
        title: '¡Campo vacío!',
        text: "Ingrese su mensaje",
        confirmButtonText: `Aceptar`,
      })
      setEnviado(false)
      return
    } else if (!datos.area) {
      Swal.fire({
        customClass: {
          title: 'swalTitleColor'
        },
        icon: 'warning',
        title: '¡Campo vacío!',
        text: "Ingrese su área de su interés",
        confirmButtonText: `Aceptar`,
      })
      setEnviado(false)
      return
    } else {

      axios.post(baseUrl + '/user/contacto/negocio', {
        nombre: datos.nombre,
        telefono: datos.telefono,
        correo: datos.correo,
        mensaje: datos.mensaje,
        area: datos.area
      }).then(response => {
        setEnviado(false);
        setDatos({})
        Swal.fire({
          customClass: {
            title: 'swalTitleColor'
          },
          icon: 'success',
          title: '¡Mensaje enviado!',
          text: "En breve nos pondremos en contacto contigo",
          confirmButtonText: 'Aceptar',

        })
          .then((result) => {
            if (result.isConfirmed) {
              setDatos({})
              setEnviado(false);
              // window.location.href = "/inicio";
            }
          })
      }).catch(e => {
        console.log(e);
      });
    }
  }


  return (
    <div className='mainContainerContacto'>

      <h3>CONTÁCTANOS</h3>
      <div className='borderDecoradorContacto'></div>
      <p>QUEREMOS SABER DE TI</p>

      <div className="cont-div1-form-contacto">
        <div className="contenedor-formulario-contacto">

          <form >

            <div className="cont-name-cel-form">
              <input type="text" required name="nombre" value={datos?.nombre} onChange={handleChange} placeholder="Nombres y Apellidos" />
              <input type="text" maxLength="10" required value={datos?.telefono} name="telefono" onChange={handleChange} placeholder="Teléfono" />
            </div>



            <div className="cont-name-cel-form">
              <input type="email" required name="correo" value={datos?.correo} onChange={handleChange} placeholder="Correo electrónico" />
              <select name="area" value={datos?.area} onChange={handleChange} required>
                <option defaultValue>Seleccione área de interés</option>
                <option value="Comercialización" >Comercialización</option>
                <option value="Asesoria legal" >Asesoria legal</option>
                <option value="Otros" >Otros</option>
              </select>
            </div>

            <textarea className="cont-form-contacto-textarea" rows="4" value={datos?.mensaje} placeholder="Mensaje" required name="mensaje" onChange={handleChange} autoComplete="off" >

            </textarea>

            <div className="contenedor-input-contacto">
              {enviado ?
                <div className="spinner-border" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                :
                <input onClick={() => enviarMensaje()} type="submit" value="Enviar" />
              }
            </div>
          </form>
        </div>
      </div>

    </div>

  )
}

export default Index