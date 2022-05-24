import React from "react";
import Aside from "./Aside/Aside.jsx";
import Main from "./Main/Main.jsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getPokemones,
  filterByType,
  filterCreatedDB,
  getTypes,
  orderByName,
  getNamePokemon,
} from "../actions/actions.js";
import NavBar from "./Navbar/Navbar.jsx";
import logo from "./imagenes/pokelogo.png";
import css from "./css/Home.module.css";
import noExiste from './imagenes/noexist.jpg';


export default function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemones);
  const types = useSelector((state) => state.types);

  
  //----------PAGINADO

  const [page, setPage] = useState(1);                                            // Estado arranca 1, PAGINA ACTUAL
  const [pokemonsPage, setPokemonsPage] = useState(12);                           // estado de cuantos pokemons muestro
  const indexOfLastPokemon = page * pokemonsPage;                                 // indice del ultimo pokemon que voy a mostrar
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPage;                  // indice del primer pokemon que voy a mostrar
  const currentPokemons = pokemons.slice(indexOfFirstPokemon,indexOfLastPokemon); // agarro el arreglo de todos los pokemons que quiero mostrar

  const paginado = (pagePokemon) => {                                             // change
    setPage(pagePokemon);
  };  

  //------------------>

  
  // ASIDE ----------------->

  function handleClick(e) {
    setErrorInput(false)
    setPage(1);
    e.preventDefault();
    dispatch(getPokemones());
  }
  function handleFilterType(e) {
    setErrorInput(false)
    setPage(1);
    dispatch(filterByType(e.target.value));
    
  }
  function handleFilterDB(e) {
    setErrorInput(false)
    setPage(1);
    dispatch(filterCreatedDB(e.target.value));
    
  }

  const [order, setOrder] = useState("");
  function handleSort(e) {
    e.preventDefault();
    setErrorInput(false)
    setPage(1);
    dispatch(orderByName(e.target.value));
    
    setOrder(`Ordenado ${e.target.value}`);
  }


  //--------------------------->

  useEffect(() => {
    dispatch(getPokemones());
    dispatch(getTypes());
  }, [dispatch]);

  
  //NAVBAR
  const [errorInput,setErrorInput] =useState('')
  const [name, setName] = useState("");
  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setErrorInput('')
    let nameExist = false
    pokemons.forEach(element => element.nombre.toLowerCase() === name.toLowerCase() ? nameExist = true : null)
    nameExist? dispatch(getNamePokemon(name)) : setErrorInput(
      (<div>
        <img width="300px" heigth="auto" className={css.imgNoExiste} src={noExiste} alt='noExiste'/>
        <h4 className={css.fontSize}>No existe lo que intenta buscar</h4>
       </div>))
    setName("");
  }

  //filtrado x back
  /* function handleFilterBack(e){
    e.preventDefault()
    dispatch(getPokemonesXAtack())
  } */


  // ----------->

  return (
    <div className={css.home_container}>

      <div className={css.home_navbar_container}>
        <img className={css.img_navbar_home} src={logo} alt="" />
        {/* <button onClick={(e) => handleFilterBack(e)}>filtrado</button> */}
        <div className={css.pokebola}></div>
        <NavBar
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          name={name}
        />
      </div>
      
      <div className={css.container_asideMasMain}>

        <div className={css.container_aside}>
          <Aside
            types={types}
            handleSort={handleSort}
            handleFilterDB={handleFilterDB}
            handleFilterType={handleFilterType}
            handleClick={handleClick}
          />
        </div>

        <div></div>

        <div className={css.container_main}>
         <Main
            currentPokemons={currentPokemons}
            paginado={paginado}
            pokemons={pokemons}
            pokemonsPage={pokemonsPage}
            errorInput={errorInput}
          /> 
          
        </div>
        
      </div>
    </div>
  );
}
