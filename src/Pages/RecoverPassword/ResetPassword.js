import React, { Fragment } from 'react';
import './RecoverPassword.css';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../../img/logo.png';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';

// Bootstrap


// Redux
import { useDispatch } from 'react-redux';
import { resetPasswordStart } from '../../Redux/actions/loginAction';


const ResetPassword = (params) => {

    const { id } = params.match.params
    !id && <Redirect to="/recover-password" />

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        password: '',
        confirmPassword: ''
    })

    const { password, confirmPassword } = formValues;


    const handleLogin = (e) => {
        e.preventDefault();

        // console.log(confirmPassword.length)

        if (password.length <= 0 || password === "") {
            Swal.fire({
                title: "Ingresa tu nueva contraseña",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (password.length < 6) {
            Swal.fire({
                title: "¡Advertencia!",
                text: "La contraseña debe ser de al menos 6 caracteres",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (confirmPassword.length <= 0 || confirmPassword === "") {
            Swal.fire({
                title: "Ingresa nuevamente la contraseña",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (confirmPassword.length < 6) {
            Swal.fire({
                title: "¡Advertencia!",
                text: "La contraseña debe ser de al menos 6 caracteres",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (password !== confirmPassword) {
            Swal.fire({
                title: "¡Advertencia!",
                text: "Las contraseñas no coinciden",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        }



        dispatch(resetPasswordStart(id, password))
        reset()
    }



    return (
        <Fragment>
            <div className="contenedor-principal-login animate__animated animate__fadeIn animate__faster 2s">
                <div className="contenedor-logo-Flotilla">
                    <img src={Logo} alt="Logo" />
                </div>
                <form style={{ background: "" }} onSubmit={handleLogin}>
                    <h3>Cambio de contraseña</h3>
                    <p>Crear una nueva contraseña</p>

                    <div className="contenedor-ico-input">
                        <div className="ico-input">
                            <i className="fas fa-lock"></i>
                        </div>

                        <div className="contenido-input-form-login">
                            <input type="password" placeholder="Nueva Contraseña" name="password" value={password} onChange={handleInputChange} />
                        </div>

                    </div>

                    <div style={{ marginTop: '10px' }} className="contenedor-ico-input">
                        <div className="ico-input">
                            <i className="fas fa-lock"></i>
                        </div>

                        <div className="contenido-input-form-login">
                            <input type="password" placeholder="Confirma tu Contraseña" name="confirmPassword" value={confirmPassword} onChange={handleInputChange} />
                        </div>
                    </div>



                    <input type="submit" value="Guardar" />

                    <h5><Link to="/login"><i className="fas fa-arrow-left"></i> Atras</Link></h5>

                </form>

            </div>
        </Fragment>
    )
}



export default ResetPassword;