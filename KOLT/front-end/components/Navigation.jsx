import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MapComponent from "../components/Map.jsx"
import NaujasPaspirtukas from './NaujasPaspirtukas.jsx';



const kaunas = {lat:54.898521, long: 23.903597};



// Susitvarkom aktyvius puslapius

const PaspirtukuIstorija = () => <div>Paspirtuku istorija</div>;



const NavigationBar = () => {

  const [activeComponent, setActiveComponent] = useState(null); 

  const renderComponent = () => {
    switch (activeComponent) {
      case 'newScooter':
        return <NaujasPaspirtukas />;
      case 'history':
        return <PaspirtukuIstorija />
  
      default:
          return <MapComponent lat={kaunas.lat} long={kaunas.long}/> 
    }
  };



  return (
    <AppBar position="static" sx={{backgroundColor: '#4CC773'}}>
      <Toolbar>
        {/* Kairėje pusėje - logotipas */}
        <Typography variant="h6" sx={{ flexGrow: 0.1 }}>
          <img src="./images/scooter.png" className='logo'/>
        </Typography>

        {/* Centrinė dalis - nuorodos */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button color="inherit" variant="outlined" onClick={()=> setActiveComponent('newScooter')}>
            Naujas Pasiprtukas
          </Button>
          <Button color="inherit" variant="outlined" onClick={()=> setActiveComponent('history')}>
            Paspirtuku Istorija
          </Button>
          <Button color="inherit" variant="outlined" href="/isnuomot">
            Isnuomot Paspirtuka
          </Button>
          <Button color="inherit" variant="outlined" href="/login">
            Prisijungti
          </Button>
        </Box>

        {/* Dešinėje pusėje - mygtukas */}
        <Button color="inherit" variant="outlined" href="/login">
          Prisijungti
        </Button>
      </Toolbar>

      <Box sx={{ marginTop: 4 }}>{renderComponent()}</Box>
    </AppBar>
  );
};

export default NavigationBar;