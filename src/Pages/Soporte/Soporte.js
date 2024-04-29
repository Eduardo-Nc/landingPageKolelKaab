import React, { Fragment, useState } from 'react';
import './Soporte.css';
import '../Privacidad/Privacidad.css';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import moment from 'moment';
import Swal from 'sweetalert2';
import axios from 'axios';



const Soporte = () => {

    const baseUrl = process.env.REACT_APP_API_URL;

    const initialState = {
        nombre: '',
        correo: '',
        motivo: '',
        descripcion: '',
        destinatario: 'ulises.coba@ativar.com.mx'
        // destinatario: 'eduardo-negron@live.com'
    }



    const [cargando, setCargando] = useState(false);
    const [data, setData] = useState(initialState);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    // console.log(data)

    const enviarSoporte = async (e) => {

        e.preventDefault()

        if (data.nombre === '') {
            Swal.fire({
                text: `Name required`,
                icon: 'warning',
                confirmButtonText: "accept",
                timer: "4000"
            })
            return
        } else if (data.correo === '') {
            Swal.fire({
                text: `Mail required`,
                icon: 'warning',
                confirmButtonText: "accept",
                timer: "4000"
            })
            return
        } else if (data.motivo === '') {
            Swal.fire({
                text: `Necessary reason`,
                icon: 'warning',
                confirmButtonText: "accept",
                timer: "4000"
            })
            return
        } else if (data.descripcion === '') {
            Swal.fire({
                text: `Description required`,
                icon: 'warning',
                confirmButtonText: "accept",
                timer: "4000"
            })
            return
        }

        setCargando(true)

        try {
            await axios.post(baseUrl + '/user/soporte', { data })
                .then(response => {
                    setCargando(false)
                    setData(initialState)

                    // alert(response.data.msg)
                    Swal.fire({
                        title: "¡Sent!",
                        text: `We will contact you as soon as possible`,
                        icon: 'success',
                        confirmButtonText: "accept",
                        timer: "9000"
                    });

                })
        } catch (error) {
            setCargando(false)
            setData(initialState)
            Swal.fire({
                title: "¡Error!",
                text: `Failed to send mail`,
                icon: 'error',
                confirmButtonText: "accept",
                timer: "4000"
            });
        }

    }

    return (
        <div className="cont-prin-privacidad animate__animated animate__fadeInLeft animate__faster 2s">

            <div className="cont-header-privacidad">
                <div className="cont-btn-back">
                    <Link to="/">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                </div>

                <div className="cont-logo-privacidad">
                    <div>
                        <img src={Logo} />
                    </div>
                </div>
            </div>

            <div className="cont-text-privacidad">

                <div className="cont-title-privacidad">
                    <h1>Technical Support</h1>
                    <p>Do you need help? Contact us</p>
                </div>

                <div className="cont-parrafos-privacidad">
                    <div className="cont-form-soporte">
                        <form onSubmit={enviarSoporte}>
                            <input name="nombre" value={data.nombre} onChange={handleChange} type="text" placeholder="Name" />
                            <input name="correo" value={data.correo} onChange={handleChange} type="email" placeholder="Mail" />
                            <input name="motivo" value={data.motivo} onChange={handleChange} type="text" placeholder="Reason" />
                            <textarea name="descripcion" value={data.descripcion} onChange={handleChange} placeholder="Description" ></textarea>

                            {
                                cargando ?
                                    <div className="spinner" style={{ width: '50px', height: '50px', borderLeftColor: 'blue', marginTop: '10px' }}></div>
                                    :
                                    <input type="submit" style={{ marginTop: '10px' }} value="Send" />
                            }
                        </form>
                    </div>
                </div>

            </div>

            <div className="footer-back-privacidad">
                <h2>&copy; {moment().format('YYYY')} COPYRIGHT BEYONDLIFE</h2>
            </div>

        </div>
    )
}



export default Soporte;