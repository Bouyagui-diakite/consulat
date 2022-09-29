import React from "react";
import { Stack, Button, Typography, Avatar } from "@mui/material";

const NavBar = () => {
  return (
      <Stack direction="row" spacing={2}>
        <Typography variant = "h6" component='div' sx = {{flexGrow:1}}>
        <Button color="inherit"><p className='details'>N*B12CVB938</p></Button>
        <Button color="inherit"><p className='details2'>Previsualiser la carte</p></Button>
        </Typography>
        <Button color="inherit"><p className='details2'>5/20 beneficiares</p></Button>
      </Stack>

      
    
  );
};

export default NavBar;
