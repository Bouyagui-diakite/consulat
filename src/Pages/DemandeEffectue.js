import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import ListDemandes from "../components/Home/ListDemandes";
import NavBarHeader from "../components/Home/NavBarHeader";
import NavBar3 from "../components/Home/NavBar3";


const DemandeEffectue = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <NavBarHeader />
        <div className="content-head">
          {/* <NavBar3 /> */}
          <div className="content-body">
            <ListDemandes />
          </div>
        </div>
      </main>
    </>
  );
};

export default DemandeEffectue;
