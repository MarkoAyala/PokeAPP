import React, { Fragment } from 'react'
import { Route , Routes } from 'react-router-dom'
import './App.css' ; 
import LandingPage from './componentes/LandingPage';
import Home from './componentes/Home';
import CreatePokemon from './componentes/CreatePokemon';
import Detail from './componentes/Detail';




export default function App() {
  return (
    <>
        <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/pokemons' element={<CreatePokemon/>}/>
        <Route exact path='/home/:id' element={<Detail/>}/>
        </Routes>
    </>
  )
}
