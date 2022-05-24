import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, postPokemon } from "../actions/actions";
import css from './css/CreatePokemon.module.css'



export default function CreatePokemon(){
     const dispatch = useDispatch()
     const navigate = useNavigate()
    

     function validation(input){
        
        let error = {required: false};
        
        if(!input.nombre){
            error.nombre = 'Ingrese el nombre del pokemon'
            error.required = true;
        }else if (input.nombre.length>12){ 
            error.nombre = 'Nombre invalido, acepta hasta 12 caracteres';
            error.required = true
        }
        
        if(input.vida <= 0 || input.vida > 200 || isNaN(input.vida)){
            error.vida = 'Debe tener una vida mayor a 0 y menor a 200'
            error.required = true
        }
        
        if(input.ataque <= 0 || input.ataque > 200 || isNaN(input.ataque)){
            error.ataque = 'Debe tener un ataque mayor a 0 y menor a 200'
            error.required = true
        }
    
        if(input.defensa <= 0 || input.defensa > 200 || isNaN(input.defensa)){
            error.defensa = 'Debe tener una defensa mayor a 0 y menor a 200'
            error.required = true
        }
    
        if(input.velocidad <= 0 || input.velocidad > 200 || isNaN(input.velocidad)){
            error.velocidad = 'Debe tener una velocidad mayor a 0 y menor a 200'
            error.required = true
        }
    
        if(input.peso <= 0 || input.peso > 200 || isNaN(input.peso)){
            error.peso = 'Debe tener un peso mayor a 0 y menor a 200'
            error.required = true
        }
        if(input.altura <= 0 || input.altura > 200 || isNaN(input.altura)){
            error.altura = 'Debe tener una altura mayor a 0 y menor a 200'
            error.required = true
        }
        
        return error;
    }
     
     const tipos = useSelector((state) => state.types)
     const [error, setError] = useState({required:true})
     const allPokemones = useSelector((state) => state.pokemones)

     

    const [input , setInput] = useState({
        img: '',
        nombre:'',
        vida:'',
        ataque:'',
        defensa:'',
        velocidad:'',
        altura:'',
        peso:'',
        tipo:[]
    })

    useEffect(()=>{
        dispatch(getTypes());
    }, []);

    useEffect(()=>{
        if(input.tipo.length === 0 || input.tipo.length > 2 ){
            setError({...error, required: true, tipo: 'Tiene que tener almenos 1 tipo y maximo 2'})
        } 
    }, [input.tipo, error.required])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value.toLowerCase()
        })
        let objError = validation({...input,[e.target.name]: e.target.value})
        setError(objError)
    }

    
    function handleSelect(e){
    setInput({
        ...input,
        tipo: [...input.tipo , e.target.value]
            })
    let objError = validation({...input,[e.target.name]: e.target.value})
    setError(objError)
    }

    function clearTypes(e){
        e.preventDefault();
        setInput({
            ...input,
            tipo:[]
        })
    }

    function handleSubmit(e){
        let crear = true
        let exist = false;
        allPokemones.forEach(e => {
            if(e.nombre === input.nombre){
                exist=true;
            }
        })


        if(error.required){
            e.preventDefault();
            alert('Debe completar toda la informacion requerida')
            crear=false;
        }
        
        if(exist){
            alert('Este pokemon ya existe')
            crear=false
        }
        if(crear) {
            e.preventDefault();
            dispatch(postPokemon(input));
            alert('Pokemon creado con exito');
            setInput({
                img: '',
                nombre:'',
                vida:'',
                ataque:'',
                defensa:'',
                velocidad:'',
                altura:'',
                peso:'',
                tipo:[]
            })
            navigate('/home')
        }
       
    }
    return (
        <div className={css.container_createPokemon}>
            <div className={css.pokebola}></div>
            <div className={css.container_card}>

                <div className={css.container_button}>
                    <Link to='/home'><button>Volver al Inicio</button></Link>
                </div>
                
                <h1>Crear nuevo Pokemon</h1>
                <form className={css.form} action="" onSubmit={(e)=> handleSubmit(e)}>
                    <div className={css.container_form}>
                        <div className={css.container_input1}>
                            <label className={css.input1} htmlFor="" >*Nombre: </label>
                            <input autocomplete='off' type="text" value={input.name} name="nombre" onChange={handleChange}/>
                        </div>
                        
                        {!error.nombre ? null : (<span className={css.errorInput}>{error.nombre}</span>)}

                        <div className={css.container_input2}>
                        <label htmlFor="" className={css.input2}>*Vida: </label>
                        <input autocomplete='off' type="number" value={input.hp} name="vida" onChange={handleChange}/>
                        </div>
                        

                        {!error.vida ? null : (<span className={css.errorInput}>{error.vida}</span>)}

                        <div className={css.container_input3}>
                        <label htmlFor="" className={css.input3}>*Defensa: </label>
                        <input autocomplete='off' type="number" value={input.def} name='defensa' onChange={handleChange} />
                        </div>
                        

                        {!error.defensa ? null : (<span className={css.errorInput}>{error.defensa}</span>)}

                        <div className={css.container_input4}>
                        <label htmlFor="" className={css.input4}>*Ataque: </label>
                        <input autocomplete='off' type="number" value={input.attack} name='ataque' onChange={handleChange} />
                        </div>
                        

                        {!error.ataque ? null : (<span className={css.errorInput}>{error.ataque}</span>)}

                        <div className={css.container_input5}>
                        <label htmlFor="" className={css.input5}>*Velocidad: </label>
                        <input autocomplete='off' type="number" value={input.speed} name='velocidad' onChange={handleChange}/>
                        </div>
                        

                        {!error.velocidad ? null : (<span className={css.errorInput}>{error.velocidad}</span>)}

                        <div className={css.container_input6}>
                        <label htmlFor="" className={css.input6}>*Altura: </label>
                        <input autocomplete='off' type="number" value={input.height} name='altura' onChange={handleChange}/>
                        </div>
                        

                        {!error.altura ? null : (<span className={css.errorInput}>{error.altura}</span>)}


                        <div className={css.container_input7}>
                        <label htmlFor="" className={css.input7}>*Peso: </label>
                        <input autocomplete='off' type="number" value={input.weight} name='peso' onChange={handleChange}/>
                        </div>
                        

                        {!error.peso ? null : (<span className={css.errorInput}>{error.peso}</span>)}

                        <div className={css.container_input8}>
                        <label htmlFor="" className={css.input8}>Imagen: </label>
                        <input autocomplete='off' type="text" value={input.img} name='img' onChange={handleChange} />
                        </div>
                        
                        <div className={css.container_input9}>
                        <label htmlFor="" className={css.input9}>Seleccionar maximo 2 tipos:</label>
                        <select name="" id="" onChange={e =>handleSelect(e)}>
                        {
                            tipos?.map((e) => {
                                return (
                                    <option value={e.tipo} name={e.tipo} key={e.id}>{e.tipo}</option>
                                )
                            })
                        }
                        </select>
                        </div>
                        
                        <ul><li>{"Tendra estos tipos: "+ input.tipo.map(e =>`${e} `)}</li></ul>
                        {!error.tipo? null : (<span className={css.errorInput1}>{error.tipo}</span>)}
                        <div>
                        <button className={css.button_clean} onClick={e=>clearTypes(e)}>Limpiar tipos de Pokemons</button>
                        <button className={css.button_create} type="submit">Crear Pokemon</button>
                        </div>
                    </div>
                </form>
        
            </div>
        </div>
           
    )


}