import React from "react";
import { Stack, TextField, Typography, Button } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
const NavBar3 = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Button
          sx={{ color: "black" }}
          variant="outlined"
          startIcon={<IosShareIcon />}
        >
          Importer
        </Button>
      </Typography>
      <TextField
        label="Rechercher Contact"
        size="small"
        
        variant="outlined"
      />
      <Button color="primary" variant='contained' >
        NOUVELLE DEMANDE
      </Button>    
    </Stack>
  );
};

export default NavBar3;
