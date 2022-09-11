import {Grid} from '@mui/material';
import {Box, Container} from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState} from 'react';
import Navegacao from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';


export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(()=>{
    getPokemons();
  }, []);
  const getPokemons = ()=>{
    var endpoints = [];
    for (var i = 1; i < 200; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    };
    var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res)=> setPokemons(res));
  };

  return (
    <div>
      <Navegacao />
      <Container maxWidth='false'>
        <Grid container spacing={1}>
          {pokemons.map((pokemon, key)=>(
            <Grid item xs={2} key={key}>
            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default}/>
          </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};