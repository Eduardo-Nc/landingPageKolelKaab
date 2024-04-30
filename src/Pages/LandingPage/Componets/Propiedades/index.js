import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';
import '../../../Home/Home.css';


import ReactSimplyCarousel from 'react-simply-carousel';
import { Link } from 'react-router-dom';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { findPropiedadesUltimos } from '../../../../Redux/actions/propiedadesAction';

import Arrowleft from '../../../../img/iconos/arrowleft.png';
import ArrowRight from '../../../../img/iconos/arrowRight.png';

const Index = () => {

  const dispatch = useDispatch();
  const { propiedadesUltimosData } = useSelector(state => state.propiedades);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    dispatch(findPropiedadesUltimos(false))
  }, [])

  return (
    <div className='mainContPropiedades2'>

      <h3>Propiedades</h3>
      <div className='borderDecoradorPropiedades'></div>
      <p></p>

      <div className="cont-div-main-propiedades2">
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={[{ minWidth: 768, maxWidth: 992, itemsToShow: 5 }, { maxWidth: 767, itemsToShow: 1 }]}
          itemsToScroll={1}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: 'center',
              background: 'rgba(0, 0, 0, 0.3)',
              border: 'none',
              borderRadius: '100%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '10px',
              height: 35,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              width: 35,
              // marginLeft: '10px'
            },
            children: <img style={{ width: '13px', height: '13px', objectFit: 'contain' }} src={ArrowRight} />,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: 'center',
              background: 'rgba(0, 0, 0, 0.3)',
              border: 'none',
              borderRadius: '100%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '10px',
              height: 35,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              width: 35,
              // marginRight: '10px'
            },
            children: <img style={{ width: '13px', height: '13px', objectFit: 'contain' }} src={Arrowleft} />,
          }}
          // responsiveProps={[
          //   {
          //     itemsToShow: 1,
          //     itemsToScroll: 1,
          //     minWidth: 700,
          //   },
          // ]}
          autoplay={false}
          speed={400}
          easing="linear"
        >

          {propiedadesUltimosData.map((item, index) => {
            return (
              <Link to={`/descripcion-propiedad/${item._id}`} key={item._id} title="Ver" className="cont-target-item-propiedad-home">
                <div className="cont-target-item-propiedad-home-item-photo">
                  <img src={item.caratula_propiedad} />
                </div>
                <div className="cont-target-item-propiedad-home-item-details">
                  <strong>{item?.nombre ? item?.nombre : ""}</strong>
                  <label>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(item?.precio ? item?.precio : 0)}</label>
                  <div className="cont-tipo-oferta-nombre">
                    <label>{item?.tipoOferta?.nombre ? item?.tipoOferta?.nombre : ""}</label>
                  </div>
                </div>
              </Link>
            )
          })}

        </ReactSimplyCarousel>
      </div>
    </div>
  )
}

export default Index