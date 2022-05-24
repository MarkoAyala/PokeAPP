import React from "react";
import css from '../Navbar.module.css'

export default function SearchBar ({handleInputChange, handleSubmit, name}) {
    return (
        <div>
            <input
             className={css.input_searchbar}
             type="text"
             placeholder="Nombre"
             value={name}
             onChange={(e)=> handleInputChange(e)}
            />
            <button className={css.button_searchbar} type="submit" onClick={(e)=> handleSubmit(e)}>Buscar</button>


        </div>
    )
}