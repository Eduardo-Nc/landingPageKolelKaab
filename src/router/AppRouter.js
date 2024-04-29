import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../Redux/actions/loginAction';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import Logo from '../img/logo.png';


//rutas publicas

import LandingPage from '../Pages/LandingPage';

import Home from '../Pages/Home/Home';
import Descripcion from '../Pages/Descripcion/Descripcion';
import Contacto from '../Pages/Contacto/Contacto';

import Nosotros from '../Pages/Nosotros/Nosotros';
import NuestrasPropiedades from '../Pages/NuestrasPropiedades/NuestrasPropiedades';
import Blog from '../Pages/Blog/Blog';
import DetalesBlog from '../Pages/DetalesBlog/DetalesBlog';




import RecoverPassword from '../Pages/RecoverPassword/RecoverPassword';
import ResetPassword from '../Pages/RecoverPassword/ResetPassword';
import Login from '../Pages/Login/Login';
import Privacidad from '../Pages/Privacidad/Privacidad';
import Terminos from '../Pages/Privacidad/Terminos';
import Soporte from '../Pages/Soporte/Soporte';

//rutas privadas
import Dashboard from '../Pages/Dashboard/Dashboard';
import Users from '../Pages/Users/Users';
import Profile from '../Pages/Profile/Profile';
import Settings from '../Pages/Settings/Settings';

import Blogs from '../Pages/Blogs/Blogs';
import Lotes from '../Pages/Lotes/Lotes';
import Propiedades from '../Pages/Propiedades/Propiedades';
import Desarrollos from '../Pages/Desarrollos/Desarrollos';

import Cotizador from '../Pages/Cotizador/Cotizador';
import CotizadorInteractivo from '../Pages/CotizadorInteractivo/CotizadorInteractivo';





const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid, idRol } = useSelector(state => state.login);

    useEffect(() => {
        dispatch(startChecking());
    }, [])

    if (checking) {

        return (
            <div className="content-spinner">

                <div className="cont-img-loading">
                    <img src={Logo} alt="Logo" />
                </div>

                {/* <span className="loader"></span> */}
                <div className="lds-ripple"><div></div><div></div></div>


                {/* <div className="spinner-border" style={{ width: "3rem", height: "3rem", color: "white" }} role="status">
                    <span style={{ color: "white" }} className="sr-only">Loading...</span>
                </div> */}
            </div>
        );
    }

    return (
        <Router>

            <Switch>

                <PublicRoute
                    exact
                    path="/"
                    component={LandingPage}
                    isAuthenticated={!!uid}
                />

                <PublicRoute
                    exact
                    path="/inicio"
                    component={LandingPage}
                    isAuthenticated={!!uid}
                />

                {/* <PublicRoute
                    exact
                    path="/"
                    component={Home}
                    isAuthenticated={!!uid}
                />

                <PublicRoute
                    exact
                    path="/inicio"
                    component={Home}
                    isAuthenticated={!!uid}
                /> */}

                <PublicRoute
                    exact
                    path="/descripcion-propiedad/:id"
                    component={Descripcion}
                    isAuthenticated={!!uid}
                />

                <PublicRoute
                    exact
                    path="/contacto"
                    component={Contacto}
                    isAuthenticated={!!uid}
                />

                <PublicRoute
                    exact
                    path="/nosotros"
                    component={Nosotros}
                    isAuthenticated={!!uid}
                />

                <PublicRoute
                    exact
                    path="/nuestras-propiedades/:input"
                    component={NuestrasPropiedades}
                    isAuthenticated={!!uid}
                />

                <PublicRoute
                    exact
                    path="/nuestras-propiedades"
                    component={NuestrasPropiedades}
                    isAuthenticated={!!uid}
                />


                <PublicRoute
                    exact
                    path="/blog"
                    component={Blog}
                    isAuthenticated={!!uid}
                />


                <PublicRoute
                    exact
                    path="/blog-detalles/:id"
                    component={DetalesBlog}
                    isAuthenticated={!!uid}
                />


                <PublicRoute
                    exact
                    path="/login"
                    component={Login}
                    isAuthenticated={!!uid}
                />

                <PublicRoute
                    exact
                    path="/recover-password"
                    component={RecoverPassword}
                    isAuthenticated={!!uid}
                />



                <PublicRoute
                    exact
                    path="/resetpassword/:id"
                    component={ResetPassword}
                    isAuthenticated={!!uid}
                />


                <PublicRoute
                    exact
                    path="/soporte"
                    component={Soporte}
                    isAuthenticated={!!uid}
                />


                <PrivateRoute
                    exact
                    path="/dashboard"
                    component={Dashboard}
                    isAuthenticated={!!uid}
                />


                {
                    (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab") &&

                    <PrivateRoute
                        exact
                        path="/users"
                        component={Users}
                        isAuthenticated={!!uid}
                    />
                }

                {
                    (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab") &&
                    <PrivateRoute
                        exact
                        path="/propiedades"
                        component={Propiedades}
                        isAuthenticated={!!uid}
                    />
                }


                <PrivateRoute
                    exact
                    path="/cotizador"
                    component={Cotizador}
                    isAuthenticated={!!uid}
                />


                <PrivateRoute
                    exact
                    path="/cotizador-interactivo/:id"
                    component={CotizadorInteractivo}
                    isAuthenticated={!!uid}
                />


                <PrivateRoute
                    exact
                    path="/desarrollos"
                    component={Desarrollos}
                    isAuthenticated={!!uid}
                />

                {
                    (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab") &&
                    <PrivateRoute
                        exact
                        path="/lotes"
                        component={Lotes}
                        isAuthenticated={!!uid}
                    />
                }

                {
                    (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab") &&
                    <PrivateRoute
                        exact
                        path="/blogs"
                        component={Blogs}
                        isAuthenticated={!!uid}
                    />
                }

                <PrivateRoute
                    exact
                    path="/profile"
                    component={Profile}
                    isAuthenticated={!!uid}
                />

                <PrivateRoute
                    exact
                    path="/settings"
                    component={Settings}
                    isAuthenticated={!!uid}
                />


                <Redirect to="/dashboard" />
            </Switch>

        </Router>
    )
}


export default AppRouter;