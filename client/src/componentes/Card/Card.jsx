import React from "react";
import css from './Card.module.css'
import { Link } from "react-router-dom";

export default function Card({creado,name,img, tipo, id,ataque}){
    return (
        <div className={creado? css.containerOneDb : css.containerOne} key={id}>
            <img src={img} alt="not found"/> <hr />
            <div className={css.container_title}>
                <h3><Link className={css.link} to={`/home/${id}`}>{name.toUpperCase()}</Link></h3>
            </div> <hr />
            <div className={css.container_info}>
                <div className={css.container_info_ataque}>
                    <h3>{ataque}</h3>
                    <span>Ataque</span>
                </div>
                <div className={css.container_info_tipo}>
                    <h3>{tipo + (' ')}</h3>
                    <span>Tipos</span>
                </div>
            </div>
         
            
        </div>
    )
}