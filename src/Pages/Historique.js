import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "../styles/index.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";


import { Button } from "primereact/button";

const Historique = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Sidebar />
      <main className="main-wrap">
        <Header />
      </main>
      <Box sx={{ width: "100%", marginLeft: "190px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
          <Grid item xs={5} sx={{ marginLeft: "90px" }}>
            <Item>
              <h6 className="box-head">Prochain rendez-vous</h6>
              <div className="item">
                <i className="icon fas fa-calendar"></i>
                <div className="item-content">
                  <p>Date et heure du rendez-vous</p>
                  <p>28 JUILLET 2022</p>
                </div>
                <span>|</span>
                <div className="item2">
                  <i className="icon fas fa-calendar"></i>
                  <p>Creneau horaire</p>
                </div>
              </div>
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/rendez-vous"
              >
                <Button
                  style={{ marginRight: "240px" }}
                  label="NOUVEAU RENDEZ-VOUS"
                  className="p-button-info"
                />
              </NavLink>
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item>
              <h5>Historique</h5>
              <div className="history">
                <FontAwesomeIcon className="circle" icon={faCircle} />
                <p>Rendez-vous assistee</p>
                <FontAwesomeIcon className="circle2" icon={faCircle} />
                <p>Rendez-vous manque</p>
              </div>
              <div className="history2">
                <FontAwesomeIcon className="circle" icon={faCircle} />
                <h3>|</h3>
                <div className="ct-1">
                 <span>15 juillet 2022</span>
                  <p>Demande N*12345678</p>
                  <h6>
                    Rendez-vous de 12H a 13H a lieu recuperation des cartes
                    consulaires
                  </h6>
                  <i>20 cartes</i>
                </div>
              </div>
              <div className="history2">
                <FontAwesomeIcon className="circle" icon={faCircle} />
                <h3>|</h3>
                <div className="ct-1">
                <span>01 juillet 2022</span>
                  <p>Demande N*12345678</p>
                  <h6>
                    Rendez-vous de 12H a 13H a lieu recuperation des cartes
                    consulaires
                  </h6>
                  <i>20 cartes</i>
                </div>
              </div>
              <div className="history2">
                <FontAwesomeIcon className="circle3" icon={faCircle} />
                <h3>|</h3>
                <div className="ct-1">
                <span>22 Mai 2022</span>
                  <p>Demande N*12345678</p>
                  <h6>
                    Rendez-vous de 12H a 13H a lieu recuperation des cartes
                    consulaires
                  </h6>
                  <i>20 cartes</i>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Historique;
