import React, { Fragment } from 'react';
import './RecoverPassword.css';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import { useForm } from '../../hooks/useForm';


// Bootstrap


// Redux
import { useDispatch } from 'react-redux';
import { recoverPasswordStart } from '../../Redux/actions/loginAction';



const RecoverPassword = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        email: ''
    })

    const { email } = formValues;


    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(recoverPasswordStart(email.trim()))
        reset();

    }




    return (
        <Fragment>

            <div className="contenedor-principal-login animate__animated animate__fadeIn animate__faster 2s">
                <div className="contenedor-logo-Flotilla">
                    <img src={Logo} alt="Logo" />
                </div>
                <form style={{ background: "" }} onSubmit={handleLogin}>
                    <h3>Recuperación de contraseña</h3>
                    <p>Proporcione su correo electrónico para enviar instrucciones de recuperación de contraseña</p>

                    <div className="contenedor-ico-input">
                        <div className="ico-input">
                            <i className="fas fa-user"></i>
                        </div>

                        <div className="contenido-input-form-login">
                            <input type="email" placeholder="Correo" name="email" value={email} onChange={handleInputChange} />
                        </div>
                    </div>

                    <input style={{ marginTop: '20px' }} type="submit" value="Enviar" />

                    <h5><Link to="/login"><i className="fas fa-arrow-left"></i> Atras</Link></h5>

                </form>

                <div className="cont-aviso-privacidad">
                    {/* <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/privacidad">Terms and Conditions</Link> */}
                </div>

            </div>

        </Fragment>
    )
}



export default RecoverPassword;