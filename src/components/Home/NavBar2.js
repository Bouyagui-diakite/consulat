import React from "react";
import { Stack, Button, Avatar } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import DeleteIcon from "@mui/icons-material/Delete";

const NavBar2 = () => {
  return (
    <Stack spacing={2} direction="row">
      <Avatar sx={{ width: 180, height: 180, margin: 2 }}></Avatar>
      <Stack spacing={2} direction="column" sx={{ marginTop: 4 }}>
        <Button
          sx={{ color: "black" }}
          variant="outlined"
          startIcon={<IosShareIcon />}
        >
          Importer
        </Button>
        <Button variant="outlined" sx={{ color: "black" }} startIcon={<DeleteIcon />}>
          Supprimer
        </Button>
      </Stack>
    </Stack>
  );
};

export default NavBar2;
