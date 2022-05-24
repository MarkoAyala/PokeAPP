import React from "react";
import Paginado from "./Paginado";
import Card from "../Card/Card.jsx";
import css from './Main.module.css';
import pokemones from '../imagenes/pokemonesMain.png'
import LoadingScreen from "../Loading/Loading";
import { useState } from "react";

export default function Main({currentPokemons, paginado, pokemons , pokemonsPage, errorInput}){
    const [loading, setLoading] = useState(true);



    if(loading){
        return (
            <div className={css.container_padre_main}>
            <div className={css.container_img}>
                <h2 className={css.title_main}>BRANCH MARKO</h2>
                <img className={css.img_main} src={pokemones} alt="" />
            </div>
            
             <div className={css.container_cards1}>
                <LoadingScreen setLoading={setLoading} />
                <h4>Cargando...</h4>
             </div>
            
            
        </div>
        )
    } else{
        return (
            <div className={css.container_padre_main}>
                <div className={css.container_img}>
                    <h2 className={css.title_main}>PokeHenrys</h2>
                    <img className={css.img_main} src={pokemones} alt="" />
                </div>
                
                 <div className={css.container_cards}>
                {   
                    errorInput? errorInput :  currentPokemons.length>0 ?  currentPokemons.map(element => {
                        return (
                            <Card creado={element.creado? true : false} name = {element.nombre} img={element.img} tipo={ element.creado? element.tipes[0].tipo : element.tipo} key={element.id} ataque={element.ataque} id={element.id}/>
                        )
                       
                    }) : (<h1>No existen pokemones de este tipo</h1>)
                }         
                
                    
                
    
                </div>
                    {
                        pokemons>12? <Paginado pokemonsPage = {pokemonsPage} pokemons={pokemons.length} paginado={paginado}/> : null
                    }
                    
                
                
            </div>
        )
    }
    
}