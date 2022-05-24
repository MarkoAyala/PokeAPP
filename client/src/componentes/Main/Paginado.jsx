import React from "react";
import css from './Paginado.module.css'

export default function Paginado({ pokemonsPage, pokemons, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(pokemons / pokemonsPage); i++) {
    pageNumbers.push(i);
  } // divido cant personajes por la cantidad de personajes por pagina
  // para saber cuantas paginas voy a tener
  return (
    <div>
        <ul className={css.ul}>
        {pageNumbers?.map((number) => {
          return (
            <li className={css.li} key = {number}>
              <a href="#" onClick={() => paginado(number)}>{number}</a>
            </li>
          );
        })}
      </ul>
    </div>
      
  );
}
