import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box} from '@mui/system';
import './cards.css';

export default function PokemonCard({name, image, types}) {

  const typeHandler = ()=>{
    if(types[1]){
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  }

  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography className='nomeDoPokemon' gutterBottom component="div">
          {name}
        </Typography>
        <Typography className="tipos" gutterBottom component="div">
          {typeHandler()}
        </Typography>
        </Box>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
