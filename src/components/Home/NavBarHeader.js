import React, {useState} from 'react';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Stack, TextField, MenuItem } from "@mui/material";

const NavBarHeader = () => {
    const [value, setValue] = useState(null);
    return (
        <Stack  >
        <h4>Filtres</h4>
        <Stack direction="row" spacing={2}>
          <TextField label="Type de carte" sx={{ width: "400px" }} select size='small'>
            <MenuItem>Carte consulaire</MenuItem>
            <MenuItem>CNI</MenuItem>
            <MenuItem>Carte consulaire</MenuItem>
          </TextField>
          <LocalizationProvider dateAdapter={AdapterDayjs} size='small'>
            <DatePicker
              label="Date de soumission"
              value={value}
              
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField label="Statut" sx={{ width: "400px" }} select size='small'>
            <MenuItem>Carte consulaire</MenuItem>
            <MenuItem>CNI</MenuItem>
            <MenuItem>Carte consulaire</MenuItem>
          </TextField>
        </Stack>
        </Stack>
    );
};

export default NavBarHeader;