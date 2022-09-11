import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './barra.css';
import logo from './logo.png';
import pesquisa from './pesquisa.png';


export default function Navegacao({pokemonFilter}) {
  return (
    <nav>
      <img src={logo} className='logo' alt="logo"/>
      <input className='barra' placeholder='Search' onChange={(e)=> pokemonFilter(e.target.value)}/>
      <img className="lupa" src={pesquisa} alt="pesquisa" />
      
    </nav>
  );
}
