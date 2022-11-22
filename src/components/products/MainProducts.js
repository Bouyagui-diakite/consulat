import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Home/Navigation";
import {
  Stack,
  TextField,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import NavBar from "../Home/NavBar";
import NavBar2 from "../Home/NavBar2";
import ButtonComponent from "../Home/ButtonComponent";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const MainProducts = () => {
  const [value, setValue] = React.useState(null);

  return (
    <section className="content-main">
      <div className="content-header">
        <h4 className="content-title">CARTE CONSULAIRE</h4>
        <p>Choix du type de la carte</p>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto ">
              <h6 className="infos-text">Informations des beneficiaires</h6>
            </div>
          </div>
        </header>

        <div className="card-body">
          <Navigation />
          <hr />
          <NavBar />
          <NavBar2 />
          <Stack spacing={4}>
            <Stack direction="row" spacing={4}>
              <TextField
                label="Nom"
                required
                size="small"
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Prenom"
                size="small"
                fullWidth
                variant="outlined"
              />
            </Stack>
            <Stack direction="row" spacing={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                label="Date de Naissance"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <TextField
                label="Lieu de Naissance"
                fullWidth
                size="small"
                variant="outlined"
              />
            </Stack>
            <Stack direction="row" spacing={4}>
              <TextField
                label="Adresse"
                fullWidth
                required
                size="small"
                variant="outlined"
              />
              <TextField
                label="Taille (en cm)"
                size="small"
                variant="outlined"
              />
              <FormLabel>Genre</FormLabel>
              <RadioGroup name="Gender" row>
                <FormControlLabel
                  control={<Radio />}
                  label="Masculin"
                  value="Masculin"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Feminin"
                  value="Feminin"
                />
              </RadioGroup>
            </Stack>
          </Stack>
          <ButtonComponent />
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
