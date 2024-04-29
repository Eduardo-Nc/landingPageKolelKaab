import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Login.css';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import Soporte from '../../img/soporte.png';
import { useForm } from '../../hooks/useForm';


import { loginStart } from '../../Redux/actions/loginAction';


const Login = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.menu)

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const [viewPass, setViewPass] = useState(false);

    const { email, password } = formValues;


    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(loginStart(email.trim(), password.trim()))

    }



    return (
        <Fragment>
            <div className="contenedor-principal-login animate__animated animate__fadeIn animate__faster 2s">
                <div className="contenedor-logo-Flotilla">
                    <img src={Logo} alt="Logo" />
                </div>
                <form style={{ background: "" }} onSubmit={handleLogin}>
                    {/* <label>Ingresar</label> */}

                    <div className="contenedor-ico-input">
                        <div className="ico-input">
                            <i className="fas fa-user"></i>
                        </div>

                        <div className="contenido-input-form-login">
                            <input type="email" placeholder="Correo" name="email" value={email} onChange={handleInputChange} />
                        </div>
                    </div>


                    <div className="contenedor-ico-input">
                        <div className="ico-input">
                            <i className="fas fa-lock"></i>
                        </div>

                        <div className="contenido-input-form-login">
                            <input type={!viewPass ? "password" : "text"} placeholder="Contraseña" name="password" value={password} onChange={handleInputChange} />
                        </div>

                        <div onClick={() => { setViewPass(!viewPass) }} className="btn-eye-pass" style={{ position: 'absolute', marginLeft: '23%', cursor: 'pointer' }}>
                            {viewPass ?
                                <i style={{ color: 'black', fontSize: '22px', marginTop: '4px' }} className="fas fa-eye-slash"></i>
                                :
                                <i style={{ color: 'black', fontSize: '22px', marginTop: '4px' }} className="fas fa-eye"></i>
                            }
                        </div>
                    </div>


                    <h5 style={{ marginTop: '10px' }}><Link to="/recover-password">Olvidé mi contraseña</Link></h5>


                    {
                        loading ?
                            <div style={{ marginTop: '10px' }} className="spinner-border text-light" role="status">
                                <span className="sr-only">Espere...</span>
                            </div>
                            :
                            <input type="submit" value="Iniciar Sesión" />
                    }


                </form>

                <div className="cont-aviso-privacidad">
                    {/* <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terminos-condiciones">Terms and Conditions</Link> */}
                </div>

                {/* <div className="cont-btn-soporte">
                    <Link to="/soporte">
                        <img alt="Logo" src={Soporte} />
                    </Link>

                </div> */}
            </div>
        </Fragment>
    )
}



export default Login;