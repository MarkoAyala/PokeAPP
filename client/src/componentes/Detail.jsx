import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
import { deletePokemon, getDetail } from "../actions/actions";
import { useEffect } from "react";
import loading from "./imagenes/loading.gif";
import css from './css/Detail.module.css'

export default function Detail(){
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate= useNavigate()

    useEffect(() => {
        dispatch(getDetail(id));
        return (function clean(){
            dispatch(getDetail('clear'))
        })
    },[dispatch])


    const myPokemon = useSelector((state) => state.detail);



    function handleDelete(){
        dispatch(deletePokemon(id));
        navigate('/home')
    }

    if(myPokemon.length>0){
        return (
            <div className={css.container_detail}>
                
                        <div className={css.container_card}>
                        {
                    myPokemon[0].creado && (<button onClick={handleDelete}>Eliminar pokemon</button>)
                        }
                            <h1>{myPokemon[0].nombre.toUpperCase()}</h1>
                            <img className={css.img} src={myPokemon[0].img} alt="" /> 
                                <div className={css.container_ataque}>
                                     <h3>{myPokemon[0].ataque}</h3>
                                     <span>Ataque</span>
                                </div> 
                            <ul className={css.ul}>
                                <hr />
                                <div className={css.div_container}>
                                    <li className={css.li_item}>{myPokemon[0].vida}</li>
                                    <li className={css.li_item}>{myPokemon[0].defensa}</li>
                                    <li className={css.li_item}>{myPokemon[0].velocidad}</li>
                                    <span className={css.li_item}>Vida</span>
                                    <span className={css.li_item}>Defensa</span>
                                    <span className={css.li_item}>Velocidad</span>
                    
                                </div> <hr />
                                <div className={css.div_container2}>
                                    <li className={css.li_item}>{myPokemon[0].altura}</li>
                                    <li className={css.li_item}>{myPokemon[0].peso}</li>
                                    <li className={css.li_items}>{!myPokemon[0].creado? myPokemon[0].tipo + ' ': myPokemon[0].tipes.map(e => e.tipo + (' '))}</li>
                                    <span className={css.li_item}>Altura</span>
                                    <span className={css.li_item}>Peso</span>
                                    <span className={css.li_item}>Tipo/s</span>
                                </div> <hr className={css.hr}/>
                            </ul>
                            <Link to ='/home'><button className={css.button}>Volver</button></Link>
                        </div> 
                    
                
                
            </div>
        )
    } else{
        return (
            <div className={css.container_detail}>
                
                        <div className={css.container_card2}>
                            <img className={css.loading} src={loading} alt="" width="100px" height="100px" />
                        </div> 
                    
                
                
            </div>
        )
    }
}