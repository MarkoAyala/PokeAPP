import React from 'react';
import {Link} from 'react-router-dom';
import css from './LandingPage.module.css'
import imagen from './imagenes/pokeapiPNG.png'

export default function LandingPage(){
    return (
        <div className={css.div_landing_container}>
            <img src={imagen} alt="no encuentro" className={css.image_landing}/>
            <div className={css.container_button}>
            <Link to ='/home' className={css.link}>
                <button className={css.button_landing}>Ingresar</button>
            </Link>
            </div>
        </div>
    )
}