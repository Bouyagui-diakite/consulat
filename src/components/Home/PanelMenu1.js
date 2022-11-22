import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../styles/index2.css";
import React from "react";
import { PanelMenu } from "primereact/panelmenu";

const PanelMenu1 = () => {
  const items = [
    {
      label: "Demande de cartes",
      icon: "pi pi-fw pi-file",
      items: [
        {
          label: "Nouvelle demande",

          icon: "pi pi-circle-fill",
        },
        {
          label: "Demande Effectue",
          icon: "pi pi-circle-fill",
        },
      ],
    },
  ];

  return (
    <div>
      <div>
        <PanelMenu model={items} style={{ width: "16rem" }} />
      </div>
    </div>
  );
};

export default PanelMenu1;
