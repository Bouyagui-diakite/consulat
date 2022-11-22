import React, { useRef } from "react";
import Header from "../components/Header";
import Sidebar from "./../components/sidebar";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import '../styles/Dashbord.css';

const HomeScreen = () => {
  const events1 = [
    {
      status: "Demande",
      image: "bonbon-id-card.png",
      date: "15/10/2020 10:30",
      icon: "pi pi-book",
      color: "#9C27B0",
     
    },
    {
      status: "Processing",
      image: "office.jpg",
      date: "15/10/2020 14:00",
      icon: "pi pi-bookmark-fill",
      color: "#673AB7",
    },
    {
      status: "Demandes En cours de traitement",
      date: "15/10/2020 16:15",
      image: "bonbon-id-card.png",
      icon: "pi pi-arrow-circle-down",
      color: "#FF9800",
    },
    {
      status: "Demandes traites",
      date: "16/10/2020 10:00",
      image: "office.jpg",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];
  const customizedMarker = (item) => {
    return (
      <span
        className="custom-marker shadow-1"
        style={{ backgroundColor: item.color }}
      >
        <i className={item.icon}></i>
      </span>
    );
  };

  const customizedContent = (item) => {
    return (
      <Card title={item.status} subTitle={item.date}>
        {item.image && (
          <img
            src={`images/${item.image}`}
            onError={(e) =>
              (e.target.src =
                "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            alt={item.name}
            width={200}
            className="shadow-1"
          />
        )}
        <p>
          Apprenez plus sur cette section en cliquant sur le bouton ci-dessous. vous aurez tout les renseignements dont vous aurez besoins. 
        
        </p>
        <Button label="En savoir plus" className="p-button-text"></Button>
      </Card>
    );
  };
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
      </main>
      <div className="timeline-demo">
      <div className="card-p">
        <h5>DASHBOARD</h5>
        <p>Bienvenu dans notre site web, ici vous faites vos demandes de cartes en toute securite

          
        </p>
        <Timeline
          value={events1}
          align="alternate"
          className="customized-timeline"
          marker={customizedMarker}
          content={customizedContent}
        />
      </div>
      </div>
    </>
  );
};

export default HomeScreen;
