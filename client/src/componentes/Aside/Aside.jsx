import React from "react";
import { Link } from "react-router-dom";
import Options from "./Options/Options.jsx";
import css from "./Aside.module.css";
import marco from "../imagenes/marcoAside.png";

export default function Aside({
  handleSort,
  handleFilterDB,
  handleFilterType,
  handleClick,
  types,
}) {
  return (
    <div className={css.container_padre_aside}>
      <div className={css.container_marco}>
        <img className={css.marcoAside} src={marco} alt="" />
      </div>
      <div className={css.container_aside}>
        <div className={css.container_title}>
          <h2 className={css.title}>Filtros</h2>
        </div>

        <div className={css.container_label}>
          <div className={css.container_label1}>
            <label className={css.label_filter} htmlFor="">
              Traidos de:{" "}
            </label>

            <select
              className={css.select_filter}
              name=""
              id=""
              onChange={(e) => handleFilterDB(e)}
              defaultValue="all"
            >
              <option value="all">DB y API</option>
              <option value="api">API</option>
              <option value="creado">Base de datos</option>
            </select>
          </div>
          <div className={css.container_label2}>
            <label className={css.label_filter1} htmlFor="">
              Tipo de pokemon:{" "}
            </label>
            <select
              className={css.select_filter}
              name=""
              id=""
              onChange={(e) => handleFilterType(e)}
              defaultValue="all"
            >
              <option value="all">Todos</option>
              {types?.map((e) => {
                return <Options tipo={e.tipo} key={e.id} />;
              })}
            </select>
          </div>
          <div className={css.container_label3}>
            <label className={css.label_filter2} htmlFor="">
              Alfabeticamente / Ataque{" "}
            </label>
            <select
              className={css.select_filter}
              name=""
              id=""
              onChange={(e) => handleSort(e)}
            >
              <option hidden>Elija una opcion</option>
              <option value="asc">A - Z</option>
              <option value="des">Z - A</option>
              <option value="attack">Ataque</option>
            </select>
          </div>
        </div>

        <div className={css.container_button_clearFilter}>
          <button
            className={css.button_clearFilter}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Limpiar Filtros
          </button>
          <Link to="/pokemons">
            <button className={css.button_clearFilter1}>Crear Pokemon</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
