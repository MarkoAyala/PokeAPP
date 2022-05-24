import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import css from './Navbar.module.css'

export default function NavBar({handleInputChange , handleSubmit , name }){

 
    return(
        <div className={css.container_navbar}>
            <label className={css.label_searchbar}>Buscar Pokemon</label>
            <SearchBar
            name={name}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            />
        </div>
    )
}