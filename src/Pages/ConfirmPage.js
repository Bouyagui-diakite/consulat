import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ConfirmPage = () => {
  return (
    <div>
      <Sidebar />
      <main className="main-wrap">
        <Header />
      </main>
      <Box sx={{ flexGrow: 1, marginLeft: "290px", marginTop: "40px" }}>
        <Grid item xs={12}>
          <Item>
            <div className="container2">
              <div className="it1">
                <h2>
                  <i className="fas fa-calendar"></i>
                </h2>
                <div className="it1-item">
                  <span>Date du rendez-vous</span>
                  <p>12 juillet 2022</p>
                </div>
              </div>
              <div className="it1">
                <h2>
                  <i className="fas fa-clock"></i>
                </h2>
                <div className="it1-item">
                  <span>Créneau horaire</span>
                  <p>12h-13h</p>
                </div>
              </div>
              <div className="it1">
                <h2>
                  <i className="fas fa-hashtag"></i>
                </h2>
                <div className="it1-item">
                  <span>Numéro demande</span>
                  <p>17357753</p>
                </div>
              </div>
            </div>
            <div className="it4">
              <h4>Bonjour,</h4>
              <p>Votre rendez-vous a été confirmé</p>
            </div>
          </Item>
        </Grid>
      </Box>
    </div>
  );
};

export default ConfirmPage;
