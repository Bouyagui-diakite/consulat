import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, setOptions } from "@mobiscroll/react";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
setOptions({
  theme: "ios",
  themeVariant: "light",
});
const Appointement = () => {
  return (
    <div>
      <Sidebar />
      <main className="main-wrap">
        <Header />
      </main>
      <Box sx={{ flexGrow: 1, marginLeft: "290px" }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Item>
              <p className="p">Choisir un creneau horaire</p>
              <div>
                <Datepicker controls={["calendar", "time"]} display="inline" />
              </div>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <div className="boxs">
                <p className="p">Informations du rende-vous</p>
                <div className="class1">
                  <span>Demandeur</span>
                  <p>Bouyagui Diakite</p>
                </div>
                <div className="class1">
                  <span>Date et heure du rendez-vous</span>
                  <p>10 juillet 2022 a 12h</p>
                </div>
                <div className="class1">
                  <span>Type de carte</span>
                  <p>Carte consulaire</p>
                </div>
                <div className="class1">
                  <span>Nombre de cartes</span>
                  <p>10</p>
                </div>
                <div className="class1">
                  <span>Deadline</span>
                  <p>12/07/2022</p>
                </div>
              </div>
              <NavLink activeClassName="active" to="/confirm">
                <Button
                  style={{
                    marginLeft: "240px",
                    marginTop: "5px",
                    margin: "20px",
                    padding: "10px",
                  }}
                  label="Valider"
                  className="p-button-info"
                />
              </NavLink>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Appointement;
