import React from "react";
import gif from '../imagenes/loading1.gif'
import css from './Loading.module.css'

export default function LoadingScreen({ setLoading }) {
  return (
    <>
      
      <div className={css.container_gif}>
        <img src={gif} alt="no hay gif" width="100%" height="auto" />
      </div>

      <div className={css.setNone}>
        {setTimeout(() => {
          setLoading(false);
        }, 1000)}
      </div>
    </>
  );
}