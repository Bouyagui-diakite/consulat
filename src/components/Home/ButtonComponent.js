import React from "react";
import { Button, Typography, Stack } from "@mui/material";

const ButtonComponent = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Button color="secondary" variant='contained'>
         PRECEDENT
        </Button>
      </Typography>
      <Button color="secondary" variant='contained'>
       ENREGISTRER
      </Button>
      <Button color="primary" variant='contained'>
        SUIVANT
      </Button>
    </Stack>
  );
};

export default ButtonComponent;
