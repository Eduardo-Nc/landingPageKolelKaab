import React, { Fragment, useEffect, useState } from 'react';
import './Header.css';
import Swal from 'sweetalert2';
import moment from 'moment';
import { Link, NavLink } from 'react-router-dom';
import "moment/min/locales";
import 'moment/locale/es';



//Bootstrap
import { Toast, OverlayTrigger } from 'react-bootstrap';


// MATERIAL UI
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';



//Redux
import { useDispatch, useSelector } from 'react-redux';
import { abrirMenu, abrirNotificaciones } from '../../Redux/actions/uiAction';
import { startLogout } from '../../Redux/actions/loginAction';

//Images
import Campana from '../../img/icono-compana.png';
import IconoMenu from '../../img/icono-menu.png';
import Logo from '../../img/logo.png';



const Header = () => {

    const dispatch = useDispatch();

    const { surnames, name, rol, photo } = useSelector(state => state.login);



    // const mostrarImagen = (photo) => {
    //     Swal.fire({
    //         showCloseButton: true,
    //         imageUrl: photo,
    //         imageAlt: 'Foto de taller',
    //         background: 'none',
    //         padding: '0px',
    //         margin: '0px',
    //         imageHeight: '100%',
    //         imageWidth: '100%',
    //         showCancelButton: false,
    //         showConfirmButton: false,
    //     })
    // }


    const handleLogout = () => {

        Swal.fire({
            html:
                `
                <div style="overflow: hidden;" >
                <div style="width: 100%; display:flex; justify-content:center; align-items:center; margin-bottom:5px; overflow: hidden;">
                <div style="width: 43px; height: 43px; overflow: hidden; border-radius: 50%; display:flex; justify-content:center; align-items:center; "}}>
                <img style="width: 100%; height: 100%; object-fit: cover;"  src=${photo ? photo : Logo} alt="Logo"></img> <br></br> 
                </div>
                </div>
                ` +
                `<b>${name}</b> <br></br>` +
                '<p>¿Quieres salir de la sesión actual??</p></div>',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Salir',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(startLogout())
            }
        })
    }


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Fragment>

            <div className="cont-prin-header">

                <div className="cont-prin-1-header">
                    <div onClick={() => { dispatch(abrirMenu()) }}>
                        <img src={IconoMenu} alt="IconoMenu" />
                    </div>
                </div>

                <div className="cont-prin-2-header">
                    {/* <div className="cont-header-contador"></div> */}
                    <div onClick={() => { dispatch(abrirNotificaciones()) }} className="cont-header-campana">
                        <img src={Campana} alt="Campana" />
                    </div>
                    <div onClick={handleClick} className="cont-header-logo">
                        <div className="cont-header-logo-1">
                            <label className="cont-header-logo-1-label-1">{name.split(" ")[0] + " " + surnames.split(" ")[0]}</label>
                            <label className="cont-header-logo-1-label-2">{rol}</label>
                        </div>
                        <div className="cont-header-logo-2">
                            <div>
                                <img src={photo ? photo : Logo} alt="Logo" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>



            {/*  */}

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem style={{ width: '180px' }}>
                    <Link className="cont-link-profile" to="/profile">
                        <Avatar alt={name.split(" ")[0] + " " + surnames.split(" ")[0]} src={photo ? photo : Logo} /> Perfil
                    </Link>
                </MenuItem>

                <Divider />

                <MenuItem style={{ width: '180px' }}>
                    <Link className="cont-link-profile" to="/settings">
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Configuración
                    </Link>
                </MenuItem>
                <MenuItem style={{ width: '180px' }} onClick={() => { handleLogout() }}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Cerrar Sesión
                </MenuItem>
            </Menu>


        </Fragment >
    )
}


export default Header;